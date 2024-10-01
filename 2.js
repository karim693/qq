const msgdiv = document.getElementById("msgd")
const msginput = document.getElementById("msgi")


function send(){
    var msg2 = msginput.value
    localStorage.setItem("msg2",msg2)
    alert(`msg sent is : ${msg2}`)
}

function getmsg(){
    var msg2 = localStorage.getItem("msg2")
    msgdiv.innerHTML = msg2
}

setInterval(getmsg,1000)