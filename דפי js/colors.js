//פונקציה השומרת את בחירות צבעי החיילים 

function colorsol(){
    
    event.preventDefault()
    
    sessionStorage.setItem('colors',JSON.stringify(document.getElementById('col').value))
    sessionStorage.setItem('colorpc',JSON.stringify(document.getElementById('colpc').value))
    if((sessionStorage.getItem("colors"))==(sessionStorage.getItem("colorpc")))
        alert("שים לב אם חיליך וחילי המחשב ישארו בצבע זהה אתה עשוי להתבלבל ביניהם...")
        else{
    window.location = '../דפי html/דף הבית.html'}
}




