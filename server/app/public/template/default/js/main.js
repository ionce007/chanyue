
function toSearch() {
    var keywords = document.querySelector('#search').value;
    if (keywords) {
        location.href = location.origin + '/search/' + keywords + '/index.html'
    }
} 