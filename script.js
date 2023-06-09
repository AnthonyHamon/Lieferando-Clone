let allMenu = [
    {
        "sectionName": 'Beliebt',
        "menu_name": 'DA Box',
        "side_dishes": 'Überraschung 16 Nigiri Sushi 10 Sushi Rollen 14 Maki Sushi',
        "prices": 39.91.toFixed(2),
        "amount": 0
    },

    {
        "sectionName": 'Beliebt',
        "menu_name": 'Developer Roll',
        "side_dishes": 'mit Hähnchenfleisch und Teriyakisauce',
        "prices": 8.90.toFixed(2),
        "amount": 0
    },

    {
        "sectionName": 'Beliebt',
        "menu_name": 'Baked Shake Roll',
        "side_dishes": 'Überraschung 16 Nigiri mit Frischkäse, Lachs, Gurke und Avocado',
        "prices": 9.90.toFixed(2),
        "amount": 0
    },

    {
        "sectionName": 'Sushi Boxen und Platten',
        "menu_name": 'Top Box (32 Stück)',
        "side_dishes": 'Überraschung 7 Nigiri Sushi 14 Sushi Rollen 30 Maki Sushi vegetarische Platte',
        "prices": 3.90.toFixed(2),
        "amount": 0
    },

    {
        "sectionName": 'Sushi Boxen und Platten',
        "menu_name": 'Probe Box (11 Stück)',
        "side_dishes": '3 Gurken Maki 3 Rettich Maki3 Inside Out 3 Thunfisch Maki 3 Lachs Maki',
        "prices": 1.90.toFixed(2),
        "amount": 0
    },

    {
        "sectionName": 'Sushi Boxen und Platten',
        "menu_name": 'Helden Box (63 Stück)',
        "side_dishes": 'Überraschung 1 Baked Sake Roll 2 Unagi Nigiri 2 Ebi Nigiri 2 Maguro Nigiri 2 Sake Lachs 2 Inari 3 Ebi Tempura 4 Gyoza 9 Sushi Rollen 12 Makis',
        "prices": 63.63.toFixed(2),
        "amount": 0
    },

    {
        "sectionName": 'Sushi Boxen und Platten',
        "menu_name": 'Bösewicht Box (33 Stück)',
        "side_dishes": 'Überraschung 20 Nigiri Sushi 11 Sushi Rollen 8 Maki Sushi',
        "prices": 33.33.toFixed(2),
        "amount": 0
    },

    {
        "sectionName": 'Sushi Boxen und Platten',
        "menu_name": 'All you can eat Box (1000 Stück)',
        "side_dishes": '10 stück jeder Art',
        "prices": 699.69.toFixed(2),
        "amount": 0
    },

    {
        "sectionName": 'Vorspeisen',
        "menu_name": 'Edamame',
        "side_dishes": 'gesalzene, grüne Sojabohnen',
        "prices": 3.90.toFixed(2),
        "amount": 0
    },

    {
        "sectionName": 'Vorspeisen',
        "menu_name": 'Mozzarella Rollen Sticks (5 Stück)',
        "side_dishes": 'gefüllt mit Mozzarella',
        "prices": 5.55.toFixed(2),
        "amount": 0
    },

    {
        "sectionName": 'Vorspeisen',
        "menu_name": 'Ebi Tempura',
        "side_dishes": 'frittierte Riesengarnelen',
        "prices": 6.33.toFixed(2),
        "amount": 0
    },

    {
        "sectionName": 'Vorspeisen',
        "menu_name": 'Superfrühlingsrollen (3 Stück)',
        "side_dishes": 'mit Garnelen und Chili-Dip',
        "prices": 4.10.toFixed(2),
        "amount": 0
    },

    {
        "sectionName": 'Maki',
        "menu_name": 'Gurken Maki',
        "side_dishes": 'Gurken Rolle',
        "prices": 2.40.toFixed(2),
        "amount": 0
    },

    {
        "sectionName": 'Maki',
        "menu_name": 'Avocado Maki',
        "side_dishes": 'Avocado Rolle',
        "prices": 3.40.toFixed(2),
        "amount": 0
    },

    {
        "sectionName": 'Maki',
        "menu_name": 'Lachs Maki',
        "side_dishes": 'Lachs Rolle',
        "prices": 2.80.toFixed(2),
        "amount": 0
    },

    {
        "sectionName": 'Maki',
        "menu_name": 'Thunfisch Maki',
        "side_dishes": 'Thunfisch Rolle',
        "prices": 4.40.toFixed(2),
        "amount": 0
    }
]

