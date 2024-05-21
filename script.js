// let productstitle = document.querySelectorAll('.product-title');
// let searchbtn = document.getElementById('search-btn');

// searchbtn.addEventListener('click', () => {
//     let input = document.getElementById('input').value.toLowerCase();
//     let found = false;


//     searchbtn.addEventListener('click', () => {
//         let input = document.getElementById('input').value.toLowerCase();
//         let found = false;
//         if(input.trim()!==''){
//             productstitle.forEach(element => {
//                 if(element.textContent.toLowerCase().includes(input)){
//                     found=true;
//                 }
//             });
//             if(found){
//                 alert('product title matches');
//             }
//             else{
//                 alert('product title does not match');
//             }
//         }
//         else{
//             alert('Please enter txt in the input')
//         }
//     });
// });

function search() {
    let input = document.getElementById('input').value.toLowerCase();
    let products = document.querySelectorAll('.product');

    products.forEach((product) => {
        let title = product.querySelector('#product-title');

        let value = title.innerHTML || title.innerText || title.textContent;

        if (value.toLowerCase().indexOf(input) > -1) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}

