





//hide all questions
$(document).ready (function() {
//hide all questions
    $('.questionForm').hide();
//show first question 
    $('#q1').show();

    $('#q1 #submit').click (function() {
        //$('.questionForm').hide();
        process('q1');
        //$('#q2').fadeIn(300);
    return false;
});
$('#q2 #submit').click (function() { 
      process('q2');
      return false;
});

$('#q3 #submit').click (function() {
    process('q3');
    return false;
});

$('#q4 #submit').click (function() {
   process('q4');
    return false;
});
$('#q5 #submit').click (function() {
    process('q5');
   return false;
});

});
//process answer
function process(q){
    if(q == "q1"){
        var submitted = $('input[name=q1]:checked').val();
        
        $('.q1info').text(submitted);
        $('.next').show();

    }
    else if(q == "q2"){
        var submitted = $('input[name=q2]:checked').val();
        
        $('.q2info').text(submitted);
        $('.next').show();

        
    }
    else if(q == "q3"){
        var submitted = $('input[name=q3]:checked').val();
        
            $('.q3info').text(submitted);
            $('.next').show();
        
    }
    else if(q == "q4"){
        var submitted = $('input[name=q3]:checked').val();
        

            $('.q4info').text(submitted);
            $('.next').show();
        
    }
    else if(q == "q5"){
        var submitted = $('input[name=q5]:checked').val();
        
            $('.q5info').text(submitted);
            $('.next').show();
       

       
    }
    return false;
}

$('.next').click(function(e) {
    e.preventDefault();
    let questionNum = parseInt($(this).attr('data-q'));
    $(`#q${questionNum}`).hide();
    $(`#q${questionNum+1}`).show();

})


//add event listener
window.addEventListener('load' , init , false);

//console.log();
