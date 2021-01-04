"use strict";

function htmlEntities(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function page_load() {
  var root = document.querySelector("#root");
  var stones = [];
  /* HTML */

  stones.push({
    category: "HTML",
    title: "HEAD-be kerüljenek a scriptek",
    example: "\n      <head>\n        <script src=\"./js/main.js\"></script>\n      </head>\n      "
  });
  stones.push({
    category: "HTML",
    title: "inline style elkerülése, helyette class használat",
    example: "\n      <div style=\"display: none;\"></div>\n\n      <style>\n        .hide {\n          display: none;\n        }\n      </style>\n      <div class=\"hide\"></div>\n      "
  });
  stones.push({
    category: "HTML",
    title: "id-k helyett class használat",
    example: "\n      <div id=\"image-1\"></div>\n      <div id=\"image-2\"></div>\n\n      <div class=\"image\"></div>\n      <div class=\"image\"></div>\n      "
  });
  /* CSS/SCSS */

  stones.push({
    category: "CSS/SCSS",
    title: "& jel használat",
    example: "\n      <style>\n        .content {\n          &.move {  // <div class=\"content move\"></div>\n            transform: translateY(-15px);    \n          }\n        }\n\n        .content {  // <div class=\"content\"><div class=\"move\"></div></div>\n          .move {\n            transform: translateY(-15px);    \n          }\n        }\n      </style>\n      "
  });
  stones.push({
    category: "CSS/SCSS",
    title: ", használat translate-nál",
    example: "\n      <style>\n        transform: translate(100%, 50%);\n      </style>\n      "
  });
  stones.push({
    category: "CSS/SCSS",
    title: "rgb vs rgba",
    example: "\n      <style>\n        color: rgb(28, 28, 28);\n        color: rgba(28, 28, 28, 0.75);\n      </style>\n      "
  });
  /* JS */

  stones.push({
    category: "Javascript",
    title: "var helyett let/const használat",
    example: "\n      <script>\n        var score;\n\n        let score;\n      </script>\n      "
  });
  stones.push({
    category: "Javascript",
    title: "getElementById vs querySelector",
    example: "\n      <script>\n        let elem = document.getElementById(\"content\");\n\n        let elem = document.querySelector(\"#content\");\n      </script>\n      "
  });
  stones.push({
    category: "Javascript",
    title: ".style használat elkerülése (helyette addClass)",
    example: "\n      <script>\n        polygon.parentElement.style.zIndex = ++zIndex;\n      </script>\n      "
  });

  for (var _i = 0, _stones = stones; _i < _stones.length; _i++) {
    stone = _stones[_i];
    var source = htmlEntities(stone.example);
    root.insertAdjacentHTML("beforeend", "\n      <div class=\"content\">\n        <h2>".concat(stone.category, "</h2>\n        <h3>").concat(stone.title, "</h3>\n        <pre><code>").concat(source, "</code></pre>\n      </div>\n      "));
    /*  
        let nodes = root.querySelectorAll(".content");
        let lastNode = nodes[nodes.length - 1];
        lastNode.querySelector("code").textContent = stone.example;
    */
  }

  document.querySelectorAll("pre code").forEach(function (block) {
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