let section = [
    {
        "name": 'Beliebt',
        "separator_picture": "img/favorite_banner.jpg",
    },

    {
        "name": 'Sushi Boxen und Platten',
        "separator_picture": "img/sushi_box_banner.jpg"
    },

    {
        "name": 'Vorspeisen',
        "separator_picture": "img/starter_banner.jpg"
    },

    {
        "name": 'Maki',
        "separator_picture": "img/maki_banner.jpg"
    }
]


function returnMenuSection(i) {
    return `
<h2 id="${section[i]['name']}">${section[i]['name']}</h2>
    <div id="menus${i}"></div>
<div class="menu_separator">
    <img src="${section[i]['separator_picture']}" alt="menu banner">
</div>
    `;
}

function returnMenus(sections, j) {
    return `
 <div class="menu">
    <div class="space_between">
        <div>
            <h3>${sections[j]['menu_name']}</h3>
            <span>${sections[j]['side_dishes']}</span>
        </div>
        <div>
            <img onclick="addMenuToBasket('${sections[j]['menu_name']}')" width="20px" src="img/icons/plus.png" alt="+ icon">
        </div>
    </div>
    <h4>${sections[j]['prices']} €</h4>
 </div>
 `
}


function returnLinks(i) {
    return `
        <li><a href="#${section[i]['name']}">${section[i]['name']}</a></li>
    `
}

function returnBasket() {
    return `
    <div class="column">
        <div id="basketContent">
        ${returnBasketContent()}
        </div>
        <div class="cost">
            <div class="space_between padding_bottom">
                <div>Zwischensumme</div>
                <div>${calcSubtotal()} €</div>
            </div>
            <div class="space_between padding_bottom">
                <div>Lieferkosten</div>
                <div>
                    <span id="unsetDeliveryCost" class="display_none">4,00 €</span>
                    <span>${calcDeliveryCost()} €<span>
                </div>
            </div>
            <div class="space_between">
                <div>Gesamt</div>
                <div>${calcBasket()} €</div>
            </div>
        </div>

        <button class="payButton">Bezahlen</button>
    </div>
    `
}

function returnEmptyBasket() {
    return `
    <img width="30px" src="img/icons/basket.png" alt="basket">
        <div>
            <h2>Fülle deinen Warenkorb</h2>
            <span>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</span>
        </div>
    `;
}

function returnMobileBasketButton(){
    return `
    <button onclick="openMobileBasket()" class="mobile_shopping_cart_button"> <img src="img/icons/basket.png" alt="">Warenkorb (${calcBasket()} €)</button>
    `
}

function returnMobileBuyButton(){
    return `
    <button class="mobile_shopping_cart_button"> <img src="img/icons/basket.png" alt="">Bestellen (${calcBasket()} €)</button>
    `
}

function returnMobileBasket(){
    return `
    <div>
            <div class="mobile_basket_header">
                <span>Warenkorb</span>
                <img onclick="closeMobileBasket()" src="img/icons/close.png" alt="">
            </div>
            <div id="mobileBasketContent" class="mobile_basket_content padding_12px">
                ${returnBasketContent()}
            </div>
        </div>
    </div>

        <div class="sticky_bottom padding_12px">
            <div class="space_between padding_bottom">
                <div>Zwischensumme</div>
                <div>${calcSubtotal()} €</div>
            </div>
            <div class="space_between padding_bottom">
                <div>Lieferkosten</div>
                <div>
                    <span id="unsetMobileDeliveryCost" class="display_none">4,00 €</span>
                    <span>${calcDeliveryCost()} €<span>
                </div>
            </div>
            <div class="space_between padding_bottom">
                <div>Gesamt</div>
                <div>${calcBasket()} €</div>
            </div>
            <div>Kostenfreie Lieferung ab 60,00 €</div>

            <div id="mobileBasketButton" class="mobile_shopping_cart_footer">
                ${returnMobileBuyButton()}
            </div>
        </div>

       
    
    `
}

