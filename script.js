// *********************************************** SET UP *****************************

var ptC = ['.titleScreen', '.food', '.foodDict', '.foodQuiz'];
var numOfPt = 5;
var numOfFood = 8;

for (i = 0; i < numOfPt; i++){
	$(ptC[i]).addClass('hidden');
}
$(ptC[0]).removeClass('hidden');
$(ptC[0]).addClass('shown');


for (i = 0; i < numOfFood; i++) {
    $('.dictCont').eq(i).removeClass('shown');
    $('.dictCont').eq(i).addClass('hidden');
}
for (i = 0; i < numOfFood; i++) {
    $('.quizCont').eq(i).removeClass('shown');
    $('.quizCont').eq(i).addClass('hidden');
}

// ******************************************* OPEN PART *****************************

function openPart(part) {
    for (i = 0; i < numOfPt; i++){
		$(ptC[i]).removeClass('shown');
		$(ptC[i]).addClass('hidden');
    }
    $(ptC[part]).removeClass('hidden');
    $(ptC[part]).addClass('shown');

    if (part == 2) {
        $('.dictCont').eq(0).removeClass('hidden');
        $('.dictCont').eq(0).addClass('shown');
    }

    if (part == 3) {
        $('.quizCont').eq(0).removeClass('hidden');
        $('.quizCont').eq(0).addClass('shown');
    }
    
}

// *************************************** NEXT PREV BUTTON **********************

var slideN = 0;
var listOfNp = ['.dictCont', '.quizCont']

function next(num) {
    for (i = 0; i < numOfFood; i++) {
        $(listOfNp[num]).eq(i).removeClass('shown');
        $(listOfNp[num]).eq(i).addClass('hidden');
    }

    if (num == 0) {
        slideN = slideN + 1;
        if (slideN == numOfFood) {
            slideN = 0;
        }
    } 

    if (num == 1) {
        slideN = Math.floor(Math.random() * (numOfFood))
        for (i = 0; i < numOfFood * 2; i++) {
            $('.quizBtn').eq(i).css("background-color", "transparent");
            $('.quizBtn').eq(i).css("color", "#d7dce6");
        }
    }

    $(listOfNp[num]).eq(slideN).removeClass('hidden');
    $(listOfNp[num]).eq(slideN).addClass('shown');
}

function prev(num) {
    for (i = 0; i < numOfFood; i++) {
        $(listOfNp[num]).eq(i).removeClass('shown');
        $(listOfNp[num]).eq(i).addClass('hidden');
    }

    if (num == 0) {
        slideN = slideN - 1;
        if (slideN == numOfFood) {
            slideN = 0;
        }
    } 

    if (num == 1) {
        slideN = Math.floor(Math.random() * (numOfFood))
        for (i = 0; i < numOfFood * 2; i++) {
            $('.quizBtn').eq(i).css("background-color", "transparent");
            $('.quizBtn').eq(i).css("color", "#d7dce6");
        }
    }

    $(listOfNp[num]).eq(slideN).removeClass('hidden');
    $(listOfNp[num]).eq(slideN).addClass('shown');
}

// ******************************************************* PLAY AUDIO **************

var listOfAudio = ['audio/carrots.mp3', 'audio/cheese.mp3', 'audio/water.mp3', 'audio/crisps.mp3', 'audio/cakes.mp3', 'audio/sandwiches.mp3', 'audio/grapes.mp3', 'audio/orange_juice.mp3'];

function playAudio(num) {

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', listOfAudio[num]);
    audioElement.play();
}


// ******************************************************* QUIZ ANSWER ************

function quizAns(value, num) {
    if ((value % 11) == 0) {
        $('.quizBtn').eq(num).css("background-color", "#99ff66");
        $('.quizBtn').eq(num).css("color", "#1c4676");
    } else {
        $('.quizBtn').eq(num).css("background-color", "#ff5050");
    }
}