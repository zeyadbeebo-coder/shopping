(function () {
  const toppage = document.createElement("div");
  toppage.className = "toppage";
  toppage.innerHTML = `
  <label class="theme1" onclick="toggleTheme()" title="Toggle theme">
    <span id="Alabel">Light</span>
    <div class="t">
      <div class="atheme" id="atheme">☀️</div>
    </div>
  </label>
`;
  document.body.insertBefore(toppage, document.body.firstChild);
  var html = document.documentElement;

  window.applyTheme = function (theme) {
    html.setAttribute("Atheme", theme);

    var lbl = document.getElementById("Alabel");
    var thm = document.getElementById("atheme");

    if (lbl) lbl.textContent = theme === "dark" ? "Dark" : "Light";
    if (thm) thm.textContent = theme === "dark" ? "🌙" : "☀️";

    localStorage.setItem("NileMarket-theme", theme);
  };

  window.toggleTheme = function () {
    var current = html.getAttribute("Atheme") || "light";
    applyTheme(current === "dark" ? "light" : "dark");
  };

  applyTheme(localStorage.getItem("NileMarket-theme") || "light");

  window.addEventListener("storage", function (e) {
    if (e.key === "NileMarket-theme") {
      applyTheme(e.newValue);
    }
  });
})();