function returnBasketContent() {
    let htmlText = "";

    for (let index = 0; index < allMenu.length; index++) {
        if (allMenu[index].amount > 0) {
            htmlText += `
        <div class= "margin_top">
            <div>
                <div class="space_between padding_bottom">
                    <div class="gap">
                        <span>${allMenu[index]['amount']}</span>
                        <span>${allMenu[index]['menu_name']}</span>
                    </div>
                    <div>
                        ${adjustBasketPrice(index)} €
                    </div>
                </div>
                <div class="flex_end padding_bottom">
                    <div onclick="addLess('${allMenu[index]['menu_name']}')" id="addLess${index}" class="change_amount"><img src="img/icons/minus.png" alt="- icon"></div>
                    <div onclick="addMore('${allMenu[index]['menu_name']}')" id="addMore${index}" class="change_amount"><img src="img/icons/plus.png" alt="+ icon"></div>
                </div>
            </div>
            <hr class="solid">
        </div>
        `
        }
    }
    return htmlText;
}


function renderPage() {
    renderMenusSection();
    renderLinks();
    renderMobileBasketButton();
}

function renderMenusSection() {
    let menuSection = document.getElementById('menuSection');
    for (let i = 0; i < section.length; i++) {
        menuSection.innerHTML += returnMenuSection(i);
        filterArray(i);
    }
}

function renderMobileBasketButton(){
    let mobileBasketButton = document.getElementById('mobile_shopping_cart_button_ctn');
    mobileBasketButton.innerHTML = returnMobileBasketButton();
}

function renderSecondMobileBasketButton(){
    let mobileBasketButton = document.getElementById('mobileBasketButton');
    mobileBasketButton.innerHTML = returnMobileBasketButton();
    returnMobileBasketButton();
}


function filterArray(i) {
    const section1 = allMenu.filter(elem => elem.sectionName === "Beliebt");
    const section2 = allMenu.filter(elem => elem.sectionName === "Sushi Boxen und Platten");
    const section3 = allMenu.filter(elem => elem.sectionName === "Vorspeisen");
    const section4 = allMenu.filter(elem => elem.sectionName === "Maki");

    let sections = [section1, section2, section3, section4];
    const x = sections[i];
    for (let j = 0; j < x.length; j++) {
        let menu = document.getElementById(`menus${i}`);
        menu.innerHTML += returnMenus(x, j);
    }
}

function renderLinks() {
    let links = document.getElementById('nav_links');
    for (let i = 0; i < section.length; i++) {
        links.innerHTML += returnLinks(i);
    }
}

function addMenuToBasket(name) {
    let index = allMenu.findIndex(e => e.menu_name === name);
    let basket = document.getElementById('basket');
    allMenu[index].amount++;
    basket.innerHTML = returnBasket();
    returnBasket();
    let mobileBasket = document.getElementById('mobileBasket');
    mobileBasket.innerHTML = returnMobileBasket();
    returnMobileBasket();
    showMobileBasketButton();

}

function adjustBasketPrice(index) {
    let price = allMenu[index].prices;
    let x = price * allMenu[index].amount;
    menuPrice = x.toFixed(2);
    return menuPrice;
}

function addMore(name) {
    let basket = document.getElementById('basket');
    let index = allMenu.findIndex(e => e.menu_name === name);
    allMenu[index].amount++;
    basket.innerHTML = returnBasket();
    returnBasket();
    let mobileBasket = document.getElementById('mobileBasket');
    mobileBasket.innerHTML = returnMobileBasket();
    calcMobileDeliveryCost();
    returnMobileBasket();
}

