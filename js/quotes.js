const quotes = [{
    quote: "가시를 세우고 있지만 볼 수 있어 너의 장미를",
    author: "Intro : What am I to you",
  },
  {
    quote: "돈이 나를 쫓기를 원하지 돈만 쫓는 괴물은 되지 않길",
    author: "Tony Montana",
  },
  {
    quote: "그 사이에 많은 고통과 상처들을 이겨내고 날 갖춰 부러질 바엔 휘고 말자는 나의 관념을 살려",
    author: "길",
  },
  {
    quote: "실패나 좌절 맛보고 고개 숙여도 돼 우리는 아직 젊고 어려 걱정 붙들어매",
    author: "INTRO : Never Mind",
  },
  {
    quote: "남들이 원하는 걸 꼭 원할 필요 있는가 난 한평생 한이 담긴 한숨 쉬며 살기보다 한을 떼어내고 그냥 숨을 쉬며 사는 길을 택했어",
    author: "목소리",
  },
  {
    quote: "당신의 웃음과 행복이 곧 내 행복의 척도",
    author: "Outro : Her",
  },
  {
    quote: "어두운 밤이 지나면 밝은 아침도 있듯이, 알아서내일이오면 밝은 빛이 비추니, 걱정은 하지 말아줘",
    author: "Tomorrow",
  },
  {
    quote: "지금 새우잠 자더라도 꿈은 고래답게",
    author: "whalien52",
  },
  {
    quote: "외로움의 반대말은 왜 없을까 사람은 죽을 때까지 안 외로울 때가 없어서일지 몰라",
    author: "Life",
  },
  {
    quote: "스치면 인연 스며들면 사랑",
    author: "Converse High",
  },
  {
    quote: "모두가 태어난 순간부터 죽음을 담보로 하기에 삶은 더 아름다운 것",
    author: "Life",
  },
  {
    quote: "이 까만 어둠 속에서 너는 이렇게 빛나니까",
    author: "Save ME",
  },
  {
    quote: "넌 내게 안녕이라 말했지 매번 잠들 때마다 난 그게 죽기보다 더 싫었어 이 밤이 괜히 너와 내 끝인 것 같아서",
    author: "Love is not over (full length edition)",
  },
  {
    quote: "그대의 창조와 삶의 끝에 함께 하길 그대의 자리가 어딜지라도 관대하리 결국 시련의 끝에 만개하리 시작은 미약할지언정 끝은 창대하리",
    author: "so far away",
  },
  {
    quote: "삶은 살아지는 게 아니라 살아내는 것",
    author: "Tomorrow",
  },
  {
    quote: "난 내가 하기 싫은 일로 성공하긴 싫어 난 날 밀어",
    author: "Outro : Wings",
  },
  {
    quote: "술잔을 비우니 그리움이 차는구나 그냥 다 지고 볼 걸 왜 난 따지고 봤을까",
    author: "잡아줘",
  },
  {
    quote: "우리 커플 신발 사이에 어린이 운동화",
    author: "Miss Right",
  },
  {
    quote: "그러니 절대 너는 내 손을 놓지 마 두 번 다시 내가 널 놓지 않을 테니까",
    author: "First love",
  },
  {
    quote: "부딪힐 것 같으면 더 세게 밟아",
    author: "Intro : Never Mind",
  },
  {
    quote: "니가 밀면 넘어질게 날 일으켜줘 내가 당겨도 오지 않아도 돼",
    author: "Love Maze",
  }
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
console.log(quote);