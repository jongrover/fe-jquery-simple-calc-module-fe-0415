// Model

function Calc() {
  this.view = new CalcView(this);
  this.view.init();
}
Calc.prototype.num1 = 0;
Calc.prototype.num2 = 0;
Calc.prototype.operation = '+';

// View

function CalcView(model) {
  this.model = model;
}
CalcView.prototype.el = {
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
CalcView.prototype.printVal = function(sel, value) {
  sel.text(value);
};
CalcView.prototype.init = function () {

  var self = this;

  this.el.$num1Incr.click(function () {
    self.model.num1 += 1;
    self.printVal(self.el.$num1Display, self.model.num1);
  });

  this.el.$num1Decr.click(function () {
    if (self.model.num1 > 0) {
      self.model.num1 -= 1;
      self.printVal(self.el.$num1Display, self.model.num1);
    }
  });

  this.el.$num2Incr.click(function () {
    self.model.num2 += 1;
    self.printVal(self.el.$num2Display, self.model.num2);
  });

  this.el.$num2Decr.click(function () {
    if (self.model.num2 > 0) {
      self.model.num2 -= 1;
      self.printVal(self.el.$num2Display, self.model.num2);
    }
  });

  this.el.$add.click(function () {
    self.model.operation = '+';
    self.printVal(self.el.$operation, self.model.operation);
  });

  this.el.$sub.click(function () {
    self.model.operation = '-';
    self.printVal(self.el.$operation, self.model.operation);
  });

  this.el.$mult.click(function () {
    self.model.operation = '*';
    self.printVal(self.el.$operation, self.model.operation);
  });

  this.el.$div.click(function () {
    self.model.operation = '/';
    self.printVal(self.el.$operation, self.model.operation);
  });

  this.el.$equals.click(function () {
    if (self.model.operation === "+") { 
      self.printVal(self.el.$result, self.model.num1 + self.model.num2); 
    }   
    else if (self.model.operation === "-") { 
      self.printVal(self.el.$result, self.model.num1 - self.model.num2); 
    }
    else if (self.model.operation === "*") { 
      self.printVal(self.el.$result, self.model.num1 * self.model.num2); 
    }
    else if (self.model.operation === "/") { 
      self.printVal(self.el.$result, self.model.num1 / self.model.num2);
    }
  }); 
}

// Initialize

$(function () {
  var calc = new Calc();
});