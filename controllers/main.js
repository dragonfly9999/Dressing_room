import { typeOfData, getDataProduct } from "../utils/callData.js";

const data = await getDataProduct();
const { navPills, tabPanes } = data;

const renderNavData = () => {
  const navDataContent = navPills
    .map(
      (navPillsData) => `
        <li class="nav-item">
            <a class="nav-link" id="${navPillsData.tabName}" data-toggle="pill" href="#${navPillsData.type}">
                ${navPillsData.showName}
            </a>
        </li>`
    )
    .join("");
  document.getElementById("listTab").innerHTML = navDataContent;

  navPills.forEach((navPillsItem) => {
    document
      .getElementById(navPillsItem.tabName)
      .addEventListener("click", () => tabPanesChecked(navPillsItem.type));
  });
};

const tabPanesData = (tabPane) => {
  const panesElement = document.createElement("div");
  panesElement.innerHTML = `<img class="p-2" src="${tabPane.imgSrc_jpg}" alt="${tabPane.name}" onClick="handleImageClick('${tabPane.id}','${tabPane.type}') ">`;
  return panesElement;
};

const tabPanesChecked = (tabType) => {
  const tabContent = document.getElementById("tabCheckContent");
  tabContent.innerHTML = "";

  const chooseTabPanes = tabPanes.filter(
    (tabPanesItem) => tabPanesItem.type === tabType
  );

  const girdRow = document.createElement("div");
  girdRow.classList.add("gridUpXy");

  chooseTabPanes.forEach((tabPane) => {
    const itemInPanes = tabPanesData(tabPane);
    girdRow.appendChild(itemInPanes);
  });

  tabContent.appendChild(girdRow);
};

window.handleImageClick = (imageId, tabType) => {
  const listProd = {
    topclothes: ".bikinitop",
    botclothes: ".bikinibottom",
    shoes: ".feet",
    handbags: ".handbag",
    necklaces: ".necklace",
    hairstyle: ".hairstyles",
    background: ".backgrounds",
  };

  const className = listProd[tabType];
  const imgShow = tabPanes.find((item) => item.id === imageId).imgSrc_png;

  document.querySelector(
    className
  ).innerHTML = `<img class="${tabType}" src="${imgShow}">`;
};

renderNavData();
