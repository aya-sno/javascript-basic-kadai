//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

//textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

btn.addEventListener('click', () =>
{
//id="text"の文章を書き換えるには、textContentを使う。
text.textContent = "ボタンをクリックしました。";
})

