function calculateLitres() {
    alert(1);
    var canSize = document.getElementById('txtCanSize').value;
    var numberOfCans = document.getElementById('txtNoOfCans').value;
    var numberOfLitres = document.getElementById('txtNoOfLitres');
    var result = canSize * numberOfCans;
    numberOfLitres.value = result;
}

function totalPrice() {
    var canPrice = document.getElementById('txtPrice').value;
    var numberOfCans = document.getElementById('txtNoOfCans').value;
    var totalPrice1 = document.getElementById('txtTotalPrice');
    var result = canPrice * numberOfCans;
    totalPrice1.value = result;
}

function supllier() {
    var location = document.getElementById('selectLocation').value;
    if(location === "Depot")
    {
        document.getElementById('selectSupplier').disabled = true;
    }
}

