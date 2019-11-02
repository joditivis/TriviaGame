//$(document).ready(function() {

var rightAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;

var correctChoice;
var userChoice;

var interval;
var timerNumber = 300;


var gameQuestions = [{
            question: "What year were Christmas lights invented?",
            answerChoices: ["1793", "1910", "1882", "1837"],
            correctAnswer: 2 //1882 is at index 2
        },{
            question: "What is the highest selling Christmas song?",
            answerChoices: ["White Christmas", "Jingle Bells", "Silent Night", "Carol of the Bells"],
            correctAnswer: 0 //white christmas is at index 0
        },{
            question: "Which of these companies was the first to use Santa Claus in an advertisement?",
            answerChoices: ["Pepsi", "Coca-Cola", "Dr. Pepper", "Sprite"],
            correctAnswer: 1 // coca-cola is at index 1
        },{
            question: "Which president was the first to decorate the White House Christmas tree?",
            answerChoices: ["Benjamin Franklin", "George Washington", "Abraham Lincoln", "Franklin Pierce"],
            correctAnswer: 3 // franklin pierce is at index 3
        },{
            question: "Which country did the ginger bread house come from?",
            answerChoices: ["Austria", "Germany", "Switzerland", "United States"],
            correctAnswer: 1 // germany is at index 1
        },{
            question: "In what year was A Christmas Carol by Charles Dickens published?",
            answerChoices: ["1765", "1843", "1860", "1906"],
            correctAnswer: 1 // 1843 is at index 1
        },{
            question: "How many reindeer pull Santa's sleigh?",
            answerChoices: ["8", "9", "10", "12"],
            correctAnswer: 0 // 8 is at index 0
        },{
            question: "Who decided the date for Christmas would be December 25th?",
            answerChoices: ["Pope John Paul", "Emporor Constantine", "Pope Julius I", "Pope Clement V"],
            correctAnswer: 2 // pope julius I is at index 2
        },{
            question: "What do traditional Ukrainians put on their Christmas tree for good luck?",
            answerChoices: ["candles", "a bird's nest", "goose feathers", "a spider's web"],
            correctAnswer: 3 // a spiders web is at index 3
        },{
            question: "After leaving Bethlehem, which country did Joseph, Mary, and Jesus travel to?",
            answerChoices: ["Egypt", "Jordan", "Lebanon", "Syria"],
            correctAnswer: 0 // egypt is at index 0
        },{
            question: "Which country created eggnog?",
            answerChoices: ["Switzerland", "Germany", "England", "Poland"],
            correctAnswer: 2 // england is at index 2
        },{
            question: "What is the most popular ornament for the top of the Christmas tree?",
            answerChoices: ["Star", "Bow", "Dove", "Angel"],
            correctAnswer: 3 // angel is at index 3
        },{
            question: "Which state in America was the first to recognize Christmas as an official holiday?",
            answerChoices: ["Alabama", "Texas", "New York", "Washington"],
            correctAnswer: 0 // alabama is at index 0
        },{
            question: "What was the last ghost called in A Christmas Carol?",
            answerChoices: ["The Ghost of Christmas Present", "The Ghost of Christmas Yet to Come", "The Ghost of Christmas Past", "Jacob Marley's Ghost"],
            correctAnswer: 1  // "The Ghost of Christmas Yet to Come" is at index 1
        },{
            question: "What holiday film annually plays on tv more than 300 times?",
            answerChoices: ["A Christmas Story", "The Grinch", "It's a Wonderful Life", "Elf"],
            correctAnswer: 2 //"It's a Wonderful Life" is at index 2
        },{
            question: "How many pipers piping did my true love give to me?",
            answerChoices: ["7", "11", "9", "4"],
            correctAnswer: 1 // 11 is at index 1
        },{
            question: "What country started the tradition of exchanging gifts?",
            answerChoices: ["Italy", "Germany", "Greece", "Israel"],
            correctAnswer: 0 // Italy is at index 0
        },{
            question: "What country started the tradition of putting up a Christmas tree?",
            answerChoices: ["Ukraine", "Russia", "Germany", "Norway"],
            correctAnswer: 2 // germany is at index 2
        }];


