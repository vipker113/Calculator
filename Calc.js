

function cong() {
    let Number1 = parseInt(document.getElementById("a").value);
    let Number2 = parseInt(document.getElementById("b").value);
    let kq = Number1 + Number2
    console.log(kq);
    document.getElementById("Kq").innerHTML = kq
}
function tru() {
    let Number1 = parseInt(document.getElementById("a").value);
    let Number2 = parseInt(document.getElementById("b").value);
    let kq = Number1 - Number2
    console.log(kq);
    document.getElementById("Kq").innerHTML = kq
}
function nhan() {
    let Number1 = parseInt(document.getElementById("a").value);
    let Number2 = parseInt(document.getElementById("b").value);
    let kq = Number1 * Number2
    console.log(kq);
    document.getElementById("Kq").innerHTML = kq
}
function chia() {
    let Number1 = parseInt(document.getElementById("a").value);
    let Number2 = parseInt(document.getElementById("b").value);
    let kq = Number1 / Number2
    console.log(kq);
    document.getElementById("Kq").innerHTML = kq
}
