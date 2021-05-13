
window.onload=(event) => {
  show(0);
}
 var myTimer=0;
let seconds=15;
const countDownEl=document.getElementById("countdown");
var mytimer=setInterval(updateCountDown,1000);
// setTimeout(function(){  clearInterval(mytimer);}, 70000);

// setInterval(updateCountDown,1000);
//here answer is not written according to array idenxing but normal indexing

// let time=startingTime

let question_count=0;
let score=0;
let questions=[
  {
    id:1,
    question:"1. Which is this microorganism",
    answer:"1",
    options:["Ameoba","paramoceium","Chlaymydomonas","spirpgyara"]

  },
  {
    id:2,
    question:"2. Which is this microorganism",
    answer:"2",
    options:["Ameoba","paramoceium","Chlaymydomonas","spirpgyara"]

  },
  {
    id:3,
    question:"3. Which is this microorganism",
    answer:"3",
    options:["Ameoba","paramoceium","Chlaymydomonas","spirpgyara"]

  }

]

function submitform(e){
  e.preventDefault();
  // as there is no backend work as soon as we click on submit button we get that ? Symbol
  // now we have no backend work so it has to be tackeled we will pass the event object from form
  // and prevent it from going to the backend by default by using the preventDefault()

  location.href="quiz1.html";
  //what we want to do here basically is target the page of first Question
  console.log("Form Submitted");
}

// Now we will have the next function which will basically be responsible to increase the function count
function next(){
  seconds=15;
  // if(question_count === (questions.length-1)){
  //   alert("Congratulations!!Your Score is "+score +"/30");
  // }
// i have taken 0 because unchecked raha toh 0 hi rahnega
  let user_answer="0";
  // for(var i=0;i<4;i++){
  //   if(radio_buttons[i].innerHTML === questions[question_count].answer){
  //     console.log("true");
  //   }
  // }


  if(document.getElementById('f-option').checked) {
    user_answer=document.getElementById('f-option').value ;
  console.log("option 1 checked");
  console.log(document.getElementById('f-option').value );
  console.log(questions[0].answer);
  console.log(document.getElementById('f-option').value ===  questions[0].answer)
  }else if(document.getElementById('s-option').checked) {
    user_answer=document.getElementById('s-option').value ;
  console.log("option 2 checked");
}else if(document.getElementById('t-option').checked) {
  user_answer=document.getElementById('t-option').value ;
console.log("option 3 checked");
}else if(document.getElementById('r-option').checked){
  user_answer=document.getElementById('r-option').value ;
  console.log("option 4 checked");
}else{
  console.log("Time-out");
}
console.log("ans of the qs is "+questions[question_count].answer);
console.log("user answer "+user_answer);

if(user_answer===questions[question_count].answer){
  score=score+10;
  console.log("inside if");
}
console.log(score);

if(question_count === (questions.length-1)){
  alert("Congratulations!!Your Score is "+score +"/30");
  clearInterval(mytimer);
  return;
}
  // console.log(document.querySelectorAll(".element-animation")[0].innerHTML == questions[1].answer);
  //   console.log(document.querySelectorAll(".element-animation"));
  //   console.log(document.querySelectorAll(".element-animation")[0].innerHTML);
  //   console.log(questions[2].answer);
  var ele = document.getElementsByName("selector");
   for(var i=0;i<ele.length;i++)
      ele[i].checked = false;
  question_count+=1;
  console.log(question_count);
  show(question_count);
}

//this function displays what to show as soon as you have your browser loaded
function show(count){
  let question=document.getElementById("qid");
  let firstOption=document.getElementById("f1-option");
  let secondOption=document.getElementById("s1-option");
  let thirdOption=document.getElementById("t1-option");
  let fourthOption=document.getElementById("r1-option");
    // question.innerHTML= "<h2>"+ questions[count].question + "</h2>";

  question.innerHTML=`<h2>${ questions[count].question }</h2>`;
  firstOption.innerHTML=`${questions[count].options[0]} `;
  secondOption.innerHTML=`${questions[count].options[1]} `;
  thirdOption.innerHTML=`${questions[count].options[2]} `;
  fourthOption.innerHTML=`${questions[count].options[3]} `;

    // setInterval(updateCountDown,1000);
    console.log("hello");


}

function updateCountDown(){
  seconds--;
  if(seconds>9){
    countDownEl.innerHTML=`00:${seconds}`;
  }else if(seconds>0){
    countDownEl.innerHTML=`00:0${seconds}`;
  }else if(seconds===0){
    next();

  }else{
    console.log("I dont know what error is this and how can it come in this else");
  }

  console.log(seconds);
}
