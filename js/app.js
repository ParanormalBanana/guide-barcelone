(function () {
  const places = window.GUIDE_PLACES;
  const categories = window.GUIDE_CATEGORIES;
  const sections = window.GUIDE_SECTIONS;
  const itinerary = window.GUIDE_ITINERARY;

  const listEl = document.getElementById("place-list");
  const filtersEl = document.getElementById("filters");
  const countEl = document.getElementById("visible-count");
  const leadEl = document.getElementById("list-lead");
  const legendEl = document.getElementById("legend");
  let activeFilter = "all";
  let activeId = null;
  const markers = new Map();

  const itineraryPlaceIds = [];
  const placeDay = {};
  itinerary.forEach((day) => {
    day.slots.forEach((slot) => {
      (slot.placeIds || []).forEach((id) => {
        if (!placeDay[id]) placeDay[id] = day.id;
        if (itineraryPlaceIds.indexOf(id) === -1) itineraryPlaceIds.push(id);
      });
    });
  });

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function isMobile() {
    return window.matchMedia("(max-width: 920px)").matches;
  }

  function isItinerary() {
    return activeFilter === "itinerary";
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

  function placeById(id) {
    return places.find((p) => p.id === id);
  }

  function renderFilters() {
    filtersEl.innerHTML = "";
    categories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "filter" + (cat.id === "itinerary" ? " filter-itin" : "");
      btn.textContent = cat.short;
      btn.setAttribute("aria-pressed", cat.id === activeFilter ? "true" : "false");
      btn.addEventListener("click", () => {
        activeFilter = cat.id;
        renderFilters();
        renderList();
        updateChrome();
        syncMarkers();
        fitVisible();
      });
      filtersEl.appendChild(btn);
    });
  }

  function updateChrome() {
    if (isItinerary()) {
      countEl.textContent = "5";
      leadEl.textContent = " jours, samedi soir → mercredi après-midi.";
      legendEl.innerHTML =
        '<span><i class="dot day-samedi"></i>Samedi</span>' +
        '<span><i class="dot day-dimanche"></i>Dimanche</span>' +
        '<span><i class="dot day-lundi"></i>Lundi</span>' +
        '<span><i class="dot day-mardi"></i>Mardi</span>' +
        '<span><i class="dot day-mercredi"></i>Mercredi</span>';
    } else {
      leadEl.textContent = " lieux affichés. Filtrez, cliquez un pin, ou une fiche.";
      legendEl.innerHTML =
        '<span><i class="dot classics"></i>Incontournables</span>' +
        '<span><i class="dot heritage"></i>Patrimoine</span>' +
        '<span><i class="dot parks"></i>Parcs &amp; histoire</span>' +
        '<span><i class="dot local"></i>Culture locale</span>';
    }
  }

  function visiblePlaces() {
    if (isItinerary()) {
      return itineraryPlaceIds.map(placeById).filter(Boolean);
    }
    return places.filter(
      (place) => activeFilter === "all" || place.category === activeFilter
    );
  }

  function assignNumbers() {
    if (isItinerary()) {
      itineraryPlaceIds.forEach((id, i) => {
        const place = placeById(id);
        if (place) place.number = i + 1;
      });
      places.forEach((place) => {
        if (itineraryPlaceIds.indexOf(place.id) === -1) place.number = 0;
      });
      return;
    }
    let index = 0;
    sections.forEach((section) => {
      places
        .filter((p) => p.category === section.id)
        .forEach((place) => {
          index += 1;
          place.number = index;
        });
    });
  }

  function renderItinerary() {
    listEl.innerHTML = "";
    assignNumbers();
    itinerary.forEach((day) => {
      const article = document.createElement("article");
      article.className = "itin-day day-" + day.id;
      article.id = "jour-" + day.id;
      let slotsHtml = day.slots
        .map((slot) => {
          const chips = (slot.placeIds || [])
            .map((id) => {
              const place = placeById(id);
              if (!place) return "";
              return (
                '<button class="btn btn-map" type="button" data-focus="' +
                id +
                '">' +
                pad(place.number) +
                " · " +
                escapeHtml(place.name) +
                "</button>"
              );
            })
            .join("");
          return (
            '<li class="itin-slot">' +
            '<p class="itin-time">' +
            escapeHtml(slot.time) +
            "</p>" +
            "<h4>" +
            escapeHtml(slot.title) +
            "</h4>" +
            "<p>" +
            escapeHtml(slot.text) +
            "</p>" +
            (chips ? '<div class="actions">' + chips + "</div>" : "") +
            "</li>"
          );
        })
        .join("");
      article.innerHTML =
        '<p class="kicker">' +
        escapeHtml(day.hours) +
        "</p>" +
        "<h3>" +
        escapeHtml(day.day) +
        " · " +
        escapeHtml(day.title) +
        "</h3>" +
        "<p>" +
        escapeHtml(day.intro) +
        "</p>" +
        '<p class="itin-metro">' +
        escapeHtml(day.metro) +
        "</p>" +
        '<ol class="itin-slots">' +
        slotsHtml +
        "</ol>";
      listEl.appendChild(article);
    });
  }

  function renderPlaceList() {
    listEl.innerHTML = "";
    const visible = new Set(visiblePlaces().map((p) => p.id));
    assignNumbers();

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
        const card = document.createElement("article");
        card.className = "place " + place.category;
        card.id = place.id;
        card.hidden = !visible.has(place.id);
        if (place.id === activeId) card.classList.add("is-active");
        card.innerHTML =
          '<div class="place-top">' +
          "<div>" +
          '<div class="num">' +
          pad(place.number) +
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

  function renderList() {
    if (isItinerary()) renderItinerary();
    else renderPlaceList();
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

  function pinClass(place) {
    if (isItinerary() && placeDay[place.id]) return "day-" + placeDay[place.id];
    return place.category;
  }

  function pinIcon(place, active) {
    return L.divIcon({
      className: "pin-icon",
      html:
        '<div class="pin ' +
        pinClass(place) +
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
    assignNumbers();
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
    assignNumbers();
    const visible = new Set(visiblePlaces().map((p) => p.id));
    markers.forEach((marker, id) => {
      const place = placeById(id);
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

  function placeInCurrentView(place) {
    if (activeFilter === "all") return true;
    if (isItinerary()) return itineraryPlaceIds.indexOf(place.id) !== -1;
    return place.category === activeFilter;
  }

  function focusPlace(id, fromList) {
    const place = placeById(id);
    if (!place) return;
    if (!placeInCurrentView(place)) {
      activeFilter = "all";
      renderFilters();
      renderList();
      updateChrome();
    }
    activeId = id;
    document.querySelectorAll(".place, .itin-day").forEach((el) => {
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
      if (isItinerary()) {
        const btn = listEl.querySelector('[data-focus="' + id + '"]');
        if (btn) btn.closest(".itin-day").scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        const card = document.getElementById(id);
        if (card) card.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
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
  updateChrome();
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
