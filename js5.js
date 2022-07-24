
var modal = document.getElementById('id01');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById("myCheckbox").addEventListener("submit", function(event){
  event.preventDefault()
  modal.style.display = "none";
  window.open("success.html");
});

