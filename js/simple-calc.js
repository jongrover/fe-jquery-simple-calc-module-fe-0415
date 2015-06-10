$(function () {

  var num1         =  0,
	    num2         =  0,
	    answer       =  0,
      operation    =  '+',
      $num1Incr    =  $('#number1 button:eq(0)'),
      $num1Decr    =  $('#number1 button:eq(1)'),
      $num1Display =  $('#number1 h2'),
      $num2Incr    =  $('#number2 button:eq(0)'),
      $num2Decr    =  $('#number2 button:eq(1)'),
      $num2Display =  $('#number2 h2'),
      $add         =  $('#add'),
      $sub         =  $('#sub'),
      $mult        =  $('#mult'),
      $div         =  $('#div'),
      $operation   =  $('#operation'),
      $equals      =  $('#equals'),
      $result      =  $('#result');

  function print(sel, value) {
    sel.text(value);
  }

	$num1Incr.click(function () {
		num1 += 1;
		print($num1Display, num1);
  });

  $num1Decr.click(function () {
    if (num1 > 0) {
		  num1 -= 1;
		  print($num1Display, num1);
    }
  });

  $num2Incr.click(function () {
  	num2 += 1;
  	print($num2Display, num2);
  });

  $num2Decr.click(function () {
  	if (num2 > 0) {
  		num2 -= 1;
  		print($num2Display, num2);
  	}
  });


  $add.click(function () {
    operation = '+';
  	print($operation, operation);
  });

  $sub.click(function () {
    operation = '-';
    print($operation, operation);
  });

  $mult.click(function () {
    operation = '*';
    print($operation, operation);
  });

  $div.click(function () {
    operation = '/';
    print($operation, operation);
  });

  $equals.click(function () {
    if (operation === "+") { 
    	answer = num1 + num2; 
    	print($result, answer); 
    }   
    else if (operation === "-") { 
    	answer = num1 - num2; 
    	print($result, answer); 
    }
    else if (operation === "*") { 
    	answer = num1 * num2; 
    	print($result, answer); 
    }
    else if (operation === "/") { 
    	answer = num1 / num2; 
    	print($result, answer);
    }
  }); 

});