function addLess(name) {
    let index = allMenu.findIndex(e => e.menu_name === name);
    allMenu[index].amount--;
    showEmptyBasket();
    returnBasket();
    let mobileBasket = document.getElementById('mobileBasket');
    mobileBasket.innerHTML = returnMobileBasket();
    calcMobileDeliveryCost();
    hideMobileBasket();
    returnMobileBasket()
}

function calcSubtotal() {
    let calcSubtotal = [];
    let sum = 0;
    for (let i = 0; i < allMenu.length; i++) {
        let price = allMenu[i]['prices'];
        let amount = allMenu[i]['amount'];
        result = price * amount;
        calcSubtotal.push(result);
    }
    calcSubtotal.forEach((e) => sum += e); // addition all value from array "calcSubtotal"
    return sum.toFixed(2);
}

function showEmptyBasket() {
    let basket = document.getElementById('basket');
    if (+calcSubtotal() === 0) {
        basket.innerHTML = returnEmptyBasket();
    } else {
        basket.innerHTML = returnBasket();
        returnBasket();
    }
}

function hideMobileBasket(){
    let mobileBasket = document.getElementById('mobileBasket');
    let mobileBasketButton = document.getElementById('mobile_shopping_cart_button_ctn')
    if (+calcSubtotal() === 0){
        mobileBasket.classList.remove('display_flex')
        mobileBasket.classList.add('display_none')
        mobileBasketButton.classList.remove('display_flex')
        mobileBasketButton.classList.add('display_none')
        showMainPage();
    }
}

function calcBasket() {
    let finalPrice = 0;
    calcSubtotal();

    finalPrice = +calcSubtotal() + +calcDeliveryCost();
    return finalPrice;
}

function calcDeliveryCost() {
    let deliveryCost = 4.00.toFixed(2);
    if (+calcSubtotal() >= 60.00) {
        deliveryCost = 0;
        let removedDeliveryCost = document.getElementById('unsetDeliveryCost');
        removedDeliveryCost.classList.remove('display_none');
    }
    return deliveryCost;
}

function calcMobileDeliveryCost() {
    let deliveryCost = 4.00.toFixed(2);
    if (+calcSubtotal() >= 60.00) {
        deliveryCost = 0;
        let removedDeliveryCost = document.getElementById('unsetMobileDeliveryCost');
        removedDeliveryCost.classList.remove('display_none');
    }
    return deliveryCost;
}

function showMobileBasketButton(){
    let mobileBasketButton = document.getElementById('mobile_shopping_cart_button_ctn');
    if (window.matchMedia("(max-width: 1024px)")){
        renderMobileBasketButton();
        mobileBasketButton.classList.remove('display_none');
        mobileBasketButton.classList.add('display_flex');
    }
    
}

function openMobileBasket(){
    let mobileBasket = document.getElementById('mobileBasket');
    mobileBasket.innerHTML = returnMobileBasket();
    mobileBasket.classList.remove('display_none');
    mobileBasket.classList.add('display_flex');
    calcMobileDeliveryCost();
    returnMobileBasket();
    hideMainPage();
}

function closeMobileBasket(){
    let mobileBasket = document.getElementById('mobileBasket');
    mobileBasket.classList.remove('display_flex');
    mobileBasket.classList.add('display_none');
    showMobileBasketButton();
    showMainPage();
}

function hideMainPage(){
    let mainPage = document.getElementById('main');
    mainPage.classList.remove('display_flex');
    mainPage.classList.add('display_none');
}

function showMainPage(){
    let mainPage = document.getElementById('main');
    mainPage.classList.add('display_flex');
    mainPage.classList.remove('display_none');
}

function toggleHeart(){
    let heart = document.getElementById('heart');
    let filledHeart = document.getElementById('filledHeart');
    heart.classList.toggle('display_none');
    filledHeart.classList.toggle('display_none');
}