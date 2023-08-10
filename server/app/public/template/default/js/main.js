function toSearch() {
    var keywords = document.querySelectorAll('.search-input')[0].value || document.querySelectorAll('.search-input')[1].value;
    if (keywords) {
        location.href = location.origin + '/search/' + keywords + '.html'
    }
}

document.querySelectorAll('.search-input').forEach((item) => {
    
    item.addEventListener('keyup', function (event) {
        console.log(event)
        if (event.keyCode == 13) {
            event.preventDefault();
            toSearch()
        }
    })
})
