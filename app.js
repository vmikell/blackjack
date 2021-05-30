//  Deck of cards
const deck = [
  {
    suit: "hearts",
    value: 2,
    points: 2,
    img: "./PNG/2H.png",
  },
  {
    suit: "hearts",
    value: 3,
    points: 3,
    img: "./PNG/3H.png",
  },
  {
    suit: "hearts",
    value: 4,
    points: 4,
    img: "./PNG/4H.png",
  },
  {
    suit: "hearts",
    value: 5,
    points: 5,
    img: "./PNG/5H.png",
  },
  {
    suit: "hearts",
    value: 6,
    points: 6,
    img: "./PNG/6H.png",
  },
  {
    suit: "hearts",
    value: 7,
    points: 7,
    img: "./PNG/7H.png",
  },
  {
    suit: "hearts",
    value: 8,
    points: 8,
    img: "./PNG/8H.png",
  },
  {
    suit: "hearts",
    value: 9,
    points: 9,
    img: "./PNG/9H.png",
  },
  {
    suit: "hearts",
    value: 10,
    points: 10,
    img: "./PNG/10H.png",
  },
  {
    suit: "hearts",
    value: "Jack",
    points: 10,
    img: "./PNG/JH.png",
  },
  {
    suit: "hearts",
    value: "Queen",
    points: 10,
    img: "./PNG/QH.png",
  },
  {
    suit: "hearts",
    value: "King",
    points: 10,
    img: "./PNG/KH.png",
  },
  {
    suit: "hearts",
    value: "Ace",
    points: 11,
    img: "./PNG/AH.png",
  },
  {
    suit: "diamonds",
    value: 2,
    points: 2,
    img: "./PNG/2D.png",
  },
  {
    suit: "diamonds",
    value: 3,
    points: 3,
    img: "./PNG/3D.png",
  },
  {
    suit: "diamonds",
    value: 4,
    points: 4,
    img: "./PNG/4D.png",
  },
  {
    suit: "diamonds",
    value: 5,
    points: 5,
    img: "./PNG/5D.png",
  },
  {
    suit: "diamonds",
    value: 6,
    points: 6,
    img: "./PNG/6D.png",
  },
  {
    suit: "diamonds",
    value: 7,
    points: 7,
    img: "./PNG/7D.png",
  },
  {
    suit: "diamonds",
    value: 8,
    points: 8,
    img: "./PNG/8D.png",
  },
  {
    suit: "diamonds",
    value: 9,
    points: 9,
    img: "./PNG/9D.png",
  },
  {
    suit: "diamonds",
    value: 10,
    points: 10,
    img: "./PNG/10D.png",
  },
  {
    suit: "diamonds",
    value: "Jack",
    points: 10,
    img: "./PNG/JD.png",
  },
  {
    suit: "diamonds",
    value: "Queen",
    points: 10,
    img: "./PNG/QD.png",
  },
  {
    suit: "diamonds",
    value: "King",
    points: 10,
    img: "./PNG/KD.png",
  },
  {
    suit: "diamonds",
    value: "Ace",
    points: 11,
    img: "./PNG/AD.png",
  },
  {
    suit: "clubs",
    value: 2,
    points: 2,
    img: "./PNG/2C.png",
  },
  {
    suit: "clubs",
    value: 3,
    points: 3,
    img: "./PNG/3C.png",
  },
  {
    suit: "clubs",
    value: 4,
    points: 4,
    img: "./PNG/4C.png",
  },
  {
    suit: "clubs",
    value: 5,
    points: 5,
    img: "./PNG/5C.png",
  },
  {
    suit: "clubs",
    value: 6,
    points: 6,
    img: "./PNG/6C.png",
  },
  {
    suit: "clubs",
    value: 7,
    points: 7,
    img: "./PNG/7C.png",
  },
  {
    suit: "clubs",
    value: 8,
    points: 8,
    img: "./PNG/8C.png",
  },
  {
    suit: "clubs",
    value: 9,
    points: 9,
    img: "./PNG/9C.png",
  },
  {
    suit: "clubs",
    value: 10,
    points: 10,
    img: "./PNG/10C.png",
  },
  {
    suit: "clubs",
    value: "Jack",
    points: 10,
    img: "./PNG/JC.png",
  },
  {
    suit: "clubs",
    value: "Queen",
    points: 10,
    img: "./PNG/QC.png",
  },
  {
    suit: "clubs",
    value: "King",
    points: 10,
    img: "./PNG/KC.png",
  },
  {
    suit: "clubs",
    value: "Ace",
    points: 11,
    img: "./PNG/AC.png",
  },
  {
    suit: "spades",
    value: 2,
    points: 2,
    img: "./PNG/2S.png",
  },
  {
    suit: "spades",
    value: 3,
    points: 3,
    img: "./PNG/3S.png",
  },
  {
    suit: "spades",
    value: 4,
    points: 4,
    img: "./PNG/4S.png",
  },
  {
    suit: "spades",
    value: 5,
    points: 5,
    img: "./PNG/5S.png",
  },
  {
    suit: "spades",
    value: 6,
    points: 6,
    img: "./PNG/6S.png",
  },
  {
    suit: "spades",
    value: 7,
    points: 7,
    img: "./PNG/7S.png",
  },
  {
    suit: "spades",
    value: 8,
    points: 8,
    img: "./PNG/8S.png",
  },
  {
    suit: "spades",
    value: 9,
    points: 9,
    img: "./PNG/9S.png",
  },
  {
    suit: "spades",
    value: 10,
    points: 10,
    img: "./PNG/10S.png",
  },
  {
    suit: "spades",
    value: "Jack",
    points: 10,
    img: "./PNG/JS.png",
  },
  {
    suit: "spades",
    value: "Queen",
    points: 10,
    img: "./PNG/QS.png",
  },
  {
    suit: "spades",
    value: "King",
    points: 10,
    img: "./PNG/KS.png",
  },
  // {
  //   suit: "spades",
  //   value: "A",
  //   points: 11,
  //   img: "./PNG/AS.png"
  // }
];

