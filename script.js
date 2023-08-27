// question 1
    function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
// alert(counter());//output:alert 1
// alert(counter());//output:alert 2
// alert(counter());//output:alert 3
// alert(counter());//output:alert 4


//output:1,2,3,4
//as counter function is closure as it returns function of IncreaseCounter function code and it is stored in counter variable
//after calling counter variable after counter increment 0 to 1 after calling counter variable 4 times as  it will increase counter upto 4 times 
//it will alert the value of counter one by one


// question 2
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged? output :1
  }
  console.log(count); // What is logged? output:0
})();

//output:1 and 0
// as global variable of count is intialized 0 and self calling the function is will check is count is zero or not
//if it is zero then local variable count is intialized to 1 and print the count variable 1 after this global variable of count is printed 0;

// question 3
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }

//output:3 3 3
//reson:The for Loop initializes a variable i to 0.The Loop checks if i is Less than 3. 
//If it is, the Loop executes the code inside it. 
//The code inside the Loop calls the setTimeout() function,which schedules a callback function to be executed, after second. 
//The callback function Logs the current value of i.

//The Loop increments by 1. The Loop repeats the previous steps until i is equal to 3.

//when the setTimeout() functions are executed, they all Log the value 3, 
//because has a global scope and its value 3 by the time the functions are executed

//question 4    
function outer(length){
  function inner(breadth){
    console.log(length*breadth);
  }
  return inner;
}
outercall=outer(5);
result=outercall(3);
//ouput:15
//reason: we passed length as 5 and breadth as 3 result is 15


//question 5

function outerfun(){
  let counter=0;
  function innerfun(){
    counter++;
    console.log(counter);
  }
  
  return innerfun;
}
let innercount=outerfun();
innercount();
innercount();
innercount();

//output details:counter variable is incremented when the function is called


//question 6

var a = 12;
(function () {
  // alert(a);
})();
//output:pop up alert box with the value of 12

// question 7
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    // alert(a);
  };
})();
x();
//output: when the function is called it self it will return code of inner function 
//after execting that pop up alert box with the value of 12



// question 8
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n"    +
        "globalVar = " + globalVar);
    
    })(456);
})(123);    
/*output outerArg = 123
        innerArg = 456
        outerVar = a
        innerVar =  b 
        globalVar =xyz
        */
// output details:
/*firtly outer function is excuted by passing argument with 456 as value of outerArg=456 after calling again with  passing a value 123 as value of innerArg=123
*/