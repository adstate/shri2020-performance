document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.card').forEach(function(e) {
        if (e.classList.contains('card_size_s')) {
            e.style.borderRadius = '22px';
        } else {
            e.style.borderRadius = '23px';
        }
    });

    document.querySelector('.buttons-wrap').innerHTML = '<button class="button button_yellow" type="button">Да</button>' +
        '<button class="button">Нет</button>';
});

document.addEventListener("DOMContentLoaded", function () {
    var buttonsContainer = document.querySelector(".buttons-wrap");
    var fridgeInfoContainer = document.querySelector(".card_size_m:nth-child(8) .card-description");
    setTimeout(function() {
        var confirmPurchaseButton = document.querySelector(".buttons-wrap .button_yellow");
        var purchaseListContainer = document.createElement('div');
        var purchaseListTitle = document.createElement('p');
        var purchaseList = document.createElement('ol');
        var purchaseListItemOne = document.createElement('li');
        var purchaseListItemTwo = document.createElement('li');

        purchaseListContainer.setAttribute('class', 'purchase-list-wrap');
        purchaseListTitle.setAttribute('class', 'card-description card-description_big description_critical');
        purchaseListTitle.textContent = 'Список покупок:';
        purchaseList.setAttribute('class', 'purchase-list');
        purchaseListItemOne.setAttribute('class', 'purchase-list__item');
        purchaseListItemOne.textContent = 'Хлеб';
        purchaseListItemTwo.setAttribute('class', 'purchase-list__item');
        purchaseListItemTwo.textContent = 'Молоко';

        purchaseListContainer.appendChild(purchaseListTitle);
        purchaseListContainer.appendChild(purchaseList);
        purchaseList.appendChild(purchaseListItemOne);
        purchaseList.appendChild(purchaseListItemTwo);

        confirmPurchaseButton.onclick = function() {
            fridgeInfoContainer.replaceWith(purchaseListContainer)
            buttonsContainer.style.display = "none";
        }
     }, 400);
   
    document.getElementsByClassName("header-menu__switcher")[0].addEventListener("click", function () {
        document.getElementsByClassName("header-menu")[0].classList.toggle("header-menu_active")
    })
});
