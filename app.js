/* 
    1 : get all imgs options
    2 : when every image which we select in 1 clicked, the specImage will show that picture
*/

// 1
const imgs = document.querySelectorAll('.image-gallary-items img');
const specImage = document.querySelector('.image-gallery-special img');
imgs.forEach(img => {
    // 2
    img.addEventListener('click', (e) => {
        let imgSrc = e.target.src;
        specImage.src = imgSrc;
    })
})