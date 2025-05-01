const cartItems = document.getElementById('cart-items');

// app.js に記述
document.addEventListener("DOMContentLoaded", function () {
    const favoriteButtons = document.querySelectorAll(".favorite-btn");
    favoriteButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.textContent = btn.textContent === "♡" ? "♥" : "♡";
        });
    });
});

document.querySelectorAll(".btn-31").forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault(); // buy.htmlに遷移しないようにする
        const item = btn.closest(".kid");
        const name = item.querySelector("h4").textContent;

        const li = document.createElement("li");
        li.textContent = name;
        document.getElementById("cart-items").appendChild(li);
    });
});

document.getElementById("searchBox").addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    document.querySelectorAll(".kid").forEach(kid => {
        const name = kid.querySelector("h4").textContent.toLowerCase();
        if (name.includes(keyword)) {
            kid.style.display = "flex";
        } else {
            kid.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const nav = document.querySelector(".pc-nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});

