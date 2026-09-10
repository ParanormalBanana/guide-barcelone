(function () {
  const places = window.GUIDE_PLACES;
  const categories = window.GUIDE_CATEGORIES;
  const sections = window.GUIDE_SECTIONS;

  const listEl = document.getElementById("place-list");
  const filtersEl = document.getElementById("filters");
  const countEl = document.getElementById("visible-count");
  let activeFilter = "all";
  let activeId = null;
  const markers = new Map();

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function isMobile() {
    return window.matchMedia("(max-width: 920px)").matches;
  }

  function mapsUrl(place) {
    return (
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(place.lat + "," + place.lng + " " + place.name)
    );
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderFilters() {
    filtersEl.innerHTML = "";
    categories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "filter";
      btn.textContent = cat.short;
      btn.setAttribute("aria-pressed", cat.id === activeFilter ? "true" : "false");
      btn.addEventListener("click", () => {
        activeFilter = cat.id;
        renderFilters();
        renderList();
        syncMarkers();
        fitVisible();
      });
      filtersEl.appendChild(btn);
    });
  }

  function visiblePlaces() {
    return places.filter(
      (place) => activeFilter === "all" || place.category === activeFilter
    );
  }

  function renderList() {
    listEl.innerHTML = "";
    const visible = new Set(visiblePlaces().map((p) => p.id));
    let index = 0;

    sections.forEach((section) => {
      const items = places.filter((p) => p.category === section.id);
      const shown = items.some((p) => visible.has(p.id));
      const head = document.createElement("header");
      head.className = "section-head";
      head.hidden = !shown;
      head.innerHTML =
        '<p class="kicker">' +
        escapeHtml(section.kicker) +
        "</p><h3>" +
        escapeHtml(section.title) +
        "</h3><p>" +
        escapeHtml(section.intro) +
        "</p>";
      listEl.appendChild(head);

      items.forEach((place) => {
        index += 1;
        place.number = index;
        const card = document.createElement("article");
        card.className = "place " + place.category;
        card.id = place.id;
        card.hidden = !visible.has(place.id);
        if (place.id === activeId) card.classList.add("is-active");
        card.innerHTML =
          '<div class="place-top">' +
          "<div>" +
          '<div class="num">' +
          pad(index) +
          "</div>" +
          "<h4>" +
          escapeHtml(place.name) +
          "</h4>" +
          '<div class="meta">' +
          '<span class="pill">' +
          escapeHtml(place.kind) +
          "</span>" +
          '<span class="pill">' +
          escapeHtml(place.neighborhood) +
          "</span>" +
          '<span class="pill">★ ' +
          place.rating.toFixed(1) +
          "</span>" +
          "</div></div></div>" +
          "<p>" +
          escapeHtml(place.summary) +
          "</p>" +
          '<ul class="tips">' +
          place.tips.map((tip) => "<li>" + escapeHtml(tip) + "</li>").join("") +
          "</ul>" +
          '<div class="actions">' +
          '<button class="btn btn-map" type="button" data-focus="' +
          place.id +
          '">Voir sur la carte</button>' +
          '<a class="btn btn-ext" href="' +
          mapsUrl(place) +
          '" target="_blank" rel="noopener noreferrer">Ouvrir dans Maps</a>' +
          "</div>";
        listEl.appendChild(card);
      });
    });

    countEl.textContent = String(visible.size);
  }

  const map = L.map("map", {
    scrollWheelZoom: false,
    zoomControl: true,
  }).setView([41.387, 2.17], 12);

  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    {
      maxZoom: 19,
      attribution: "Tiles &copy; Esri",
    }
  ).addTo(map);

  map.once("focus", () => map.scrollWheelZoom.enable());
  map.on("click", () => map.scrollWheelZoom.enable());

  function pinIcon(place, active) {
    return L.divIcon({
      className: "pin-icon",
      html:
        '<div class="pin ' +
        place.category +
        (active ? " is-active" : "") +
        '"><span>' +
        place.number +
        "</span></div>",
      iconSize: [30, 30],
      iconAnchor: [15, 28],
      popupAnchor: [0, -24],
    });
  }

  function addMarkers() {
    places.forEach((place) => {
      const marker = L.marker([place.lat, place.lng], {
        icon: pinIcon(place, false),
        title: place.name,
        riseOnHover: true,
      }).addTo(map);
      marker.bindPopup(
        '<div class="popup"><h3>' +
          escapeHtml(place.name) +
          "</h3><p>" +
          escapeHtml(place.neighborhood) +
          " · " +
          escapeHtml(place.kind) +
          "</p></div>"
      );
      marker.on("click", () => focusPlace(place.id, false));
      markers.set(place.id, marker);
    });
  }

  function syncMarkers() {
    const visible = new Set(visiblePlaces().map((p) => p.id));
    markers.forEach((marker, id) => {
      const place = places.find((p) => p.id === id);
      marker.setIcon(pinIcon(place, id === activeId));
      marker.setZIndexOffset(id === activeId ? 1000 : 0);
      if (visible.has(id)) {
        if (!map.hasLayer(marker)) marker.addTo(map);
      } else {
        map.removeLayer(marker);
      }
    });
  }

  function fitVisible() {
    const vis = visiblePlaces();
    if (!vis.length) return;
    const bounds = L.latLngBounds(vis.map((p) => [p.lat, p.lng]));
    map.fitBounds(bounds, { padding: [28, 28], maxZoom: 13, animate: false });
  }

  function focusPlace(id, fromList) {
    const place = places.find((p) => p.id === id);
    if (!place) return;
    if (activeFilter !== "all" && place.category !== activeFilter) {
      activeFilter = "all";
      renderFilters();
      renderList();
    }
    activeId = id;
    document.querySelectorAll(".place").forEach((el) => {
      el.classList.toggle("is-active", el.id === id);
    });
    syncMarkers();

    const marker = markers.get(id);
    map.flyTo([place.lat, place.lng], 15, { duration: 0.55 });
    map.once("moveend", () => {
      if (marker) marker.openPopup();
    });

    if (fromList && isMobile()) {
      document.querySelector(".map-panel").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (!fromList) {
      const card = document.getElementById(id);
      if (card) card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  listEl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-focus]");
    if (button) {
      focusPlace(button.getAttribute("data-focus"), true);
      return;
    }
    if (event.target.closest("a")) return;
    const card = event.target.closest(".place");
    if (card) focusPlace(card.id, true);
  });

  renderFilters();
  renderList();
  addMarkers();
  syncMarkers();

  function readyMap() {
    map.invalidateSize();
    fitVisible();
  }

  setTimeout(readyMap, 120);
  window.addEventListener("load", readyMap);
  window.addEventListener("resize", () => {
    map.invalidateSize();
  });
})();
