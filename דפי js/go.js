//הצגת נצחונות
function grade(){
      document.getElementById('b').innerText= "שחקן מוביל    "+localStorage.getItem('winnerpl')+"     "+localStorage.getItem('max')
      document.getElementById('d').innerText=" שחקן נוכחי " +sessionStorage.getItem("nname")+"     "+localStorage.getItem('sco' + sessionStorage.getItem('tzz'))
    console.log(localStorage.getItem('sco' + sessionStorage.getItem('tzz')));
   
}


