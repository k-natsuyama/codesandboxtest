import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div
  const div = document.createElement("div");
  div.className = "list-row";

  //li
  const li = document.createElement("li");
  li.innerText = inputText;

  //button complate
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    deleteFromIncomplateList(complateButton.parentNode);
  });

  //button delete
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //
    deleteFromIncomplateList(deleteButton.parentNode);
  });

  //div in
  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  //incomplate-list
  document.getElementById("incomplate-list").appendChild(div);
};

//delete list
const deleteFromIncomplateList = (target) => {
  document.getElementById("incomplate-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
