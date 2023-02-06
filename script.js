const my_btns = document.querySelectorAll(".btn_values");
const display = document.querySelector(".display");
const operators = document.querySelectorAll(".operator");



let selected_op = "";
let calc_result = 0;
let first_num = 0;
let following_num = 0; 
let current_display = "";





// operators.forEach(ops => ops.addEventListener("mousedown", function() {
//     ops.style.backgroundColor = 'red';
// }));

// operators.forEach(ops => ops.addEventListener("mouseup", function() {
//     ops.style.backgroundColor = 'yellow';

// }));

my_btns.forEach(myBtn => myBtn.addEventListener("click", function () {
 
    current_display += myBtn.textContent;
    display.value = current_display;


}));



operators.forEach(ops => ops.addEventListener('click', function() {
   
    if (display.value != '0') {
        first_num = display.value; 
        console.log('first number stored',first_num);
    }
    
    if(ops.textContent === "+") {
        selected_op = "+";
    };

    // console.log(first_num);
    console.log(`Selected Operator is: ${selected_op}`);
    display.value = "0";
    
   
    
}))





// my_btns.forEach((myBtn) => myBtn.addEventListener('click', function () {
//     console.log(myBtn.innerHTML);
// }))

// my_btns.forEach(myBtn => {
//     myBtn.addEventListener('click', () => {
//         console.log(myBtn.textContent);
//     })
// })

// alert(1);


// for (var i = 0; i <= my_btns.length - 1; i++) {
//     my_btns[i].addEventListener("click", function () {
//         console.log(my_btns[i].innerHTML);
//     })
//     // console.log(my_btns[i].innerHTML)
// }

