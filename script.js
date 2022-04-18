
// START MODAL  SECTION

const modal = document.getElementById("myModal");

const modalButton = document.getElementById("open-modal");

const span = document.getElementsByClassName("close")[0];

modalButton.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// END MODAL  SECTION

// Start Toast Section

function showToast() {
  let x = document.getElementById("toast-component");

  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

// End toast section

//Start Navbar section
function handleNavbarDisplay() {
  var x = document.getElementById("navbar-responsive");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//End Navbar section
