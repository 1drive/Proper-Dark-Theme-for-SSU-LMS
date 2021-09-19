window.addEventListener('load', function (e) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '#';
    document.head.appendChild(link);
    getURLforMENU();
}, false);

var navButton = document.getElementById('global_nav_courses_link');
if (navButton) {navButton.addEventListener('click', function(event){
    event.preventDefault();
    getURLforMENU();
  });}

function getURLforMENU() {
    var elements = document.getElementsByClassName('fOyUs_bGBk fbyHH_bGBk fbyHH_bSMN');
    if (elements.length > 0) {
        var currentURL = window.location.href;
        var last17digits = currentURL.substr(currentURL.length-17, 17);
        console.log(last17digits.substr(0, 4));
    for (var i = 0, len = elements.length; i < len; i++) {
        var currentURL = window.location.href;
        var last17digits = currentURL.substr(currentURL.length-17, 17);
        if (last17digits.substr(0, 4) == "/ext") {
        elements[i].href = elements[i].href + last17digits;
        }
    }}
    else{
    }
}