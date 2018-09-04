const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question){
  const qContainer = document.querySelector('.question-container');
  qContainer.innerHTML = question.questionText;
}

function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)
  toggleTrueAndFalseButtons()
  return new Promise((resolve, reject) => {
   setTimeout(function(){
     resolve(question)
   }, time )
 })
}

function removeQuestion(promise) {
  console.log(promise);
  const qContainer = document.querySelector('.question-container');
  qContainer.innerHTML = ''
  toggleTrueAndFalseButtons()
  return new Promise((resolve, reject) => {
    resolve()
 })
}

function askQuestionThenRemoveQuestion(time) {
  askQuestionThen(time)
  .then(removeQuestion)
}

function trueAndFalseButtons(){
  const trueButton = document.querySelector('#true-btn');
  const falseButton = document.querySelector('#false-btn');
  return [trueButton, falseButton];
}

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(function(button){
    button.classList.toggle("hide")
  })
}

function displayQuestionOnClick(){
  askQuestionThenRemoveQuestion(5000)


}
