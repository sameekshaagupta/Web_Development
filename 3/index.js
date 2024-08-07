function resetForm() {
    document.getElementById('phone').value = '';
    document.getElementById('size').selectedIndex = 0;
    document.getElementById('sausage').checked = false;
    document.getElementById('onion').checked = false;
    document.getElementById('greenpepper').checked = false;
    document.getElementById('delivery').checked = false;
    document.getElementById('carryout').checked = false;
}

function submitForm() {
    var phone = document.getElementById('phone').value;
    var size = document.getElementById('size').value;
    var toppings = [];
    if (document.getElementById('sausage').checked) toppings.push('Sausage');
    if (document.getElementById('onion').checked) toppings.push('Onion');
    if (document.getElementById('greenpepper').checked) toppings.push('Green pepper');
    var deliveryMethod = document.querySelector('input[name="delivery"]:checked');

    if (!phone || !deliveryMethod) {
        alert("Please fill out all required fields.");
        return false;
    }

    var orderSummary = "<h3>Your Order Summary:</h3>" +
                       "<p>Phone Number: " + phone + "</p>" +
                       "<p>Pizza Size: " + size + "</p>" +
                       "<p>Toppings: " + (toppings.length > 0 ? toppings.join(', ') : "None") + "</p>" +
                       "<p>Delivery Method: " + deliveryMethod.value + "</p>";

    document.getElementById('orderSummary').innerHTML = orderSummary;

    return false;  
}