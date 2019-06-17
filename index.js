// Import stylesheets
import './style.css';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Bubble Sort</h1>`;

var arr = [2,15,6,7,3,4,0,15,8,9]

function sort_bubble(arr){
  var isSwapped = false;
  do{
    isSwapped = false;
    arr.forEach((num, i) => {
      if(num > arr[i+1]){
        var temp = arr[i+1];
        arr[i+1] = num;
        arr[i] = temp;
        isSwapped = true;
      }
    })
  }while(isSwapped);
  return arr;
}
console.log(sort_bubble(arr));
