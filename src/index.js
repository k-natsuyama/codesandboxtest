import "./styles.css";

const onClickAdd = () => {
  //テキストボックス初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncomplateList(inputText);
};
//未完了リストから指定の要素を削除
const deleteFromIncomplateList = (target) => {
  document.getElementById("incomplate-list").removeChild(target);
};
// 未完了リストに追加する関数
const createIncomplateList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //button（完了）タグ生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（Div）を未完了リストから削除
    deleteFromIncomplateList(complateButton.parentNode);

    //未完了リストに追加する要素
    const addTarget = complateButton.parentNode;

    //TODOの敵視と内容を取得
    const text = addTarget.firstElementChild.innerText;

    //Div以下を初期化
    addTarget.textContent = null;

    //Liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //Buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ（Div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complate-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncomplateList(text);
    });

    //divの子要素に各要素を追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complate-list").appendChild(addTarget);
  });

  //button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（Div)を未完了リストから削除
    deleteFromIncomplateList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplate-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
