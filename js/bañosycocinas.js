function toggleDarkMode() {
    var body = document.body;
    var main = document.getElementById('main')
    if (document.getElementById('modo-oscuro').textContent === '☀️') {
      document.getElementById('modo-oscuro').textContent = '🌙';
    } else {
      document.getElementById('modo-oscuro').textContent = '☀️';
    }
    body.classList.toggle("modo-oscuro");
    main.classList.toggle("gradient");
    main.classList.toggle("modo-oscuro");
}
