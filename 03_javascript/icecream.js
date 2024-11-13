const section = document.querySelector("section");
const icecreams = [
  "내가 아인슈페너?!",
  "엄마는 외계인",
  "민트 초콜릿 칩",
  "뉴욕 치즈케이크",
  "아이스 초당옥수수",
  "초콜릿 무스",
  "체리쥬빌레",
  "뮤! 넌 내거야",
  "오레오 쿠키 앤 크림",
];


for (let i = 0; i < icecreams.length; i++) {
  const article = document.createElement("article");
  article.classList.add("article-box");

  const img = document.createElement("img");
  img.src = `img/icecream${i + 1}.png`; 
  img.classList.add("img-box");

  const h3 = document.createElement("h3");
  h3.textContent = `Top${i + 1}`;
  h3.classList.add("text-center");

  const div = document.createElement("div");
  div.textContent = icecreams[i];
  div.classList.add("text-center");


  article.appendChild(img);
  article.appendChild(h3);
  article.appendChild(div);

  section.appendChild(article);
}