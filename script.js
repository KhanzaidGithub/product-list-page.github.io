let productstitle = document.querySelectorAll('.product-title');
let input = document.getElementById('input').value;
let searchbtn = document.getElementById('search-btn');

searchbtn.addEventListener('click', () => {
    if (productstitle == input) {
        alert('product Found');
    }
    else {
        alert('Nothing was found with this provided titile')
    }
});