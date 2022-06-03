var z;
var zr;
function s() {
    z = document.getElementById("number").value;
    zr = Math.floor(Math.random() * 100);
    document.getElementById("dz").innerHTML = z;
    document.getElementById("sz").innerHTML = zr;
    if (z == zr) {
        document.getElementById("w").innerHTML = "Win";
    }
}