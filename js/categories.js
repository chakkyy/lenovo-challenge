const categories = [
  {
    name: "Laptops",
    img: {
      src: "./images/nav/notebook.svg",
    },
  },
  {
    name: "Desktops",
    img: {
      src: "./images/nav/desktop.svg",
    },
  },
  {
    name: "Workstations",
    img: {
      src: "./images/nav/workstation.svg",
    },
  },
  {
    name: "Tablets",
    img: {
      src: "./images/nav/tablet.svg",
    },
  },
  {
    name: "Accesories",
    img: {
      src: "./images/nav/accesoriesnsoftware.svg",
    },
  },
  {
    name: "Monitors",
    img: {
      src: "./images/nav/monitor.svg",
    },
  },
  {
    name: "Services",
    img: {
      src: "./images/nav/services.svg",
    },
  },
  {
    name: "Gaming",
    img: {
      src: "./images/nav/gaming.svg",
    },
  },
  {
    name: "Business",
    img: {
      src: "./images/nav/business.svg",
    },
  },
  {
    name: "Students",
    img: {
      src: "./images/nav/students.svg",
    },
  },
  {
    name: "Sales",
    img: {
      src: "./images/nav/sales.svg",
    },
  },
];

// Create a function that creates VDOM objects
const vdom = (type, props, ...children) => {
  return { type, props, children };
};

// Create a function that render objects into real DOM
const createElement = (node) => {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }
  const container = document.createElement(node?.type);

  node?.props &&
    Object.keys(node?.props).forEach((key) => {
      if (key === "class") {
        if (Array.isArray(node?.props[key])) {
          node?.props[key].forEach((prop) => container.classList.add(prop));
        } else container.classList.add(node?.props[key]);
      } else container[key] = node?.props[key];
    });

  if (node?.children && Array.isArray(node.children[0])) {
    node.children[0]
      .map(createElement)
      .forEach(container.appendChild.bind(container));
  } else {
    node?.children
      ?.map(createElement)
      .forEach(container.appendChild.bind(container));
  }
  return container;
};

// Creates categories list
// jsx way
// const allCategories = (
//   <ul>
//     {categories.map((c, i) => (
//       <li>
//         <a href="#" class={i === 0 ? "current" : null}>
//           <img src={c.img.src} alt={c.name} class={c.img.size} />
//           <label>{c.name}</label>
//         </a>
//       </li>
//     ))}
//   </ul>
// );

//js way
const allCategories = vdom(
  "ul",
  null,
  categories.map((c, i) =>
    vdom(
      "li",
      null,
      vdom(
        "a",
        {
          href: "#",
          class: i === 0 ? "current" : null,
        },
        vdom("img", {
          src: c.img.src,
          alt: c.name,
          class: c.img.size,
        }),
        vdom("label", null, c.name)
      )
    )
  )
);

// Render categories
const allCategoriesVDOM = createElement(allCategories);
document.getElementById("allCategories").appendChild(allCategoriesVDOM);
