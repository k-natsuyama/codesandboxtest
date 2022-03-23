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
    //detele
    deleteFromIncomplateList(complateButton.parentNode);

    //add mikanryo
    const addTarget = complateButton.parentNode;

    //TODO no Naiyou text
    const text = addTarget.firstElementChild.innerText;

    //div ika wo shokika
    addTarget.textContent = null;

    //Li
    const li = document.createElement("li");
    li.innerText = text;

    //buttun
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //div no children

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //complate-list ni add
    document.getElementById("complate-list").appendChild(addTarget);
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
