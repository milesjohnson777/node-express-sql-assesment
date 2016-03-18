$(document).ready(function(){
    initListeners();
});


function initListeners(){
    $('#suggestion').on('click', function(event){
        event.preventDefault();
        var animalArray = $('#newAnimal').serializeArray();
        var animalObj = animalArray[0];
        console.log('animal from form entry:', animalObj.value);
        sendAnimalSuggestionDb(animalObj);
    });
}

function sendAnimalSuggestionDb(creature){
    $.ajax({
        type: 'POST',
        url: '/animal',
        data: creature,
        success: function(data){
            appendDom(data);
        }
    });
}

function appendDom(amount){
    $('.animalList').append('<p>Animal: ' + '<q>' + animalObj.value + '</q></p>');
    $('.animalList').append('<p>We liked your suggestion so much we\'ve decided to add '+ amount +
                            ' to our Zoo!</p>');
}
