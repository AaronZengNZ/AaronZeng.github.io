var head = document.getElementById("heading");
var text = document.getElementById("text");
var next = document.getElementById("next");
var back = document.getElementById("back");
var titles = [
  "Who was Martin Luther King?",
  "When did Martin Luther give his big speech?",
  "Who were Martin's followers?",
  "What got Martin his Authority?",
];
var info = [
  "Martin Luther King Jr was born on the 15th of January 1929 in Atlanta Georgia. He was born in an African-American family and his dad was a baptist pastor. As a child, he recognised severe racism towards his fellow African-Americans. After slavery was banned in The USA, 'peace' between African and European- Americans was supposed to be made. However, especially in the 1940s, racial discrimination was considered as a normal act.  That was the limit for Martin and he decided to take a stand.",
  "Martin gave his big speech on the 28th of August 1963. His speech was that he had a dream and his dream was that he wanted the black and white people to unite, so basically he was fighting for American Civil Rights.",
  "Before his speech, most of his followers were black people. But after his speech, many changes occurred. He united the white and black, creating a great amount of followers, including both white and black people. Even after his speech, his followers still kept on increasing. He has written many books, including 'I have a dream', 'Strength to Love', 'Why We Can't Wait', and many, many more.",
  "He got his authority from his great 'I have a dream' speech in which he was fighting for American Civil Rights. He thought that it was unfair that African Americans were not getting treated fairly. He was the first president and founder of the Southern Christian Leadership Conference (SCLC). In the early 1963 Martin founded the Birmingham Police Department, also known as the Birmingham Campaign. It was one of the most racial divided cities in the us. The campaign gained nationwide attention when the Birmingham Police Department, led by Eugene 'Bull' Connor, used high-pressure water jets and police attack dogs on the children, causing the movement to close down, resulting in Connor getting arrested.  Some of the key attributes he had was vision, communication, and much more. His speaking was effective enough to earn justice through equal human rights. ",
];
var questionNumOn = 0;
var questions = [
  {
    question: "Was Martin born on January 15 1929?",
    answer: true,
  },
  {
    question: "Was Martin born in Atlantica Georgia?",
    answer: false,
  },
  {
    question: "Was Martin fighting for the Austrailia Civil Rights?",
    answer: false,
  },
  {
    question: "Did Martin get Arrested?",
    answer: false,
  },
  {
    question: "Is Martin African?",
    answer: true,
  },
];
var questionsDid = [""];
var imgLinks = [""];
var titleOn = -1;
var countDown = -1;
var showText = "Time's up!";
var hasAnswered = Boolean;
var questionsCorrect = 0;
var questionsMissed = 0;
hasAnswered = false;
window.setInterval(() => {
  if (countDown > 0) {
    if (questionsDid.length >= questions.length) {
    } else {
      countDown--;
    }
    text.innerHTML = questions[questionNumOn].question;
    if (questionsDid.length >= questions.length) {
      text.innerHTML =
        "You got " +
        questionsCorrect +
        " questions right out of " +
        questions.length +
        ". You have also missed " +
        questionsMissed +
        " " +
        (questionsMissed == 1 ? "question." : "questions.") +
        " Your overall score is " +
        Math.floor(
          questions.length -
            (questions.length - questionsCorrect - questionsMissed) -
            questionsMissed * 2
        ) *
          20 +
        "/100.";
    }
    if (questionsDid.length >= questions.length) {
      document.getElementById("countDown").innerHTML = "";
    } else {
      document.getElementById("countDown").innerHTML =
        Math.floor(countDown / 20) + 1;
    }
    if (hasAnswered == false) {
      showText = "Time's up!";
    }
  }
  if (countDown == -0.9) {
    countDown = 100;
    questionsDid += questionNumOn;
    if (showText == "Time's up!") {
      questionsMissed++;
    }
    if (showText == "Correct!") {
      questionsCorrect++;
    }
    while (
      questionsDid.includes(questionNumOn) &&
      questionsDid.length < questions.length
    ) {
      questionNumOn = Math.floor(Math.random() * questions.length);
    }
    if (questionsDid.length >= questions.length) {
    }
  } else {
    if (countDown > -0.9 && countDown < 0.1) {
      document.getElementById("countDown").innerHTML = showText;
      countDown += -0.1;
      countDown = Math.round(countDown * 10) / 10;
      console.log(countDown);
    }
  }
}, 35);
var answer = Boolean;
function checkAnswer() {
  hasAnswered = true;
  if (answer == questions[questionNumOn].answer) {
    countDown = 0;
    showText = "Correct!";
  } else {
    countDown = 0;
    showText = "Incorrect...";
  }
  hasAnswered = false;
}
back.onclick = () => {
  if (titleOn <= 0 || titleOn >= 3) {
    back.classList.remove("btn-primary");
    back.classList.add("btn-secondary");
  } else {
    next.innerHTML = "Next";
    back.classList.remove("btn-secondary");
    back.classList.add("btn-primary");
    titleOn--;
    head.innerHTML = titles[titleOn];
    text.innerHTML = info[titleOn];
    if (titleOn <= 0) {
      back.classList.remove("btn-primary");
      back.classList.add("btn-secondary");
    }
  }
  if (titleOn == 4) {
    if (titleOn == 4) {
      answer = false;
      checkAnswer();
    }
    head.innerHTML = "Quiz Time!";
    text.innerHTML = "";
    next.classList.remove("btn-primary");
    next.classList.add("btn-success");
    next.innerHTML = "True";
    back.classList.remove("btn-primary");
    back.classList.add("btn-danger");
    back.innerHTML = "False";
  }
};
next.onclick = () => {
  if (titleOn >= 0) {
    back.classList.remove("btn-secondary");
    back.classList.add("btn-primary");
  }
  if (titleOn >= 3) {
    if (titleOn == 4) {
      answer = true;
      checkAnswer();
    }
    head.innerHTML = "Quiz Time!";
    text.innerHTML = "";
    next.classList.remove("btn-primary");
    next.classList.add("btn-success");
    next.innerHTML = "True";
    back.classList.remove("btn-primary");
    back.classList.add("btn-danger");
    back.innerHTML = "False";
    if (titleOn == 3) {
      countDown = 100;
    }
    titleOn = 4;
  } else {
    titleOn++;
    head.innerHTML = titles[titleOn];
    text.innerHTML = info[titleOn];
    if (titleOn == 3) {
      next.innerHTML = "Finish Presentation";
    }
  }
};
