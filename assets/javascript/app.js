$(document).ready(function() {

var rightAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var interval;
var timerNumber = 300;


var gameQuestions = [{
            question: "What year were Christmas lights invented?",
            answerChoices: ["1793", "1910", "1882", "1837"],
            correctAnswer: "1882"
        },{
            question: "What is the highest selling Christmas song?",
            answerChoices: ["White Christmas", "Jingle Bells", "Silent Night", "Carol of the Bells"],
            correctAnswer: "White Christmas"
        },{
            question: "Which of these companies was the first to use Santa Claus in an advertisement?",
            answerChoices: ["Pepsi", "Coca-Cola", "Dr. Pepper", "Sprite"],
            correctAnswer: "Coca-Cola"
        },{
            question: "Which president was the first to decorate the White House Christmas tree?",
            answerChoices: ["Benjamin Franklin", "George Washington", "Abraham Lincoln", "Franklin Pierce"],
            correctAnswer: "Franklin Pierce"
        },{
            question: "Which country did the ginger bread house come from?",
            answerChoices: ["Austria", "Germany", "Switzerland", "United States"],
            correctAnswer: "Germany"
        },{
            question: "In what year was A Christmas Carol by Charles Dickens published?",
            answerChoices: ["1765", "1843", "1860", "1906"],
            correctAnswer: "1843"
        },{
            question: "How many reindeer pull Santa's sleigh?",
            answerChoices: ["8", "9", "10", "12"],
            correctAnswer: "8"
        },{
            question: "Who decided the date for Christmas would be December 25th?",
            answerChoices: ["Pope John Paul", "Emporor Constantine", "Pope Julius I", "Pope Clement V"],
            correctAnswer: "Pope Julius I"
        },{
            question: "What do traditional Ukrainians put on their Christmas tree for good luck?",
            answerChoices: ["candles", "a bird's nest", "goose feathers", "a spider's web"],
            correctAnswer: "a spider's web"
        },{
            question: "After leaving Bethlehem, which country did Joseph, Mary, and Jesus travel to?",
            answerChoices: ["Egypt", "Jordan", "Lebanon", "Syria"],
            correctAnswer: "Egypt"
        },{
            question: "Which country created eggnog?",
            answerChoices: ["Switzerland", "Germany", "England", "Poland"],
            correctAnswer: "England"
        },{
            question: "What is the most popular ornament for the top of the Christmas tree?",
            answerChoices: ["Star", "Bow", "Dove", "Angel"],
            correctAnswer: "Angel"
        },{
            question: "Which state in America was the first to recognize Christmas as an official holiday?",
            answerChoices: ["Alabama", "Texas", "New York", "Washington"],
            correctAnswer: "Alabama"
        },{
            question: "What was the last ghost called in A Christmas Carol?",
            answerChoices: ["The Ghost of Christmas Present", "The Ghost of Christmas Yet to Come", "The Ghost of Christmas Past", "Jacob Marley's Ghost"],
            correctAnswer: "The Ghost of Christmas Yet to Come"
        },{
            question: "What holiday film annually plays on tv more than 300 times?",
            answerChoices: ["A Christmas Story", "The Grinch", "It's a Wonderful Life", "Elf"],
            correctAnswer: "It's a Wonderful Life"
        },{
            question: "How many pipers piping did my true love give to me?",
            answerChoices: ["7", "11", "9", "4"],
            correctAnswer: "11"
        },{
            question: "What country started the tradition of exchanging gifts?",
            answerChoices: ["Italy", "Germany", "Greece", "Israel"],
            correctAnswer: "Italy"
        },{
            question: "What country started the tradition of putting up a Christmas tree?",
            answerChoices: ["Ukraine", "Russia", "Germany", "Norway"],
            correctAnswer: "Germany"
        }];


    $("#start-button").on("click", function() {

        //hides start page and start button after clicked
        $("#start-page").hide();

        startTimer();
        

        var questionsPage = $("#questions-page");

        //adds the following words to screen when start button is pressed
        questionsPage.append('<h2>Answer the following questions: </h2>');

    //loops and prints all of the questions in the array
        for (var i = 0; i < gameQuestions.length; i++) {

            questionsPage.append(gameQuestions[i].question.answerChoices);

            var answer1 = gameQuestions[i].answerChoices[0];
            var answer2 = gameQuestions[i].answerChoices[1];
            var answer3 = gameQuestion[i].answerChoices[2];
            var answer4 = gameQuestions[i].answerChoices[3];

            questionsPage.append()
            questionsPage.append
            questionsPage.append
            questionsPage.append
        };
    });

        $("#done-button").on("click", function() {

            scoreKeeper();
            showEndPage();
        });

//starts timer
    function startTimer() {
        
        clearInterval(interval);
        interval = setInterval(decrement, 1000);
    }

//decreases the amount of time on the timer
    function decrement() {
        timerNumber--;
        $("#timer").html("<h2>Time: " + timerNumber + "</h2>");

        if (timerNumber === 0) {
            stopGame();

            scoreKeeper();
            showEndPage();
        }
    }

    //stops timer and clears it if runs out or game is finished
    function stopGame() {
        clearInterval(interval);
    }

    function showEndPage() {

        //hides all questions
        $("#question-page").hide();

        //shows end page with results
        $("#results-text").text("<h3>All done! Here are your results: </h2>");
        $("#right-answers").text("Correct: " + rightAnswers);
        $("#wrong-answers").text("Incorrect: " + wrongAnswers);
        $("#unanswered-questions").text("Unanswered: " + unanswered);
    }




});


// ('<div class="answer-check"><input class="answer-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="answer-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
//             questionsPage.append('<div class="answer-check"><input class="answer-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="answer-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
//             questionsPage.append('<div class="answer-check"><input class="answer-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="answer-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
//             questionsPage.append('<div class="answer-check"><input class="answer-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="answer-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer4 + '</label></div>');