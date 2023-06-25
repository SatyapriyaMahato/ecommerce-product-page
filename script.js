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






for (const x of thumnailArr) {
    x.addEventListener("click", function (e) {
        console.log(e);
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

productImage.addEventListener("click", function(){openProductModal()});
modalCloseBtn.addEventListener("click", function(){closeProductModal()});
overlay.addEventListener("click", function(){closeProductModal()});;

cartIcon.addEventListener("click", function(){openCart()});
overlay.addEventListener("click", function(){closeCart()});


function addOverlay() {
    overlay.classList.toggle('hidden');
}

function openProductModal() {
    modalView.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

function closeProductModal() {
    modalView.classList.add('hidden');
    overlay.classList.add('hidden');
};

function openCart() {
    cart.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

function closeCart() {
    cart.classList.add('hidden');
    overlay.classList.add('hidden');
};





