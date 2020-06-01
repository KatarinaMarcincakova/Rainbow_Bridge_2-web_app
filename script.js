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
    
}

// *************************************** NEXT PREV BUTTON **********************

var foodN = 0;

function next() {
    for (i = 0; i < numOfFood; i++) {
        $('.dictCont').eq(i).removeClass('shown');
        $('.dictCont').eq(i).addClass('hidden');
    }

    foodN = foodN + 1;
    if (foodN == numOfFood) {
        foodN = 0;
    }
    $('.dictCont').eq(foodN).removeClass('hidden');
    $('.dictCont').eq(foodN).addClass('shown');
}

function prev() {
    for (i = 0; i < numOfFood; i++) {
        $('.dictCont').eq(i).removeClass('shown');
        $('.dictCont').eq(i).addClass('hidden');
    }

    foodN = foodN - 1;
    if (foodN == -1) {
        foodN = numOfFood - 1;
    }
    $('.dictCont').eq(foodN).removeClass('hidden');
    $('.dictCont').eq(foodN).addClass('shown');
}

// ******************************************************* PLAY AUDIO **************

var listOfAudio = ['audio/carrots.mp3', 'audio/cheese.mp3', 'audio/water.mp3', 'audio/crisps.mp3', 'audio/cakes.mp3', 'audio/sandwiches.mp3', 'audio/grapes.mp3', 'audio/orange_juice.mp3'];

function playAudio(num) {

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', listOfAudio[num]);
    audioElement.play();
}