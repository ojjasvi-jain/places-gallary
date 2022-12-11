import "./styles.css";
const allPanel = document.querySelectorAll(".panel");

allPanel.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeClass();
    panel.classList.add("active");
  });
});

const removeClass = () => {
  allPanel.forEach((panel) => {
    panel.classList.remove("active");
  });
};