// variables
const deal =
  document.querySelector(".btn-hit");
const stay = document.querySelector(
  ".btn-stay"
);
const play = document.querySelector(
  ".play-btn"
);
const img =
  document.querySelector(".cards");
const draw =
  document.querySelector(".draw");
const yourHandImg =
  document.querySelector(".your-hand");
const yourHand = [];
let cardPoints = 0;
let drawCard = deck[0];
let cardIndex = 0;
let score = 0;
let startOver = true;

/* Deal button is pressed, two cards are dealt,  
score updates & play button disappears*/
play.addEventListener(
  "click",
  function () {
    cardIndex = Math.floor(
      Math.random() * deck.length
    );
    drawCard = deck[cardIndex];
    img.src = drawCard.img;
    //remove card from deck
    deck.splice(deck[cardIndex], 1);
    // insert card in your hand
    yourHand.push(drawCard);
    //   display your hand
    const drawn =
      document.createElement("IMG");
    drawn.setAttribute("src", img.src);
    drawn.setAttribute(
      "class",
      "cards"
    );
    yourHandImg.appendChild(drawn);
    draw.remove();
    console.log(drawn);
    pickACard();
    play.remove();
    for (
      let i = 0;
      i < yourHand.length;
      i++
    ) {
      cardPoints = yourHand[i].points;
      score += cardPoints;
      console.log(score);
    }
  }
);

// Hit Me! button pressed, a card is dealt & score updates
deal.addEventListener(
  "click",
  function () {
    pickACard();
    cardPoints =
      deck[cardIndex].points - 1;
    score += cardPoints;
    console.log(score);
  }
);

/* Stay button is pressed and random score is 
generated for dealer between 17 and 26*/
stay.addEventListener(
  "click",
  function () {
    let value =
      yourHand[yourHand.length - 1]
        .value;
    let suit =
      yourHand[yourHand.length - 1]
        .suit;
    let maxScore = 21;
    let dealerScore =
      Math.floor(
        Math.random() * (26 - 17)
      ) + 17;
    if (
      score >= dealerScore &&
      score <= maxScore
    ) {
      startOver = confirm(
        "blackjack! you won! Your last card drawn was a " +
          value +
          " of " +
          suit +
          ", giving you a score of " +
          score +
          ". The dealer's score was " +
          dealerScore +
          ". Would you like to play again?"
      );
      if (startOver) {
        location.reload();
      } else if (!startOver) {
        location.replace(
          "https://www.victormikell.com/#projects"
        );
      }
    } else if (
      score < dealerScore &&
      dealerScore <= maxScore
    ) {
      startOver = confirm(
        "You lose. Your last card drawn was a " +
          value +
          " of " +
          suit +
          ", giving you a score of " +
          score +
          ". The dealer's score was " +
          dealerScore +
          ". Would you like to play again?"
      );
      if (startOver) {
        location.reload();
      } else if (!startOver) {
        location.replace(
          "https://www.victormikell.com/#projects"
        );
      }
      return null;
    }
    return cardIndex;
  }
);

function pickACard() {
  // pick random card
  cardIndex = Math.floor(
    Math.random() * deck.length
  );
  drawCard = deck[cardIndex];
  img.src = drawCard.img;
  //remove card from deck
  deck.splice(deck[cardIndex], 1);
  // insert card in your hand
  yourHand.push(drawCard);
  //   display your hand
  const drawn =
    document.createElement("IMG");
  drawn.setAttribute("src", img.src);
  drawn.setAttribute("class", "cards");
  yourHandImg.appendChild(drawn);
  draw.remove();
  console.log(drawn);
  // calculate score

  // timeout to allow last card drawn to display before alert
  setTimeout(function () {
    let value =
      yourHand[yourHand.length - 1]
        .value;
    let suit =
      yourHand[yourHand.length - 1]
        .suit;
    if (score === 21) {
      startOver = confirm(
        "blackjack! you won! Your last card drawn was a " +
          value +
          " of " +
          suit +
          ", giving you a score of " +
          score +
          ". Would you like to play again?"
      );
      if (startOver) {
        location.reload();
      } else if (!startOver) {
        location.replace(
          "https://www.victormikell.com"
        );
      }
    } else if (score > 21) {
      startOver = confirm(
        "You lose. Your last card drawn was a " +
          value +
          " of " +
          suit +
          ", giving you a score of " +
          score +
          ". Would you like to play again?"
      );

      if (startOver) {
        location.reload();
      } else if (!startOver) {
        location.replace(
          "https://www.victormikell.com"
        );
      }
      return null;
    }
    return cardIndex;
  }, 450);
}

// function removeAllChildNodes(parent) {
//   while (parent.firstChild) {
//     parent.removeChild(
//       parent.firstChild
//     );
//   }
// }
