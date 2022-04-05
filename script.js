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
