function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// 환자 클릭시 보여지는 팝업 창
function PatientsModal_open() {
  document.getElementById('PatientsModal').style.display='block';
}

// When the user clicks anywhere outside of the modal, close it
function PatientsModal_close() {
  document.getElementById('PatientsModal').style.display='none';
}
/*
// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('PatientsModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/
