function toggleDarkMode() {
    var body = document.body;
    var main = document.getElementById('main')
    if (document.getElementById('modo-oscuro').textContent === '☀️') {
      document.getElementById('modo-oscuro').textContent = '🌙';
    } else {
      document.getElementById('modo-oscuro').textContent = '☀️';
    }
    body.classList.toggle('gradient')
    body.classList.toggle("modo-oscuro");
    oscuroAccesoriosvarios();
    oscuroBachas();
    oscuroCocina();
    oscuroBaño();
    oscuroGriferia();
    oscuroVanitory();
  }

  function oscuroAccesoriosvarios() {
    document.getElementById("flush-collapseOne").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseTwo").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseThree").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseFour").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseFive").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseSix").classList.toggle("modo-oscuro");
  }

  function oscuroBachas() {
    document.getElementById("flush-collapseOne1").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseTwo1").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseThree1").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseFour1").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseFive1").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseSix1").classList.toggle("modo-oscuro");
  }

  function oscuroCocina() {
    document.getElementById("flush-collapseOnec").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseTwoc").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseThreec").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseFourc").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseFivec").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseSixc").classList.toggle("modo-oscuro");
  }

  function oscuroBaño() {
    document.getElementById("flush-collapseOneb").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseTwob").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseThreeb").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseFourb").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseFiveb").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseSixb").classList.toggle("modo-oscuro");
  }

  function oscuroGriferia() {
    document.getElementById("flush-collapseOne5").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseTwo5").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseThree5").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseFour5").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseFive5").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseSix5").classList.toggle("modo-oscuro");
  }

  function oscuroVanitory() {
    document.getElementById("flush-collapseOne6").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseTwo6").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseThree6").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseFour6").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseFive6").classList.toggle("modo-oscuro");
    document.getElementById("flush-collapseSix6").classList.toggle("modo-oscuro")
  }