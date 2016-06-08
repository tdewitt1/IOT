// My Scripts
document.getElementById('d20').onclick = function myTwenty() {
  var dTwenty = Math.floor(Math.random() * 21);
  if (dTwenty === 0) {
    dTwenty = dTwenty + 1;
  }
  document.getElementById('d20').innerHTML = dTwenty;
}

