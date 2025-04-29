//יצירת אפשרות לכניסה למשחקים
//היחיד המאופשר הוא שפן הרודף אחרי גזר בשורה השלישית השני מימין
function gamespic(){
    let syso=sessionStorage.getItem('nname')
   let piska= document.createElement('p')
   piska.id='pis'
   piska.innerText='שלום ל'+syso+" היקר/ה!!  "
   document.body.appendChild(piska)
   let piska2=document.createElement('p')
   piska2.innerText="המשחקים שלנו:)"
   piska2.id="pis2"
   document.body.appendChild(piska2)
    let d=document.createElement('div')
    d.id="div1"
    document.getElementById('bob')
    
     document.body.appendChild(d)
    for(let i=1;i<13;i++){
        let img=document.createElement('img')
        img.src='../תמונות/'+i+'.webp'
        img.className='pics'
        document.getElementById('div1').appendChild(img)
        img.addEventListener('click',opengame.bind(null,i))
    }
   let button= document.createElement('button')

 
}
//בעת בחירת משחק ----
function opengame(i){
    window.location='../דפי html/game'+i+'.html'
}
