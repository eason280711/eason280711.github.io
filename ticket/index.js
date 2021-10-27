(function () {
  var elements = document.getElementById("bk");
  elements.addEventListener(
    "touchstart",
    function (event) {
      event.target.style.filter = "brightness(80%)";
    },
    false
  );
  elements.addEventListener(
    "touchend",
    function (event) {
      event.target.style.filter = "brightness(100%)";
    },
    false
  );
})();
