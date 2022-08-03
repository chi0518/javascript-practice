const pushBtn = document.querySelector('#btn');
const pushTable = document.querySelector('#pushTable');
let today = new Date();   

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let day = today.getDay();  // 요일

pushBtn.addEventListener("click", function() {
  let textInput = document.querySelector('#text').value;
  
   pushTable.innerHTML +=
  `<tr>
    <td><span class="list-title">${textInput}</span><span class="input-date">입력날짜: ${year + '/' + month + '/' + date}</span><span class="check-date" ></span></td>
    <td class="inputCheck" onclick="listCheck();"><input type="checkbox"></td>
  </tr>`;

});

let inputCheck = document.querySelector('.inputCheck');

function listCheck() {
    let checkDate = document.querySelector('.check-date');
    checkDate.innerHTML += `체크날짜: ${year + '/' + month + '/' + date}`;
}