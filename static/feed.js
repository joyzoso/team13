// ------------
// IMPLEMENT ME
// ------------

// Debugging - console.logs run only when true
debug = false;

// Print function
var print = function(input){
if (debug === true){
  console.log(input);
}
}

// Global datastore
var questions;

// Implement addQuestion()
function addQuestion(){
var newQuestion = {};

console.log("hello");
var ai = $('#author-input').val();
var di = $('#desc-input').val();
var pi = $('#price-input').val();

newQuestion.author = ai;
newQuestion.desc = di;
newQuestion.price = pi;
newQuestion.date = new Date();

print(newQuestion);

questions.push(newQuestion);
window.add(di, ai, pi);
refreshDOM();

// Clear Inputs
$('#author-input').val("");
$('#desc-input').val("");
$('#price-input').val("");
}


// Implement refreshDOM()
function refreshDOM(){
if (questions === undefined) return;

var container = $(".questions");
container.html("");

for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  var listItem = $("<li>");
  // content
  listItem.append($("<h3>").html(currentQuestion.author));
  listItem.append("<h6>" + currentQuestion.date + "</h6>");
  listItem.append("<p>" + currentQuestion.desc + "</p>");
  listItem.append("<p>$" + currentQuestion.price + "</p>");

  if (currentQuestion.sold === true) {
    print("its sold already");
    listItem.addClass("sold");
  }


  // delete button
  var delButton = $("<a class='del'>").attr("id", i).html("Delete");
  listItem.append(delButton);
  delButton.click(function(){
    var buttonClicked = $(this);
    var buttonID = buttonClicked.attr("id");
    print("delete");
    questions.splice(buttonID, 1);
    window.del(buttonID);
    refreshDOM();
  });

  //show answers

  var answerButton = $(".show-answers");
  answerButton.click(function(){
    var answers = $(".q-answer");
    if(answers.is(':visible')){
      answers.hide("fast");
    }
    else{
      answers.show("slow");
      $(this).html("hide answers");
    }
    // refreshDOM();
  });

  // sold button
  var soldButton = $("<a>").attr("id", i).html("Sold!");
  listItem.append(soldButton);
  soldButton.click(function(){
    var buttonClicked = $(this);
    var buttonID = buttonClicked.attr("id");

    buttonClicked.parent().addClass("sold");
    questions[buttonID].sold = true;//!(questions[buttonID].sold);

    /* edit(id, desc, author, price, sold) */
    window.edit(buttonID, l.desc, l.author, undefined, true );
    // refreshDOM();
  });

  // listItem += "</li>";


  $(".questions").append(listItem);
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

// Implement the add(desc, author, price) function
function add(desc, author, price) {
  $.ajax({
    type: "post",
    data: {"desc": desc, "author": author, "price": price},
    url: "/questions",
    success: function(data) { }
  });
}

function edit(id, desc, author, price, sold) {
  $.ajax({
    type: "put",
    data: {desc: desc, author: author, price: price, sold: sold},
    url: "/questions/" + id,
    success: function(data) { }
  });
}

function del(id) {
  $.ajax({
    type: "delete",
    url: "/questions/" + id,
    success: function(data) {
      //console.log(data);
    }
  });
}

function delAll() {
  $.ajax({
    type: "delete",
    url: "/questions",
    success: function(data) { }
  });
}



$(document).ready(function() {
  get();
});
