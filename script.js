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
