let slides = document.querySelectorAll('.slide-container');
let index = 0;

// next function
function next () {
    // Bỏ class (.active) của (.slide-container ) hiện tại đi ==>> display=none
    slides[index].classList.remove('active');
    
    // Cái này khá hay ==>> không cần dùng mệnh đề if khi mà (index >= slides.length)
    // vì khi (index = slides.length) thì phép chia lấy phần dư (%) sẽ trở về 0
    index=(index + 1) % slides.length;


    // Thêm class (.active) vào (.slide-container) kế tiếp ==>> display=block
    slides[index].classList.add('active');


    console.log(index);
}


// prev function
function prev () {
    slides[index].classList.remove('active');
    
    index=(index - 1 + slides.length) % slides.length;

    slides[index].classList.add('active');


    console.log(index);
}

/* ============================================================================================= */
// auto play

// slides change every 7s
// setInterval(next, 7000);








