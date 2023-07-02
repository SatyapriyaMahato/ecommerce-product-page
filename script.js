const cartQtytNums = document.querySelector(".cart-items-number");
cartQtytNums.style.display = "none";

const overlay = document.querySelector('.overlay');
const cartIcon = document.querySelector('.cart-icon');
const cart = document.querySelector('.cart');
const modalView = document.querySelector(".modal-view");
const modalCloseBtn = document.querySelector(".close-icon");

const productThumbnail = document.querySelector('.product-thumbnail');
const thumnailArr = [...productThumbnail.getElementsByTagName("img")];

const productImage = document.querySelector('.product-image');
const productArr = [...productImage.getElementsByTagName("img")];

const modalProductThumbnail = document.querySelector('#modalProductThumbnail');
const modalThumnailArr = [...modalProductThumbnail.getElementsByTagName("img")];

const modalProductImages = document.querySelector("#modalProductImages");
const modalProductArr = [...modalProductImages.getElementsByTagName("img")];

const modalPrevBtn = document.querySelector('.modal-prev-icon');
const modalNextBtn = document.querySelector('.modal-next-icon');

const defaultPrevBtn = document.querySelector('.default-prev-icon');
const defaultNextBtn = document.querySelector('.default-next-icon');

for (const x of thumnailArr) {
    x.addEventListener("click", function (e) {

        const str = String(e.target.className).replace("-thumbnail", "");
        for (const x of productArr) {
            const str2 = String(x.className);

            if (str2 === str) {
                document.querySelector(`.${str}`).style.display = "block";

            } else {
                document.querySelector(`.${str2}`).style.display = "none";
            }

        }
    });
}

for (const x of modalThumnailArr) {
    x.addEventListener("click", function (e) {
        const str = String(e.target.className).replace("-thumbnail", "");
        for (const x of modalProductArr) {
            const str2 = String(x.className);

            if (str2 === str) {
                document.querySelector(`.${str}`).style.display = "block";
            } else {
                document.querySelector(`.${str2}`).style.display = "none";
            }

        }
    });
}


productImage.addEventListener("click", function () {
    if (window.innerWidth > 768) {
        openProductModal();
        slideShow(modalProductArr, modalPrevBtn, modalNextBtn);
    }
});
slideShow(productArr, defaultPrevBtn, defaultNextBtn);


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
        }
        imagesArr[slideIndex - 1].style.display = "block";

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
    // overlay.classList.remove('hidden');
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
const cartPrices = document.querySelector('.cartPrices');
const discountedPrice = document.querySelector('.dp');
const btnCheckout = document.querySelector('.btn-checkout');

const addToCartBtn = document.querySelector('.addToCart-btn');
const cardContent = document.querySelector('.cart-content');


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

