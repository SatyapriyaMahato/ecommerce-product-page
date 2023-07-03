"use str";

const cartQtytNums = document.querySelector(".cart-items-number");
cartQtytNums.style.display = "none";

const overlay = document.querySelector('.overlay');
cartIcon = document.querySelector('.cart-icon');
cart = document.querySelector('.cart');
modalView = document.querySelector(".modal-view");
modalCloseBtn = document.querySelector(".close-icon");


thumnailArr = [...document.querySelector('.product-thumbnail').getElementsByTagName("img")];
productArr = [...document.querySelector('.product-image').getElementsByTagName("img")];

modalThumnailArr = [...document.querySelector('#modalProductThumbnail').getElementsByTagName("img")];
modalProductArr = [...document.querySelector("#modalProductImages").getElementsByTagName("img")];

modalPrevBtn = document.querySelector('.modal-prev-icon');
modalNextBtn = document.querySelector('.modal-next-icon');

defaultPrevBtn = document.querySelector('.default-prev-icon');
defaultNextBtn = document.querySelector('.default-next-icon');


// function for the default section
thumnailArr.forEach(function (thumbnail, index) {
    thumbnail.addEventListener("click", function () {
        thumnailArr.forEach(function (thumbnail) {
            thumbnail.classList.remove("active");
        });

        productArr.forEach(function (image) {
            image.style.display = "none";
        });

        productArr[index].style.display = "block";

        thumbnail.classList.add("active");
    });
});

// function for the modal section
modalThumnailArr.forEach(function (thumbnail, index) {
    thumbnail.addEventListener("click", function () {

        modalThumnailArr.forEach(function (thumbnail) {
            thumbnail.classList.remove("active");
        });

        modalProductArr.forEach(function (image) {
            image.style.display = "none";
        });
        modalProductArr[index].style.display = "block";

        thumbnail.classList.add("active");
    });
});


productImage.addEventListener("click", function () {
    if (window.innerWidth > 768) {
        openProductModal();
        slideShow(modalProductArr, modalPrevBtn, modalNextBtn);
    }
});
slideShow(productArr, defaultPrevBtn, defaultNextBtn);

// Slide show function
function slideShow(imagesArr, prevBtn, nextBtn) {
    let slideIndex = 1;

    const showSlide = n => {

        if (n > imagesArr.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = imagesArr.length
        }
        for (let i = 0; i < imagesArr.length; i++) {
            imagesArr[i].style.display = "none";
            modalThumnailArr[i].classList.remove("active");


        }
        imagesArr[slideIndex - 1].style.display = "block";

        modalThumnailArr[slideIndex - 1].classList.add("active");

    };

    showSlide(slideIndex);

    const nextSlide = () => showSlide(slideIndex += 1);
    const prevSlide = () => showSlide(slideIndex -= 1);

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
}

modalCloseBtn.addEventListener("click", function () { closeProductModal() });

cartIcon.addEventListener("click", function () {
    openCart();
});


function addOverlay() {
    overlay.classList.toggle('hidden');
}

function openProductModal() {
    modalView.style.display = "flex";
    overlay.classList.remove('hidden');
};

function closeProductModal() {
    modalView.style.display = "none";
    overlay.classList.add('hidden');
};

function openCart() {
    cart.classList.toggle('hidden');
};


// quantity increase and decrease
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const productQty = document.querySelector('.productQty');
minusBtn.addEventListener("click", function () {
    let l = Number(productQty.innerHTML);
    if (l > 0) {
        l -= 1;
        productQty.innerHTML = l;

    } else {
        cartQtytNums.style.display = "none";
    }
})
plusBtn.addEventListener("click", function () {

    let l = Number(productQty.innerHTML);
    l += 1;
    productQty.innerHTML = l;

})


// modal cart functyionality
const cartTotal = document.querySelector('.cartTotal');
cartPrices = document.querySelector('.cartPrices');
discountedPrice = document.querySelector('.dp');
btnCheckout = document.querySelector('.btn-checkout');
addToCartBtn = document.querySelector('.addToCart-btn');
cardContent = document.querySelector('.cart-content');


addToCartBtn.addEventListener("click", function () {
    document.querySelector(".item").classList.remove('hidden');
    document.querySelector(".empty-text").style.display = "none";


    let qunatities = Number(productQty.innerHTML);
    if (qunatities > 0) {
        cartQtytNums.innerHTML = qunatities;
        cartQtytNums.style.display = "block";
    }

    let price = Number(discountedPrice.innerHTML);
    let totalPrice = price * qunatities;
    console.log(price, qunatities, totalPrice);

    let pricesStr = `$${price}.00×${qunatities}`;
    let totalStr = `=$${totalPrice}.00`;

    cartPrices.innerHTML = pricesStr;
    cartTotal.innerHTML = totalStr;
})

document.querySelector(".delete-btn-icon").addEventListener("click", function () {
    document.querySelector(".item").classList.add('hidden');
    document.querySelector(".empty-text").style.display = "flex";

    productQty.innerHTML = 0;
    cartQtytNums.innerHTML = 0;
    cartQtytNums.style.display = "none";
})

