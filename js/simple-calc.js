// Module

var app = {};
app.calcModule = (function () {

  var num1 = 0,
      num2 = 0, 
      operation = '+',
      el = {
        $num1Incr    :  $('#number1 button:eq(0)'),
        $num1Decr    :  $('#number1 button:eq(1)'),
        $num1Display :  $('#number1 h2'),
        $num2Incr    :  $('#number2 button:eq(0)'),
        $num2Decr    :  $('#number2 button:eq(1)'),
        $num2Display :  $('#number2 h2'),
        $add         :  $('#add'),
        $sub         :  $('#sub'),
        $mult        :  $('#mult'),
        $div         :  $('#div'),
        $operation   :  $('#operation'),
        $equals      :  $('#equals'),
        $result      :  $('#result')
      };

  function printVal(sel, value) {
    sel.text(value);
  }

  function initialize() {

    el.$num1Incr.click(function () {
      num1 += 1;
      printVal(el.$num1Display, num1);
    });

    el.$num1Decr.click(function () {
      if (num1 > 0) {
        num1 -= 1;
        printVal(el.$num1Display, num1);
      }
    });

    el.$num2Incr.click(function () {
      num2 += 1;
      printVal(el.$num2Display, num2);
    });

    el.$num2Decr.click(function () {
      if (num2 > 0) {
        num2 -= 1;
        printVal(el.$num2Display, num2);
      }
    });

    el.$add.click(function () {
      operation = '+';
      printVal(el.$operation, operation);
    });

    el.$sub.click(function () {
      operation = '-';
      printVal(el.$operation, operation);
    });

    el.$mult.click(function () {
      operation = '*';
      printVal(el.$operation, operation);
    });

    el.$div.click(function () {
      operation = '/';
      printVal(el.$operation, operation);
    });

    el.$equals.click(function () {
      if (operation === "+") { 
        printVal(el.$result, num1 + num2); 
      }   
      else if (operation === "-") { 
        printVal(el.$result, num1 - num2); 
      }
      else if (operation === "*") { 
        printVal(el.$result, num1 * num2); 
      }
      else if (operation === "/") { 
        printVal(el.$result, num1 / num2);
      }
    }); 
  }

  return {
    init: initialize
  }
})();

// Initialize

$(function () {
  app.calcModule.init();
});