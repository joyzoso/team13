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
var questions=[];

// Implement addQuestion()
function addQuestion(){
var newQuestion = {};

console.log("hello");
var ai = $('input[name="category"]:checked').val();
var di = $('#question-input').val();
console.log(di)

newQuestion.category = ai;
newQuestion.text1 = di;
console.log(di)
newQuestion.textName = "anonymous";

print(newQuestion);

questions.push(newQuestion);
window.add(di, ai);
window.location = "/static/feed.html";
refreshDOM();

// Clear Inputs
$('#category-input').val("");
$('#question-input').val("");

}


// Implement refreshDOM()
function refreshDOM(){
if (questions === undefined) return;

var container = $(".questions");
container.html("");

for (var i=0; i<questions.length; i++){
  var currentListing = questions[i];
  var listItem = $("<li>");
  // content
  listItem.append($("<h3>").html(currentListing.text));
  listItem.append("<h6>" + currentListing.date + "</h6>");
  listItem.append("<p>" + currentListing.category + "</p>");
  listItem.append("<p>$" + currentListing.price + "</p>");

  if (currentListing.sold === true) {
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

  // sold button
  var soldButton = $("<a>").attr("id", i).html("Sold!");
  listItem.append(soldButton);
  soldButton.click(function(){
    var buttonClicked = $(this);
    var buttonID = buttonClicked.attr("id");

    buttonClicked.parent().addClass("sold");
    questions[buttonID].sold = true;//!(questions[buttonID].sold);

    /* edit(id, category, text, price, sold) */
    window.edit(buttonID, l.category, l.text, undefined, true );
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

// Implement the add(category, text, price) function
function add(text, category) {
  $.ajax({
    type: "post",
    data: {"category": category, "text1": text},
    url: "/questions",
    success: function(data) { }
  });
}

function edit(id, category, text, price, sold) {
  $.ajax({
    type: "put",
    data: {category: category, text: text, price: price, sold: sold},
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
