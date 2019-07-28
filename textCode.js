var searchInput = document.getElementById("search-input");
var autosaveTextarea = document.getElementById("autosave-textarea");
var searchLog = document.getElementById("search-log");
var autosaveLog = document.getElementById("autosave-log");

function logSearch() {
  var p = document.createElement("p");
  p.innerText = `Searching: ${searchInput.value}`;
  searchLog.appendChild(p);
}

function logAutosave() {
  var p = document.createElement("p");
  p.innerText = `Saving: ${autosaveTextarea.value}`;
  autosaveLog.appendChild(p);
}

// FUN PART BELOW
// searchInput.addEventListener("input", logSearch);
// autosaveTextarea.addEventListener("input", logAutosave);
