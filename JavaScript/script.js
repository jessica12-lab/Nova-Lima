function time(){
  today = new Date();
  d = today.getDate();
  m = today.getMonth();
  y = today.getFullYear();
document.getElementById("date").innerHTML = d+":"+m+":"+y;
setTimeout("date()")
}