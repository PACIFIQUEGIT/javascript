document.getElementById("Country").addEventListener("change", myfunction);
function myfunction() {
    const country = document.getElementById("Country").value;
    if (country != "") {
        document.getElementById("Province").style.display = "block";
    } 
}
document.getElementById("Province").addEventListener("change", myfunction1);
function myfunction1() {
    const province = document.getElementById("Province").value;
    if (province != "") {
        document.getElementById("District").style.display = "block";
    } 
}
document.getElementById("District").addEventListener("change", myfunction2);
function myfunction2() {
    const district = document.getElementById("District").value;
    if (district != "") {
        document.getElementById("Sector").style.display = "block";
    }
}
document.getElementById("Sector").addEventListener("change", myfunction3);
function myfunction3() {
    const sector = document.getElementById("Sector").value;
    if (sector != "") {
        document.getElementById("Cell").style.display = "block";
    }
}
document.getElementById("Cell").addEventListener("change", myfunction4);
function myfunction4() {
    const cell = document.getElementById("Cell").value;
    if (cell != "") {
        document.getElementById("btn").style.display = "block";
    }
}
