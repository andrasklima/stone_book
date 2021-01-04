function htmlEntities(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function page_load() {
  let root = document.querySelector("#root");

  let stones = [];

  /* HTML */
  stones.push({
    category: "HTML",
    title: "HEAD-be kerüljenek a scriptek",
    example: `
      <head>
        <script src="./js/main.js"></script>
      </head>
      `
  });

  stones.push({
    category: "HTML",
    title: "inline style elkerülése, helyette class használat",
    example: `
      <div style="display: none;"></div>

      <style>
        .hide {
          display: none;
        }
      </style>
      <div class="hide"></div>
      `
  });

  stones.push({
    category: "HTML",
    title: "id-k helyett class használat",
    example: `
      <div id="image-1"></div>
      <div id="image-2"></div>

      <div class="image"></div>
      <div class="image"></div>
      `
  });

  /* CSS/SCSS */
  stones.push({
    category: "CSS/SCSS",
    title: "& jel használat",
    example: `
      <style>
        .content {
          &.move {  // <div class="content move"></div>
            transform: translateY(-15px);    
          }
        }

        .content {  // <div class="content"><div class="move"></div></div>
          .move {
            transform: translateY(-15px);    
          }
        }
      </style>
      `
  });

  stones.push({
    category: "CSS/SCSS",
    title: ", használat translate-nál",
    example: `
      <style>
        transform: translate(100%, 50%);
      </style>
      `
  });

  stones.push({
    category: "CSS/SCSS",
    title: "rgb vs rgba",
    example: `
      <style>
        color: rgb(28, 28, 28);
        color: rgba(28, 28, 28, 0.75);
      </style>
      `
  });

  /* JS */
  stones.push({
    category: "Javascript",
    title: "var helyett let/const használat",
    example: `
      <script>
        var score;

        let score;
      </script>
      `
  });

  stones.push({
    category: "Javascript",
    title: "getElementById vs querySelector",
    example: `
      <script>
        let elem = document.getElementById("content");

        let elem = document.querySelector("#content");
      </script>
      `
  });

  stones.push({
    category: "Javascript",
    title: ".style használat elkerülése (helyette addClass)",
    example: `
      <script>
        polygon.parentElement.style.zIndex = ++zIndex;
      </script>
      `
  });

  for (stone of stones) {
    let source = htmlEntities(stone.example);

    root.insertAdjacentHTML(
      "beforeend",
      `
      <div class="content">
        <h2>${stone.category}</h2>
        <h3>${stone.title}</h3>
        <pre><code>${source}</code></pre>
      </div>
      `
    );

/*  
    let nodes = root.querySelectorAll(".content");
    let lastNode = nodes[nodes.length - 1];
    lastNode.querySelector("code").textContent = stone.example;
*/
  }

  document.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightBlock(block);
  });

  /*
  code comment
  */

  /*
  egységes (változó, függvény, stb.) névadási konvenció
  */

  /*
  css középre igazítás
  */

  /*
  HTML
  1) HEAD-be kerüljenek a scriptek
    <head>
      <script src="./js/main.js"></script>
    </head>

  2) inline style elkerülése, helyette class használat
    <div styée="display: none;"></div>

    <div class="hide"></div>
    .hide {
      display: none;
    }

  3) id-k helyett class használat
    <div id="image-1"></div>
    <div id="image-2"></div>

    <div class="image"></div>
    <div class="image"></div>
  */

  /*
  CSS/SCSS
    1) & jel használat

    .content {
      &.move {  // <div class="content move"></div>
        transform: translateY(-15px);    
      }
    }

    .content {  // <div class="content"><div class="move"></div></div>
      .move {
        transform: translateY(-15px);    
      }
    }

    2) , használat
      transform: translate(100%, 50%);

    3) rgb vs rgba
      color: rgb(28, 28, 28);

      color: rgba(28, 28, 28, 0.75);
  }

  */

  /*
  JAVASCRIPT

    1) var helyett let/const használat
    var score;

    let score;

    2) getElementById vs querySelector
    document.getElementById("content")

    document.querySelector("#content")

    3) .style használat elkerülése
    polygon.parentElement.style.zIndex = ++zIndex;

  */

  /*
  tömbbe berakni feladatokat push-al

  tömböt kirenderelni, és css-el formázni

  google fonts és színezést használni

  https://github.com/Grag1987/stone_book.git
  
  emailben elküldeni
  */

  /*
  http://highlightjs.org

  document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  });

  vagy 

  hljs.configure({useBR: true});

  document.querySelectorAll('div.code').forEach((block) => {
    hljs.highlightBlock(block);
  });
  */
}

window.addEventListener("load", page_load);
