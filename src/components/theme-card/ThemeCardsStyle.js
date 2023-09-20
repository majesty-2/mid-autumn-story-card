const fs = require("fs");

const jsonData = JSON.parse(fs.readFileSync("./src/assets/data.json", "utf8"));

const importSass = `@import "../../assets/common"\n\n`

const changeMoon = `
    color: $deep-blue
    background: linear-gradient(to right, $golden-yellow-start, $golden-yellow-end 150px)
    opacity: 0.8
    transform: skewY(10deg) translateZ(40px) rotateX(-10deg) rotateY(-10deg)
    &::after, &::before
      background-color: rgba(0, 0, 0, 0.2)
  `;
const houyiSun = `
    color: $golden-yellow
    background: linear-gradient(to right, $deep-red-start, $deep-red-end 150px)
    opacity: 0.8
    transform: skew(2deg, -10deg) translateZ(50px) rotateX(20deg) rotateY(30deg)
    &::after, &::before
      background-color: rgba(255, 255, 255, 0.2)
  `;
const rabbitDrug = `
    color: $deep-red
    background: linear-gradient(to right, $deep-blue-start, $deep-blue-end 150px)
    opacity: 0.8
    transform: skewY(-15deg) translateZ(40px) rotateX(10deg) rotateY(10deg)
    &::after, &::before
      background-color: rgba(255, 255, 255, 0.2)
  `;

const sassContent = jsonData.storys.map((story) => {
  switch (story.theme) {
    case jsonData.storys[0].theme:
      return `.${story.theme} ${changeMoon}`;
    case jsonData.storys[1].theme:
      return `.${story.theme} ${houyiSun}`;
    case jsonData.storys[2].theme:
      return `.${story.theme} ${rabbitDrug}`;
    default:
      return null;
  }
}).join('\n');

const content = importSass + sassContent

fs.writeFile("./src/components/theme-card/ThemeCardsStyle.sass", content, (err) => {
  if (err) {
    console.error("写入文件出错", err);
  } else {
    console.log("文件写入成功");
  }
});
