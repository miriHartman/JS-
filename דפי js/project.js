let divv = document.createElement('div')
divv.id = "dotef"
document.body.appendChild(divv)
let index1 = 0
let index2 = 9
let torpc = false
let numJump = 0;
let ti, tj;
let inbegin = '⤴️'


//יצירת החיילים והצגתם על המסך
//וצביעת החיילים על פי בחירת המשתמש
function arrsolider() {


    let divs = document.createElement('div')
    divs.id = 'ds'

    document.getElementById('dotef').appendChild(divs)
    let divp = document.createElement('div')
    divp.id = 'dp'
    document.getElementById('dotef').appendChild(divp)
    let p1 = document.createElement('p')
    p1.innerText = sessionStorage.getItem("nname")
    document.getElementById('ds').appendChild(p1)
    for (let i = 1; i < 5; i++) {
        let solider1 = document.createElement('img')
        solider1.src = '../תמונות/ארנב קופץ' + '.svg'
        solider1.className = 'solidplayer'
        solider1.id = "s" + i
        let cool = JSON.parse(sessionStorage.getItem('colors'))
        solider1.style.background = cool
        document.getElementById('ds').appendChild(solider1)
        document.getElementById('s' + i).addEventListener('click', moves.bind(null, i))
    }
    let p2 = document.createElement('p')
    p2.innerText = ' שחקן המחשב'
    document.getElementById('dp').appendChild(p2)
    for (let i = 5; i < 9; i++) {
        let solider2 = document.createElement('img')
        solider2.src = '../תמונות/ארנב קופץ' + '.svg'
        solider2.className = 'solidpc'
        solider2.id = "s" + i
        let coolPC = JSON.parse(sessionStorage.getItem('colorpc'))
        solider2.style.background = coolPC
        document.getElementById('dp').appendChild(solider2)




    }

}
//יצירת הלוח והגזר

function board() {

    let sp = document.createElement('span')
    sp.id = 'sspp'
    document.getElementById('dotef').appendChild(sp)
    for (let i = 0; i < 10; i++) {
        let trr = document.createElement('tr')
        trr.id = i + ","
        document.getElementById('sspp').appendChild(trr)
        for (let j = 0; j < 10; j++) {
            let thh = document.createElement('th')
            thh.id = i + "," + j
            if (i == 9 && j == 0) {
                thh.className = 'firststep'
                thh.innerText = inbegin
            }
            document.getElementById('sspp').appendChild(thh)
            let a = 9 - i
            let b = 9 - j
            if ((i < 9 / 2 && i % 2 == 0 && j <= 9 - i && j >= i) ||
                (i > 9 / 2 && i % 2 == 1 && j <= 9 - a && j > 10 - i)
                || (j > 9 / 2 && j % 2 == 1 && i <= 9 - b && i > 9 - j)
                || (j < 9 / 2 && j % 2 == 0 && i <= 10 - j && i >= j)) {
                thh.style.backgroundColor = "rgb(126, 227, 89)"
                thh.style.borderRadius = "50%"
                thh.style.width = "7.5vh"
                thh.style.height = "7.5vh"
            }

            if ((i == 4 || i == 5) && (j == 4 || j == 5)) {
                let bot = document.createElement('button')
                bot.id = 'boto' + i + j
                bot.className = 'bott'

                document.getElementById(i + "," + j).appendChild(bot)
                let carrotimg = document.createElement('img')
                carrotimg.id = 'carid'
                carrotimg.src = '../תמונות/rabbit.webp'
                document.getElementById('boto' + i + j).appendChild(carrotimg)
                document.getElementById('boto' + i + j)
                thh.style.backgroundColor = " rgb(255, 190, 68)"
                thh.style.borderRadius = "0%"
                thh.addEventListener('click', holes)

            }
        }
    }

    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName('bott')[i].disabled = true
    }
    let divc = document.createElement('div')
    divc.id = 'dc'
    document.getElementById('dotef').appendChild(divc)
    //יצירת הכפתור המיועד לפתיחת הכרטיס
    let bo = document.createElement('button')
    bo.id = "bottoncards"

    document.getElementById('dc').appendChild(bo)
    let pis = document.createElement('p')
    pis.id = "piskacard"
    bo.appendChild(pis)
    pis.innerText = 'פתח כרטיס'
    //שליחה לפונקציה המגרילה כרטיס במקרה של לחיצה על הכפתור
    bo.addEventListener('click', open1)
    document.getElementById('dc').setAttribute('data-first', 1)
}
//יצירת כרטיס (מוגרל)
function open1() {

    document.getElementById('bottoncards').disabled = true

    if (torpc == false)
        document.getElementById('tbl').hidden = true
    if (document.getElementById('dc').getAttribute('data-first') == 2) {
        document.getElementById('dc').removeChild(document.getElementById('co'))
    }
    document.getElementById('dc').setAttribute('data-first', 2)
    let copen = document.createElement('button')
    copen.id = 'co'
    document.getElementById('dc').appendChild(copen)
    let num1 = Math.floor(Math.random() * 4)
    numJump = num1
    document.getElementById('dc').setAttribute('data-num', num1)
    if (num1 > 0) {
        let image = document.createElement('img')
        image.src = '../תמונות/ארנב קופץ' + '.svg'
        image.id = 'ima'
        document.getElementById('co').appendChild(image)
        for (let i = 0; i < num1; i++) {
            let imag = document.createElement('img')
            imag.src = '../תמונות/עקבות2' + '.svg'
            imag.id = 'im'
            document.getElementById('co').appendChild(imag)
            // document.getElementById('co').innerText
        }
    }
    else {
        let carrotimg = document.createElement('img')
        carrotimg.id = 'carcard'
        carrotimg.src = '../תמונות/גזררר.svg'
        document.getElementById('co').appendChild(carrotimg)
        document.getElementsByClassName('bott').disabled = false
        changeable()
        if (torpc)
            holes()
    }


}
//בנאי לאובייקט -כרטיס
// function createcard(bigimg, num, step) {
//     this.bigimg = bigimg
//     this.num = num
//     for (let i = 0; i < num; i++) {
//         this.step = step
//         console.log(num);

