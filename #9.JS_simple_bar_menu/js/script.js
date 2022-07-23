"use strict";

// item menu list
const menu = [
  {
    id: 1,
    title: "whiskey ballantines",
    category: "whiskey",
    price: 14.99,
    img: "img/whiskey_ballantines.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, illum quas. Dolores quae, consequatur est magnam quod ad quibusdam ducimus sit ullam molestias deserunt harum, commodi error dolore perferendis saepe?`,
  },
  {
    id: 2,
    title: "whiskey chivas",
    category: "whiskey",
    price: 16.99,
    img: "img/whiskey_chivas.jpeg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis assumenda dicta dolor molestias eligendi. Doloribus expedita saepe aliquid distinctio perspiciatis id, natus nesciunt non, fugiat blanditiis laboriosam veniam, voluptates adipisci!`,
  },
  {
    id: 3,
    title: "whiskey jack daniels",
    category: "whiskey",
    price: 15.99,
    img: "img/whiskey_jack_daniels.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In vitae ratione fugit reiciendis vel saepe nemo id voluptatem, quia porro nihil omnis debitis. Iste porro necessitatibus expedita soluta asperiores impedit?`,
  },
  {
    id: 4,
    title: "whiskey walker",
    category: "whiskey",
    price: 15.05,
    img: "img/whiskey_walker.jpeg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit nihil quidem eum ullam vero aperiam voluptates alias officia minus vitae? Culpa voluptate architecto commodi magnam asperiores maiores excepturi temporibus eligendi?`,
  },
  {
    id: 5,
    title: "vodka absolut",
    category: "vodka",
    price: 12.99,
    img: "img/vodka_absolut.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem aut sunt tempora corporis. Magni est molestiae unde praesentium amet veritatis cumque tempore nesciunt natus, minus iste, sequi animi ratione `,
  },
  {
    id: 6,
    title: "vodka smirnoff",
    category: "vodka",
    price: 13.99,
    img: "img/vodka_smirnoff.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil deserunt eum suscipit expedita iure hic voluptas alias tenetur enim, omnis, officia, quod ab fuga facere accusamus. Maxime explicabo suscipit eius!`,
  },
  {
    id: 7,
    title: "cocktail whiskey",
    category: "cocktails",
    price: 12.99,
    img: "img/cocktail_whiskey.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum at nostrum molestiae? Officiis ullam laborum aperiam amet repellat vero. Similique quaerat necessitatibus illum quod voluptate cupiditate harum laborum numquam.`,
  },
  {
    id: 8,
    title: "cocktail b-52",
    category: "cocktails",
    price: 12.05,
    img: "img/cocktail_b-52.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, delectus. Voluptatibus, explicabo. Velit repellendus nulla ut molestias nisi veniam necessitatibus, dolor quo laboriosam suscipit? Aperiam blanditiis tempore itaque mollitia eius.`,
  },
  {
    id: 9,
    title: "cocktail aperol spritz",
    category: "cocktails",
    price: 13.45,
    img: "img/cocktail_aperol_spritz.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum temporibus assumenda error optio possimus fugiat culpa iusto molestias quibusdam et? Ad asperiores harum ratione totam dignissimos dolore illum atque maxime?`,
  },
  {
    id: 10,
    title: "beer black",
    category: "beer",
    price: 9.99,
    img: "img/beer_black.png",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. In voluptatibus nemo, eaque, esse illum blanditiis praesentium tempore atque aliquid ipsam quis perferendis eligendi cum nobis fuga et eos consequuntur? Aut!`,
  },
  {
    id: 11,
    title: "beer white",
    category: "beer",
    price: 9.99,
    img: "img/beer_white.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis quis ex, veritatis eos explicabo earum iusto assumenda expedita qui tempora adipisci quod eveniet, nisi harum voluptatum voluptas exercitationem. Corrupti?`,
  },
  {
    id: 12,
    title: "beer corona",
    category: "beer",
    price: 10.99,
    img: "img/beer_corona.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magnam repellat repudiandae excepturi ad voluptatum magni unde velit placeat reprehenderit quo vel libero quos laboriosam, repellendus esse tempore laborum modi!`,
  },
  {
    id: 13,
    title: "coca cola",
    category: "non-alcoholic",
    price: 6.99,
    img: "img/coca_cola.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error commodi accusamus, iusto ut minima dignissimos ad, aspernatur optio officiis provident voluptate eum placeat hic natus, velit maiores? Maxime, reprehenderit.`,
  },
  {
    id: 14,
    title: "lemonade",
    category: "non-alcoholic",
    price: 3.99,
    img: "img/lemonade.png",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae labore tenetur cum reiciendis dolores quisquam eligendi amet nulla possimus officia id quibusdam reprehenderit obcaecati ipsam, accusamus quam omnis quos minus!`,
  },
  {
    id: 15,
    title: "orange juice",
    category: "non-alcoholic",
    price: 4.99,
    img: "img/orange_juice.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam cum architecto molestiae veniam assumenda ex numquam fuga facere perferendis. Illum quos, sunt illo praesentium voluptatum quia et dolores nulla!`,
  },
];

// load menu item
const wraperCenter = document.querySelector(".wraper_center");
const btnContainer = document.querySelector(".btn_container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu_item">
    <img
      src=${item.img}
      class="photo"
      alt=${item.title}
    />
    <div class="item_info">
      <div class="item_header">
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </div>
      <hr />
      <p class="item_text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  wraperCenter.innerHTML = displayMenu;
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
  const categoryButtons = categories
    .map(function (category) {
      return `<button class="filter_btn" data-id="${category}">${category}</button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryButtons;
  const filterBtn = btnContainer.querySelectorAll(".filter_btn");

  // filter button
  filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (elemetn) {
      const category = elemetn.currentTarget.dataset.id;
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
  console.log();
}
