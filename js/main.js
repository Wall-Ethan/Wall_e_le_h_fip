(function(){
    "use strict";
    console.log("fired");

    const button = document.querySelector("#button");
    const burgerCon = document.querySelector(".burgerCon");
    const lightBox = document.querySelector('#lightbox');
    const links = document.querySelectorAll('#footer-home div a ');
   
    const content = document.querySelector('#lightbox article');
    const searchBox = document.querySelector('.search_box a');




    let vodkaArray =[
        /*0*/{
            name: "Premium Vodka",
            bio: "It is crafted from a heritage rye variety called Dankowskie Ruben, sourced from just one local farm near our distillery. It is hand-crafted in small batches, following traditional distilling techniques and strict requirements for ecological processing, and is blended with natural spring water from our own well on property. The spirit is then rested for six months to bring out its full flavor before bottling.",
            

        },
        /*1*/{
            name: "Luminious Vodka",
            
            bio: "Hari Le x Zima Vodka is a vodka made from the rare Augusta potato, personally selected by Vera Wang herself. The Augusta is distinguished by the single red dot on its skin. The vodka it produces has a full floral bouquet with a hint of cucumber, a medium body and a warm, slightly piquant finish with notes of vanilla and almond.",

        },
        /*2*/{
            name: "Poisonous Vodka",
           
            bio: "ZIMA's Bartender's Choice is a bold and straightforward high-proof vodka. Inspired by bartenders and mixologists in search of a way to make spirit-forward cocktails, the Bartender's Choice vodka offers a fuller flavor profile resulting in a pronounced taste when used in cocktails.",
        }
    ]
    function hamburgerMenu() {
        //console.log("burger time!")
        button.classList.toggle("expanded");
        burgerCon.classList.toggle("slideToggle");
    }

    function fillContent (){
        console.log(this.dataset.vodka);

        content.innerHTML = "";

        let vodkaName = document.createElement('h3');
        vodkaName.innerText = vodkaArray[this.dataset.vodka].name;
        vodkaName.classList = 'lb_heading';
        content.appendChild(vodkaName);

        let vodkaBio = document.createElement('p');
        vodkaBio.innerText = vodkaArray[this.dataset.vodka].bio;
        vodkaBio.classList = 'lb_heading';
        content.appendChild(vodkaBio);
    }

    function searchBar() {
        $(this).toggleClass("active");
        $(".search_widget").slideToggle("medium");
    }

    button.addEventListener("click", hamburgerMenu);
    links.forEach(link => link.addEventListener('click', fillContent));
    searchBox.addEventListener("click", searchBar);
   
    
})();
