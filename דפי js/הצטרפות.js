let allu
//בנאי המקבל פרטי משתמש ויוצר ממנו אוביקט -משתמש
function createuser(name, id, mail, pas, emoot) {
    this.name = name
    this.id = id
    this.pas = pas
    this.mail = mail
    this.emoot = emoot
    this.score = 0
}



//במקרה והמשתמש אינו מוכר במערכת
//שומר את פרטיו במחסנית הדפדפן
function join1() {
    event.preventDefault()
    let hid1 = true
    let hid2 = true
   
        var hasLetter = /[a-zA-Z]/.test(document.getElementById('tz').value)
    if( hasLetter){
            document.getElementById('tz').style.backgroundColor = "red"
            hid1 = false}
      

    let t = JSON.stringify(document.getElementById('shem').value)
    for (let i = 0; i < t.length; i++) {
        if (t[i] >= 0 && t[i] <= 9) {
            document.getElementById('shem').style.backgroundColor = "red"
            hid1 = false
        }
    }

        if ((document.getElementById('em').value) != (document.getElementById('sis').value))
        document.getElementById('em').style.backgroundColor = 'red'
        else if (hid1 == true ) {
        let p1 = new createuser(document.getElementById('shem').value, document.getElementById('tz').value, document.getElementById('doal').value, document.getElementById('sis').value, document.getElementById('em').value)
        if (localStorage.getItem('arrusers') == null) {
            allu = []
        }
        else
            allu = JSON.parse(localStorage.getItem('arrusers'))
        allu.push(p1)
        localStorage.setItem(('sco' + p1.id), 0)
        localStorage.setItem('arrusers', JSON.stringify(allu))

        localStorage.setItem('score', 0)
       
        window.location = "../דפי html/color.html"

    }
}