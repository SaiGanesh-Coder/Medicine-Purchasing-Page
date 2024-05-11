let closePincode = document.querySelector("#close");
let sidebarLayout = document.querySelector(".sidebar-background");
let pincodeSidebar = document.querySelector(".pincode-sidebar");

closePincode.addEventListener("click", closePincodeSidebar);

document.querySelector(".pincode").addEventListener("click", function () {
    sidebarLayout.style.display = "block";
    pincodeSidebar.style.display = "block";
});

function closePincodeSidebar() {
    sidebarLayout.style.display = "none";
    pincodeSidebar.style.display = "none";
}

let pincodeForm = document.querySelector(".sidebar-background form");

pincodeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (pincodeForm.pincode.value != "") {
        console.log(pincodeForm.pincode.value);
    }
});
