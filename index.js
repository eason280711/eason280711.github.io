
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  var a = screen.width*1;
  var b = document.getElementsByClassName("popl");
  b[0].style.height = a.toString()+"px";
}

(function () {
  var elements = document.getElementsByClassName("bt_index");
  for (var i = 0; i < elements.length; i++) {
    if (i == 2) {
      elements[i].addEventListener(
        "touchstart",
        function (event) {
          event.target.style.filter = "brightness(90%)";
        },
        false
      );
      elements[i].addEventListener(
        "touchend",
        function (event) {
          event.target.style.filter = "brightness(100%)";
        },
        false
      );
      continue;
    }
    elements[i].addEventListener(
      "touchstart",
      function (event) {
        event.target.style.maxWidth = "350%";
        event.target.style.filter = "brightness(80%)";
      },
      false
    );
    elements[i].addEventListener(
      "touchend",
      function (event) {
        event.target.style.maxWidth = "300%";
        event.target.style.filter = "brightness(100%)";
      },
      false
    );
  }
})();
