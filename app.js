const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

let buttonsContainerEl = document.getElementById("buttons-container");
const categorys = Array.from(new Set(menu.map(dish => dish.category))) ;
categorys.forEach(category => {
  let btn = document.createElement("button");
  btn.classList.add("btn");
  btn.id = category;
  btn.textContent = capTitle(category);
  buttonsContainerEl.append(btn);
})

const containerEl = document.getElementById("card-container");
let btns = document.getElementsByClassName("btn");


function bildMenu(menu,id = "all") {
    Array.from(btns).forEach(btn => {
        btn.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
    containerEl.innerHTML = "";
    menu.forEach(item => {
        let div  = document.createElement('div');
        div.classList.add("card");
        div.innerHTML = `
        <img src="${item.img}" alt="picture">
        <div class="card-info">
          <div class="name-prise">
            <h4>${capTitle(item.title)}</h4>
            <span class="prise">$${item.price}</span>
          </div>
          <hr>
          <p class="desc">${item.desc}</p>
        </div>
      `       
    containerEl.append(div);
    })
}
        
function capTitle(title) {
    return title.
    split(" ").
    filter(a => a).
    map(a => a[0].toUpperCase() + a.slice(1)).
    join(" ");
}

bildMenu(menu);

Array.from(btns).forEach(btn => {
    btn.addEventListener("click", () => {
        console.log(btn.id);
        if(btn.id == 'all') {
            bildMenu(menu)
        } else {
            let filterMenu = menu.filter(item => item.category == btn.id);
            bildMenu(filterMenu, btn.id);
        }
    })
})

