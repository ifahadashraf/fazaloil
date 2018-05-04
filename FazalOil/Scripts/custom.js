function supllier() {
    var location = document.getElementById('selectLocation').value;
    if(location === "Depot")
    {
        document.getElementById('selectSupplier').disabled = true;
    }
    else
    {
        document.getElementById('selectSupplier').disabled = false;
    }
}

function calculateLitres() {
    var canSize = document.getElementById('txtCanSize').value;
    var numberOfCans = document.getElementById('txtNoOfCans').value;
    var numberOfLitres = document.getElementById('txtNoOfLitres');
    var result = canSize * numberOfCans;
    numberOfLitres.value = result;
}

function categories() {
    var category = document.getElementById('selectCategory').value;
    if(category === "Oil")
    {
        document.getElementById('txtQuantity').disabled = true;
        document.getElementById('txtCanSize').disabled = false;
        document.getElementById('txtNoOfCans').disabled = false;
    }
    else
    {
        document.getElementById('txtQuantity').disabled = false;
        document.getElementById('txtCanSize').disabled = true;
        document.getElementById('txtNoOfCans').disabled = true;
    }
}
    
function totalPrice() {
    var category = document.getElementById('selectCategory').value;
    var canPrice = document.getElementById('txtPrice').value;
    var numberOfCans = document.getElementById('txtNoOfCans').value;
    var quantity = document.getElementById('txtQuantity').value;
    var totalPrice1 = document.getElementById('txtTotalPrice');
    
    if(category === "Oil")
    {
        var result = canPrice * numberOfCans;
        totalPrice1.value = result;
    }
    else
    {
        var result = canPrice * quantity;
        totalPrice1.value = result;
    }
}