//     }
// }


let ts;
//עדכון הנתנוים לחייל הנשלח
function moves(i) {


    //במקרה והחייל עוד לא במסלול
    //יוצא אל המסלול ומתעדכן בכל הנתנוים הנצרכים
    if (document.getElementById('ds').contains(document.getElementById('s' + i)) ||
        document.getElementById('dp').contains(document.getElementById('s' + i))) {


        let solonb = document.getElementById('s' + i)

        solonb.id = 's' + i
        if (numJump != 0) {
            document.getElementById('9,0').appendChild(solonb)
        }
        document.getElementById('s' + i).setAttribute('data-count', 0)
        document.getElementById('s' + i).setAttribute('data-s', i)
        document.getElementById('s' + i).setAttribute('data-i', 9)
        document.getElementById('s' + i).setAttribute('data-j', 0)

    }
    let ii = document.getElementById('s' + i).getAttribute('data-i')
    let jj = document.getElementById('s' + i).getAttribute('data-j')
    let ss = document.getElementById('s' + i).getAttribute('data-s')
    ts = ss
    ti = parseInt(ii)
    tj = parseInt(jj)
    if (torpc == true) {
        movesolider()
    }
    else {
        if (i < 5) {
            document.getElementById('s' + i).addEventListener('click', movesolider)
        }
    }


}

