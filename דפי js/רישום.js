let allu

function test() {
    event.preventDefault()
    //שומר זמנית את שם השחקן ואת תעודת זהותו ע"מ להשתמש בהם במהלך המשחק
    sessionStorage.setItem('tzz', document.getElementById('tz').value)
    sessionStorage.setItem("nname",document.getElementById('n').value)
    let c = 0
    if (localStorage.getItem('arrusers') != null) {
    allu = JSON.parse(localStorage.getItem('arrusers'))
    //עובר על מערך האובייקטים
    for (let i = 0; i < allu.length; i++) {
        //אם כבר קיים לו התעודת זהות הנוכחית
        if (allu[i].id == document.getElementById('tz').value) {
            c++
            //בודק את תקינות הסיסמא ,במקרה של שגיאה מגדיש
            if (allu[i].pas != document.getElementById('p').value) {
                document.getElementById('p').style.backgroundColor = 'red'
            }
            //במקרה והכל תקין שולח את המשתמש לבחירת צבעי החיילים
            else {
                window.location = "../דפי html/color.html"
            }
        }

    }}
//במקרה ולא מצא את תעודת הזהות הנוכחית שולח להצטרפות
    if (c == 0) {
        alert(" משתמש חדש")
        window.location = "../דפי html/הצטרפות.html"

    }
    
}
