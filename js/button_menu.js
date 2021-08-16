function myFunction() {
  document.getElementById("#menu_2").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.menu_btn')) {
    var dropdowns = document.getElementsByClassName(".menu_2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var open Dropdown = dropdowns[i];
      if (open Dropdown.classList.contains('show')) {
        open Dropdown.classList.remove('show');
      }
    }
  }
}