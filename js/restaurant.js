$(document).ready(function() {

$('#reserve').on('click', function() {
    console.log('reservations clicked');
    location.href="reservation.html"
})
$('#view').on('click', function() {
    console.log('view clicked');
    location.href="tables.html"
})
$('#submit').on('click', function() {
    console.log('submit clicked');
    let custName = $('#name').val().trim();
    let custEmail = $('#email').val().trim();
    let custPhone = $('#phoneNumber').val().trim();
    let customerId = $('#unique-ID').val().trim();
    console.log(`${custName} | ${custEmail} | ${custPhone} | ${customerId}`)
    $('#name').val("");
    $('#email').val("");
    $('#phoneNumber').val("");
    $('#unique-ID').val("");
})
})