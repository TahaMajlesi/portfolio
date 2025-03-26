let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBar").style.top = "16px";
  } else {
    document.getElementById("navBar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};
