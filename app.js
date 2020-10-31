const menu = [
  {
    id: 1,
    title: "Super Breakfast Sandwich",
    category: "breakfast",
    price: 15.99,
    img: "https://images.pexels.com/photos/1209029/pexels-photo-1209029.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    desc: `Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.`,
  },
  {
    id: 2,
    title: "Submariners Sub",
    category: "lunch",
    price: 13.99,
    img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    desc: `Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors.`,
  },
  {
    id: 3,
    title: "Hampton Hamburg",
    category: "lunch",
    price: 6.99,
    img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    desc: `Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast.`,
  },
  {
    id: 4,
    title: "Salacious Breakfast Salad",
    category: "breakfast",
    price: 20.99,
    img: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    desc: `Cupcake ipsum dolor sit amet ice cream donut gingerbread. Sesame snaps marshmallow macaroon halvah wafer. Muffin croissant tart marshmallow sweet roll.`,
  },
  {
    id: 5,
    title: "Eggcellent Avocado Toast",
    category: "breakfast",
    price: 22.99,
    img: "https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    desc: `Cupcake ipsum dolor sit amet soufflé gingerbread jujubes. Jelly-o sugar plum pie muffin. Tiramisu apple pie chupa chups jelly-o sweet roll. Donut marzipan halvah apple pie brownie cotton candy chocolate cake cotton candy cookie.`,
  },
  {
    id: 6,
    title: "Tropical Dream Shake",
    category: "shakes",
    price: 18.99,
    img: "https://images.pexels.com/photos/2103945/pexels-photo-2103945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    desc: `Tiramisu chupa chups macaroon bear claw pie chocolate tart fruitcake. Marzipan topping halvah macaroon chocolate cookie.`,
  },
  {
    id: 7,
    title: "Bacon Biscuit Blast",
    category: "breakfast",
    price: 8.99,
    img: "https://images.pexels.com/photos/139746/pexels-photo-139746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    desc: `Candy cake tart ice cream marshmallow apple pie ice cream biscuit. Caramels cupcake icing bonbon pudding halvah cotton candy cupcake jelly-o. Wafer halvah bonbon.`,
  },
  {
    id: 8,
    title: "Pizza Perfection",
    category: "lunch",
    price: 12.99,
    img: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    desc: `I love cheese, especially taleggio edam. Cheese and biscuits paneer brie macaroni cheese croque monsieur goat paneer mozzarella.`,
  },
  {
    id: 9,
    title: "Puzzling Pumpkin Pie",
    category: "shakes",
    price: 16.99,
    img: "https://images.pexels.com/photos/669736/pexels-photo-669736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    desc: `I'm baby church-key bitters mumblecore heirloom taiyaki thundercats. Poutine ennui freegan, craft beer organic aesthetic man bun tofu meggings photo booth portland tote bag biodiesel tilde.`,
  },
  {
    id: 10,
    title: "Savory Steak",
    category: "dinner",
    price: 150.99,
    img: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    desc: `Squid knausgaard live-edge, meh bushwick pug you probably haven't heard of them actually roof party salvia pabst beard.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// load
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title} />
            <div class="item-info">
            <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
            </div>
            </article>`;
  });

  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  
  const categoryBtns = categories
  .map(function (category) {
    return `<button type="button" class="filter-btn" data-id=${category}>
    ${category}
    </button>`;
  })
  .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

 
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}