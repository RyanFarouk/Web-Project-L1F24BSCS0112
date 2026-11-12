const searchInput = document.getElementById("supportSearch");
const topics = document.querySelectorAll(".topic-card");

if (searchInput) {

    searchInput.addEventListener("input", function() {

        const searchText = searchInput.value.toLowerCase().trim();

        topics.forEach(function(topic) {

            const topicName = topic.textContent.toLowerCase();
            const keywords = topic.getAttribute("data-keywords").toLowerCase();

            if (topicName.includes(searchText) || keywords.includes(searchText)) {
                topic.classList.remove("hidden");
            } else {
                topic.classList.add("hidden");
            }

        });

    });

}

const categoryButtons = document.querySelectorAll(".category-btn");
const products = document.querySelectorAll(".product-card");

categoryButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const category = button.getAttribute("data-category");

        products.forEach(function(product) {
            const productCategory = product.getAttribute("data-category");

            if (category === "all" || category === productCategory) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }
        });
    });
});

const countryButton = document.getElementById("countryButton");
const countryList = document.getElementById("countryList");

if (countryButton && countryList) {
    countryButton.addEventListener("click", function() {
        if (countryList.style.display === "none" || countryList.style.display === "") {
            countryList.style.display = "block";
        } else {
            countryList.style.display = "none";
        }
    });
}
