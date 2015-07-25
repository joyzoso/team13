// ------------
// IMPLEMENT ME
// ------------

// Global datastore
var questions;

// Implement refreshDOM()
function refreshDOM(){
if (questions === undefined) return;

var container = $(".questions");
container.html("");

for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];

  var questionPanel = $('<div class="panel"><span class="q-text">' + currentQuestion.text + '</span><br><span class="q-username">' + currentQuestion.authorName + '</span></div>');
  var showAnswers = $('<span class="show-answers pull-right" id="' + i + '">show answers</span>');
  questionPanel.append(showAnswers);
  container.append(questionPanel);

  var answerPanel = $('<div class="panel q-answer" id="q-answer' + i + '"></div>');

  for(var j = 0; j < currentQuestion.answers.length; j++){
    var answer = $('<span class="q-username">' + currentQuestion.answers[j].authorName + '</span><br><span class="q-body">' + currentQuestion.answers[j].text + '</span><br/><br/>');
    answerPanel.append(answer);
  }

  container.append(answerPanel);

  // //show answers

  showAnswers.click(function(){
    buttonClicked = $(this);
    var buttonID = buttonClicked.attr('id');
    var answers = $('#q-answer' + buttonID);
    if(answers.is(':visible')){
      answers.hide("fast");
      buttonClicked.html("show answers");
    }
    else{
      answers.show("slow");
      buttonClicked.html("hide answers");
    }
    // refreshDOM();
  });

  }
}

// Implement the get() function
function get() {
  $.ajax({
    type: "get",
    url: "/questions",
    success: function(data) {
      questions = data.questions;
      //console.log(questions);
      refreshDOM();
    }
  });
}


$(document).ready(function() {
  get();
});
