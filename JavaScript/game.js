const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

/* HERE IS ALL OUR QUESTIONS THE GAME RANDOMLY CHOSES.
   THE GAME CHOOSES 10 QUESTIONS WITH 10 MARK FOR EACH RIGHT ANSWERS.   */

let questions = [
    {
        question: "What is the name of the long war that the English kings fought with France in the middle ages?",
        choice1: "The Boer War",
        choice2: "The Hundred Years War",
        choice3: "The First World War",
        choice4: "The Crimean War",
        answer: 2

    },

    {
        question: "Where is the UK geographically located?",
        choice1: "South east of Europe",
        choice2: "North west of Europe",
        choice3: "North east of Europe",
        choice4: "South west of Europe",
        answer: 2

    },


    {
        question: "When did the WWI come to an end?",
        choice1: "1943",
        choice2: "1945",
        choice3: "1918",
        choice4: "1922",
        answer: 3

    },

    {
        question: "Which treaty set up the European Economic Community?",
        choice1: "The Treaty of Lisbon",
        choice2: "The Treaty of Geneva",
        choice3: "The Treaty of Paris",
        choice4: "The Treaty of Rome",
        answer: 3

    },

    {
        question: "Which of these are associated with Halloween?",
        choice1: "Trick or Treat",
        choice2: "Fireworks ",
        choice3: "Mistletoe",
        choice4: "Hot cross buns",
        answer: 1

    },

    {
        question: "What are the members of the House of Lords known as?",
        choice1: "MPs",
        choice2: "Peers",
        choice3: "Monarchs",
        choice4: "MHLs",
        answer: 2

    },

    {
        question: "Which of the following was signed in Northern Ireland in 1998?",
        choice1: "The Good Friday Agreement",
        choice2: "The Forced Marraige (Civil Protection) Act",
        choice3: "The Eupropean Convention on Human Rights",
        choice4: "The Bill of Rights",
        answer: 1

    },

    {
        question: "Which of the following statement is correct?",
        choice1: "The Union Flag is made up of four crosses, one for each part of the UK",
        choice2: "The Union Flag comprises three crossess",
        choice3: "",
        choice4: "",
        answer: 2

    },

    {
        question: "What are Kew, Sissinghurst, Bodnant and Mount Stewart famous for?",
        choice1: "Castles",
        choice2: "Gardens",
        choice3: "Safari parks",
        choice4: "Manor houses",
        answer: 2

    },

    {
        question: "Which of the following is an important type of plane, famously used in the Battle of Britain?",
        choice1: "Armada",
        choice2: "Blitz",
        choice3: "Spitfire",
        choice4: "Concorde",
        answer: 3

    },

    {
        question: "Which is the largest expanse of fresh water in mainland Britain?",
        choice1: "Lake Windermere",
        choice2: "Loch Lomond",
        choice3: "Derwentwater",
        choice4: "Loch Ness",
        answer: 2

    },

    {
        question: "Who took over from Tony Blair as Prime Minister in 2007?",
        choice1: "Ed Miliband",
        choice2: "David Cameron",
        choice3: "Gordon Brown",
        choice4: "Alistair Darling",
        answer: 3

    },

    {
        question: "Which of the following is a famous UK landmark?",
        choice1: "The London Eye",
        choice2: "Albert Square",
        choice3: "The Hindoostane Coffee House",
        choice4: "The Eisteddfod",
        answer: 1

    },

    {
        question: "The expression 'a sticky wicket' comes from which sport?",
        choice1: "Rugby",
        choice2: "Skating",
        choice3: "Cricket",
        choice4: "Golf",
        answer: 3

    },

    {
        question: "Who was Prime Minister of the Labour government elected in 1945?",
        choice1: "Winston Churchill",
        choice2: "Clement Attlee",
        choice3: "William Beveridge",
        choice4: "Tony Blair",
        answer: 2

    },

    {
        question: "Who wrote the Harry Potter series of books?",
        choice1: "E L James",
        choice2: "R L Stevenson",
        choice3: "J K Rowling",
        choice4: "Graham Greene",
        answer: 3

    },

    {
        question: "Which monarch established the Church of England?",
        choice1: "Henry VIII",
        choice2: "Elizabeth I",
        choice3: "Edward I",
        choice4: "Henry VII",
        answer: 1

    },

    {
        question: "Which of these books is traditionally assosciated with Christmas in the UK?",
        choice1: "Swan",
        choice2: "Swallow",
        choice3: "Turkey",
        choice4: "Penguin",
        answer: 3

    },

    {
        question: "The people of which age were the first to make coins to be minted in Britain?",
        choice1: "Bronze Age",
        choice2: "Iron Age ",
        choice3: "Stone Age",
        choice4: "Middle Age",
        answer: 2

    },

    {
        question: "Where in the UK is the National Horseracing Museum?",
        choice1: "Ascot",
        choice2: "Newmarket",
        choice3: "Liverpool",
        choice4: "Cheltenham",
        answer: 2

    },

    {
        question: "Which of the following is a core value of the Commonwealth?",
        choice1: "Intolerance",
        choice2: "Slavery",
        choice3: "Inequality",
        choice4: "Good governace",
        answer: 4

    },

    {
        question: "Which Prime Minister oversaw the creation of the NHS?",
        choice1: "Clement Attlee",
        choice2: "Winston Churchill ",
        choice3: "Edward Heath",
        choice4: "Margeret Thatcher",
        answer: 1

    },

    {
        question: "Who invented the World Wide Web?",
        choice1: "Sir Robert Edwards",
        choice2: "Sir Ian Wilmot",
        choice3: "Sir Peter Mansfield",
        choice4: "Sir Tim Berners-Lee",
        answer: 4
    }

];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the end page
    return window.location.assign("./../html/end.html");
  }
  questionCounter++;
  questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();