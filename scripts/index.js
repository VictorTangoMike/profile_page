(() => {
  const items = document.querySelectorAll(".item");
  const presentation = document.querySelectorAll("[data-content]");

  const hideContent = () => {
    presentation.forEach((content) => {
      content.classList.add("hide");
    });
  };

  const inactivateItem = () => {
    items.forEach((item) => {
      item.classList.remove("active");
    });
  };

  const showContent = (value) => {
    const content = document.querySelector(`[data-content="${value}"]`);
    content.classList.remove("hide");
  };

  const activateItem = (item) => {
    item.classList.add("active");
  };

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const value = item.dataset.item;
      hideContent();
      inactivateItem();
      showContent(value);
      activateItem(item);
    });
  });
})();
