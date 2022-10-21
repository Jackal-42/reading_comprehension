//jshint esversion:6
let wpm = 200;
let wordCycle;
let syllables = 2;
let tests = [2, 2, 2, 3, 3, 3, 4, 4, 4];
let shuffled = [];
let testNum = 0;
let testing = false;

let sentence = [];
let wordIndex = 0;
function newSentence(){
  if(testNum == 9){
    testing = false;
    testNum == 0;
    document.getElementById("practice").innerHTML = "Practice";
    document.getElementById("startTest").style.display = "inline";
    document.getElementById("output").innerHTML = "Congrats! You've finished";
    return;
  }
  if(testing){
    document.getElementById("syllables").value = shuffled[testNum];
    testNum++;
  }
  wpm = document.getElementById("wpm").value;
  syllables = document.getElementById("syllables").value;
  document.getElementById("answer").innerHTML = "";
  wordIndex = 0;
  sentence = [];
  wordCycle = setInterval(changeWord, 60000/wpm);
  for(let i = 5; i > 0; i--){
    sentence.push(i);
  }
  genWords();
  sentence.push("and");
  genWords();
  sentence.push("&nbsp");
  if(testNum == 9){
    document.getElementById("practice").innerHTML = "End Test";
  }
}

function startTest(){
  for(let i = 0; i < 9; i++){
    let testIndex = Math.floor(Math.random() * tests.length);
    shuffled.push(tests[testIndex]);
    tests.splice(testIndex, 1);
  }
  testing = true;
  document.getElementById("practice").innerHTML = "Next Question";
  document.getElementById("startTest").style.display = "none";
}

function genWords(){
  if(syllables == 2){
    sentence.push(adj2[Math.floor(Math.random() * adj2.length)]);
    sentence.push(n2[Math.floor(Math.random() * n2.length)]);
  }else if(syllables == 3){
    sentence.push(adj3[Math.floor(Math.random() * adj3.length)]);
    sentence.push(n3[Math.floor(Math.random() * n3.length)]);
  }else{
    sentence.push(adj4[Math.floor(Math.random() * adj4.length)]);
    sentence.push(n4[Math.floor(Math.random() * n4.length)]);
  }
}

function show(){
  document.getElementById("answer").innerHTML = sentence.join(" ").replace("5 ", "").replace("4 ", "").replace("3 ", "").replace("2 ", "").replace("1 ", "");
}

function changeWord(){
  document.getElementById("output").innerHTML = sentence[wordIndex];
  wordIndex++;
  if(wordIndex == sentence.length){
    clearInterval(wordCycle);
  }
}
