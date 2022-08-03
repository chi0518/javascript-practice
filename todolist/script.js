const textInput = document.querySelector('#test').value;
const pushBtn = document.querySelector('#btn');
const listTitle = document.querySelector('.list-title');
console.log(textInput);

pushBtn.addEventListener("click", function() {
  console.log(textInput);
  listTitle.innerHTML = textInput;
  // for (let i = 0 ; i< textInput.length; i++){
  //   // listTitle.innerHTML = textInput[i].value;
  //   console.log(textInput[i]);
  // }
});

// function pushList () {
//   listTitle.innerHTML = textInput.value;
// }
