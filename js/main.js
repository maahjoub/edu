var topoHeader = document.getElementById("topoHeader");
var  nav = document.getElementById("navBar");
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        topoHeader.className = "top-header";
        topoHeader.style.position = 'fixed';
        topoHeader.style.width = '100%';
        topoHeader.style.top = '-100px';
        nav.style.top = '35px';
          } else {
            topoHeader.className = "top-header";
            topoHeader.style.position = '';
            nav.style.top = '135px';
          }
};

// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("myP").className = "test";
//   } else {
//     document.getElementById("myP").className = "";
//   }
// }