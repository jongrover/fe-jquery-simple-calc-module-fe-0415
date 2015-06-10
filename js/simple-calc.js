$(function(){

	var counterOne = 0;
	var counterTwo = 0;
	var answer = 0;
	


	// COUNTER 1
	$('#number1 button:eq(0)').click(function() {

		counterOne += 1;
		$('#number1 h2').text(counterOne);

    });

    $('#number1 button:eq(1)').click(function() {
    	if (counterOne > 0) {
		counterOne -= 1;
		$('#number1 h2').text(counterOne);

	}

    });

    // COUNTER 2

    $('#number2 button:eq(0)').click(function() {
    	counterTwo += 1;
    	$('#number2 h2').text(counterTwo);




    });

    $('#number2 button:eq(1)').click(function(){
    	if (counterTwo > 0) {
    		counterTwo -= 1;
    		$('#number2 h2').text(counterTwo);



    	}



    });


    $('#add').click(function(){
    	$('#operation').text('+');



    });

     $('#sub').click(function(){
    	$('#operation').text('-');



    });

      $('#mult').click(function(){
    	$('#operation').text('*');



     });

       $('#div').click(function(){
    	$('#operation').text('/');



    });

    //   OPTION FOR RESULT USING SWITCH STATEMENT 
  // $('#equals').click(function(){  
    // switch(operation) {
    //   case '+': answer = counterOne + counterTwo; $('#result').text(answer); break;
    //   case '-': answer = counterOne - counterTwo; $('#result').text(answer); break;
    //   case '*': answer = counterOne * counterTwo; $('#result').text(answer); break;
    //   case '/': answer = counterOne / counterTwo; $('#result').text(answer); break;
    //   default : answer = NaN; $('#result').text(answer);
    // }
    // });
  
    //  OPTION FOR RESULT USING IF ELSE STATEMENT

  $('#equals').click(function(){  
  if (operation = "+") { // calculate based on the operator

        	answer = counterOne + counterTwo;// get the sum from counters 1 and 2 
        	$('#result').text(answer);//display the result
        }   

        else  (operation = "-") { // calculate based on the operator

        	answer = counterOne - counterTwo;// get the sum from counters 1 and 2 
        	$('#result').text(answer);//display the result

         else  (operation = "*") { // calculate based on the operator

        	answer = counterOne * counterTwo;// get the sum from counters 1 and 2 
        	$('#result').text(answer);//display the result
        	
         else  (operation = "/") { // calculate based on the operator

        	answer = counterOne / counterTwo;// get the sum from counters 1 and 2 
        	$('#result').text(answer);//display the result		



       

});
       




    






      




    


  // write your solution here.

});