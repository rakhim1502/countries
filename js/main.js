document.addEventListener("DOMContentLoaded", function() {
  const currentTheme = localStorage.getItem("theme");
  document.body.classList.add(currentTheme + "-mode");
});

function toggleTheme() {
  if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
  }
  else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
  }
}

document.getElementById("toggle-theme").addEventListener("click", toggleTheme);