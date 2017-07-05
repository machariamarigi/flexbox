console.log('Script Fine')

document.querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();
    [].map.call(document.querySelectorAll('article'), function (el) {
        el.classList.toggle('stack');
    })
})