//// START OF MAIN GAME FUNCTION
    $("#start-button").on("click", function() {

        //hides start page and start button after clicked
        $("#start-page").hide();

        //calls start timer function
        startTimer();
        
        //creating a variable for our questions page
        var questionsPage = $("#questions-page");
        var questionsPageOpener = $("#questions-page-opener");

        //adds the following words to screen when start button is pressed
        questionsPageOpener.append('<h3>Answer the following questions:</h3><hr>');

    //loops and prints all of the questions from the array
        for (var i = 0; i < gameQuestions.length; i++) {

            //this displays all questions to the page
            questionsPage.append('<div id="question">' + gameQuestions[i].question + '</div>');

            //variables for each answer option
            var answer1 = gameQuestions[i].answerChoices[0];
            var answer2 = gameQuestions[i].answerChoices[1];
            var answer3 = gameQuestions[i].answerChoices[2];
            var answer4 = gameQuestions[i].answerChoices[3];

            //this displays all answer options to page and displays them with a selector
            questionsPage.append("<input type='radio' class='answer-check-input' name='radio-group"+i+"' id='radio"+i+"'><label class='answer-check-label'>" + answer1 + "</label><br>");
            questionsPage.append("<input type='radio' class='answer-check-input' name='radio-group"+i+"' id='radio"+i+"'><label class='answer-check-label'>" + answer2 + "</label><br>");
            questionsPage.append("<input type='radio' class='answer-check-input' name='radio-group"+i+"' id='radio"+i+"'><label class='answer-check-label'>" + answer3 + "</label><br>");
            questionsPage.append("<input type='radio' class='answer-check-input' name='radio-group"+i+"' id='radio"+i+"'><label class='answer-check-label'>" + answer4 + "</label><br><br>");
       
        }

        //this adds the done button to end of the page 
        questionsPage.append("<button class='btn btn-danger btn-lg' id='done'>Done</button>");

        //goes to the results end page when done button is clicked
        $("#done").on("click", function() {
            
            // stopGame();
            checkAnswer();
            showEndPage();
        });
    });
//// END OF MAIN GAME FUNCTION


// //starts timer
    function startTimer() {      
        clearInterval(interval);
        interval = setInterval(decrement, 1000);
    }

//decreases the amount of time on the timer
    function decrement() {
        // -- tells the times to count down
        timerNumber--;

        //variable for our converted time to match our timerNumber variable
        var timeConverted = time_converter(timerNumber);

        //displays the timer to the page
        $("#timer").html('<h2>Time: ' + timeConverted + '</h2>');

        // if the time equals zero it will take player to results end page
        if (timerNumber === 0) {
            
            stopGame();

            checkAnswer();
        }
    }

    // this converts our time to minutes and seconds
    function time_converter(t) { 
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);

      if (seconds < 10) {
        seconds = "0" + seconds;
      }
    
      if (minutes === 0) {
        minutes = "00";
      } else if (minutes < 10) {
        minutes = "0" + minutes;
      }

      return minutes + ":" + seconds;         
}

    //stops timer and clears it if runs out or user is done
    function stopGame() {
        clearInterval(interval);
    }     


    function showEndPage() {
        //hides questions page
        $("#questions-page").hide();

        //shows end page with results
        $("#results-text").html("<h3>All done! Here are your results: </h2>");
        $("#right-answers").html("Correct: " + rightAnswers);
        $("#wrong-answers").html("Incorrect: " + wrongAnswers);
        $("#unanswered-questions").html("Unanswered: " + unanswered);
    }


    function checkAnswer() {

        var correctChoice;
        var userChoice;

        for (var i = 0; i < gameQuestions.length; i++) {
            correctChoice = gameQuestions[i].correctAnswer;
            userChoice = $('input[id=radio'+i+']:checked').text();
            if (userChoice === correctChoice) {
              rightAnswers++;
            } 
            else if (userChoice !== correctChoice) {
                wrongAnswers++;
            }
            else if (userChoice === "") {
                unanswered++;
            } 
        }
    }


//});