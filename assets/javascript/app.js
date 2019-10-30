$(document).ready(function() {

var timerNumber;
var rightAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;


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

//START FUNCTION
$("#start-button").on("click", function() {

    //hides start button after click
    $("#start-button").hide();

    // display time Count
    $("timer").html("<h2>Time: 5 minutes</h2>" + "<br>");



})


})