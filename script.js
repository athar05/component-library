// Start Toast Section

function showToast() {
  let x = document.getElementById("toast-component");

  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

// End toast section