// יצירת חורים בעת לחיצה על הגזר
function holes() {


    for (let j = 0; j < 10; j++) {
        for (let m = 0; m < 10; m++) {
            if (document.getElementById(j + ',' + m).style.backgroundColor == 'black')
                document.getElementById(j + ',' + m).style.backgroundColor = "rgb(126, 227, 89)"
        }
    }
    for (let i = 0; i < 5; i++) {
        let holei = Math.floor(Math.random() * 10)
        let holej = Math.floor(Math.random() * 10)
        if ((i != 9 || j != 0)) {
            if (document.getElementById(holei + ',' + holej).style.backgroundColor == "rgb(126, 227, 89)") {
                document.getElementById(holei + ',' + holej).style.backgroundColor = 'black'
                //במקרה ויש חייל במקום בו נפער חור החייל נופל ויצא מהמשחק
                for (let r = 1; r < 9; r++) {
                    if ((document.getElementById(holei + ',' + holej)).contains(document.getElementById('s' + r))) {
                        let hop = document.createElement('audio')
                        hop.src = "../תמונות/נפילה.wav"
                        hop.autoplay = true
                        //יצירת אנימציה לפני נפילת החייל
                        setTimeout(() => {
                            document.getElementById('s' + r).style.backgroundColor = 'red'

                        },
                            500,

                        )
                        setTimeout(() => {
                            document.getElementById('s' + r).style.backgroundColor = 'yellow'
                        },
                            1000)
                        setTimeout(() => {
                            document.getElementById('s' + r).style.backgroundColor = 'pink'
                        },
                            1500)

                        setTimeout(() => {
                            document.getElementById(holei + ',' + holej).removeChild(document.getElementById('s' + r))
                        },
                            2000)


                    }
                }
            }

        }

    }
    //
    changeable()
    failed()
    torpc = !torpc
    if (torpc == true)
        pc()


}
//פונקציית פעולות המחשב .אוטומטית
function pc() {

    let max = 0
    let maxid = 0
    for (let k = 5; k < 9; k++) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (document.getElementById(i + "," + j).contains(document.getElementById('s' + k))) {
                    if (+(document.getElementById('s' + k).getAttribute('data-count')) > max) {
                        max = document.getElementById('s' + k).getAttribute('data-count')
                        maxid = k
                    }
                }
            }
        }
    }
    //לולאה העוברת על מערך חילי המחשב כשאין שום חייל על הלוח
    if (maxid == 0) {
        for (let k = 5; k < 9; k++) {
            if (document.getElementById('dp').contains(document.getElementById('s' + k)))
                maxid = k
        }
    }
    document.getElementById('tbl').hidden = false

    setTimeout(() => {
        open1(),
            moves(maxid)
    }, 3000)
    setTimeout(() => {
        document.getElementById('tbl').hidden = true
        document.getElementById('bottoncards').disabled = false
    }, 3000
    )

}

