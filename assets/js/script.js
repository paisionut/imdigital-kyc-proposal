function backdrop(show) {
  if (show == true) {
    document.querySelector('.bg-backdrop').classList.add('show');
  } else if (show == false) {
    document.querySelector('.bg-backdrop').classList.remove('show');
  }
}

function closeMenu() {
  backdrop(false);
  document.querySelector('.navbar-offcanvas.show').classList.remove('show');
  document.body.classList.remove('overflow-hidden');
}

function showMenu(menuId) {
  backdrop(true);
  document.getElementById(menuId).classList.add('show');
  document.body.classList.add('overflow-hidden');
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('[data-trigger]').forEach(function (everyelement) {
    let offcanvasAttr = everyelement.getAttribute('data-trigger');
    everyelement.addEventListener('click', function (e) {
      e.preventDefault();
      showMenu(offcanvasAttr);
    });
  });
  document.querySelectorAll('.btn-close').forEach(function (everybutton) {
    everybutton.addEventListener('click', function (e) {
      e.preventDefault();
      closeMenu();
    });
  });
  document.querySelector('.bg-backdrop').addEventListener('click', function (event) {
    closeMenu();
  });
});