//הוזזת החייל על הלוח
function movesolider() {


    for (let m = 0; m < numJump; m++) {
        document.getElementById('s' + ts).setAttribute('data-count',
            +(document.getElementById('s' + ts).getAttribute('data-count')) + 1
        )
        let sss = document.getElementById("s" + ts)
        let voice = document.createElement('audio')
        voice.src = '../תמונות/צעדים.wav'
        voice.autoplay = true

        if (tj % 2 == 0 && ti > 0 && (document.getElementById((ti - 1) + ',' + tj).style.backgroundColor == "rgb(126, 227, 89)" ||
            document.getElementById((ti - 1) + ',' + tj).style.backgroundColor == 'black')) {
            ti = ti - 1
            document.getElementById(ti + ',' + tj).appendChild(sss)
            sss.id = "s" + ts
            document.getElementById('s' + ts).setAttribute('data-i', ti)

        }
        else if (ti % 2 == 0 && tj < 9 && (document.getElementById(ti + ',' + (tj + 1)).style.backgroundColor == "rgb(126, 227, 89)" ||
            document.getElementById(ti + ',' + (tj + 1)).style.backgroundColor == 'black')) {
            tj = tj + 1
            document.getElementById(ti + ',' + tj).appendChild(sss)
            sss.id = "s" + ts
            document.getElementById('s' + ts).setAttribute('data-j', tj)
        }

        else if (tj % 2 == 1 && ti < 9 && (document.getElementById((ti + 1) + ',' + tj).style.backgroundColor == "rgb(126, 227, 89)" ||
            document.getElementById((ti + 1) + ',' + tj).style.backgroundColor == 'black')) {
            ti = ti + 1
            document.getElementById(ti + ',' + tj).appendChild(sss)
            sss.id = "s" + ts
            document.getElementById('s' + ts).setAttribute('data-i', ti)
        }


        else if (ti % 2 == 1 && tj > 0 && (document.getElementById(ti + ',' + (tj - 1)).style.backgroundColor == "rgb(126, 227, 89)" ||
            document.getElementById(ti + ',' + (tj - 1)).style.backgroundColor == 'black')) {
            tj = tj - 1
            document.getElementById(ti + ',' + tj).appendChild(sss)
            sss.id = "s" + ts
            document.getElementById('s' + ts).setAttribute('data-j', tj)
        }
        //במקרה ונוחת על משבצת מחוררת -נפילה
        if (m == (numJump - 1)) {
            if (document.getElementById(ti + "," + tj).style.backgroundColor == 'black') {

                let hop = document.createElement('audio')
                hop.src = "../תמונות/נפילה.wav"
                hop.autoplay = true
                setTimeout(() => {
                    document.getElementById(ti + "," + tj).children[0].style.backgroundColor = 'red'

                },
                    500
                )
                setTimeout(() => {
                    document.getElementById(ti + "," + tj).children[0].style.backgroundColor = 'yellow'
                },
                    1000)
                setTimeout(() => {
                    document.getElementById(ti + "," + tj).children[0].style.backgroundColor = 'pink'
                },
                    1500)

                setTimeout(() => {
                    document.getElementById(ti + "," + tj).removeChild(sss)
                },
                    2000)



            }
            //במקרה ובמשבצת של הנחיתה קיים חייל צועד צעד נוסף
            if (m == (numJump - 1)) {

                if (document.getElementById(ti + ',' + tj).children.length > 1)
                    m--
            }
        }
        //שולח לבדיקה האם קיים כשלון
        failed()
        //נצחון בעת הגעה אל הגזר
        if (m == numJump - 1 && tj == 4 && ti == 6) {
            if (!torpc) {
                document.getElementById('gameo').textContent = 'you win!!'
                document.getElementById('gameo').hidden = false
                //שליחה לפונקציה המעדכנת שיאים
                sucsess()
            }
            //במקרה של נצחון למחשב 
            else {
                document.getElementById('gameo').textContent = 'try again, you can do it:)'
                document.getElementById('gameo').hidden = false
            }

            event.preventDefault()
            //פתיחת דף השיאים
            setTimeout(() => {
                window.location = '../דפי html/go.html'
            }
                , 5000)
        }


    }
    //שינוי תור שחקן
    torpc = !torpc
    if (torpc == true)
        pc()

}
//בדיקה על כל צעד האם  ארע כשלון סופי
function failed() {

    let k = 0
    let kamoot = 0
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            for (let w = 1; w < 5; w++) {
                if (document.getElementById(i + ',' + j).contains(document.getElementById('s' + w)) ||
                    document.getElementById('ds').contains(document.getElementById('s' + w))) {
                    k++
                }
            }
            for (let e = 5; e < 9; e++) {
                if (document.getElementById(i + "," + j).contains(document.getElementById('s' + e)) ||
                    document.getElementById('dp').contains(document.getElementById('s' + e))) {
                    kamoot++
                }
            }
        }
    }
    let iimg = document.createElement('img')
    iimg.src = '../תמונות/gameover.webp'
    iimg.id = 'iiimg'

    if ((k == 0 && kamoot > 0) || (k == 0 && kamoot == 0)) {
        document.getElementById('gameo').hidden = false
        // event.preventDefault()
        setTimeout(() => {
            window.location = '../דפי html/go.html'
        }
            , 5000)
    }
}
// משנה את הגזר למאופשר או  לא ע"פ מצבו
function changeable() {
    for (let i = 0; i < 4; i++) {
        if (document.getElementsByClassName('bott')[i].disabled == true) {
            document.getElementsByClassName('bott')[i].disabled = false
        }
        else
            document.getElementsByClassName('bott')[i].disabled = true
    }

}
//עדכון נצחון לשחקן הנוכחי
function sucsess() {
    let allu = []
    allu = JSON.parse(localStorage.getItem('arrusers'))
    for (let i = 0; i < allu.length; i++) {
        if (allu[i].id == sessionStorage.getItem('tzz')) {

            localStorage.setItem('sco' + sessionStorage.getItem('tzz'), +(localStorage.getItem('sco' + sessionStorage.getItem('tzz'))) + 1)
        }
    }
    if (allu.length == 1) {
        localStorage.setItem('max', localStorage.getItem('sco' + sessionStorage.getItem('tzz')))
        localStorage.setItem('winnerpl', sessionStorage.getItem("nname"))
    }
    else {
        if (localStorage.getItem('max') < localStorage.getItem('sco' + sessionStorage.getItem('tzz'))) {
            localStorage.setItem('max', localStorage.getItem('sco' + sessionStorage.getItem('tzz')))
            localStorage.setItem('winnerpl', sessionStorage.getItem("nname"))
        }
    }
}

//פתיחת דף ההוראות
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    let podot = document.createElement('p')
    podot.id = 'podo'
    podot.innerText += "     לוטי קרוטי:)             מטרת המשחק:   להגיע אל הגזר כמה שיותר מהר.       מהלך: עליך לצעוד את כמות הצעדיםםם המופיעים בכרטיס אותו פתחת.     במקרה ומופיע בכרטיס גזר - עליכם לסובב אותו.    שימו לב בזהירות!!   לא לפול בחורים!!!   בהנאה מרובה:)!!!"
    setTimeout(() => {
        document.getElementById("mySidenav").appendChild(podot)
    }, 500)
}

//סגירת דף ההוראות
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById('mySidenav').removeChild(document.getElementById('podo'))

}
