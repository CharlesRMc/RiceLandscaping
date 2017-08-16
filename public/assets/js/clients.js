var db = firebase.database();
$('#addClientBtn').on('click', function (e) {
    e.preventDefault();
    var client = {
        name: $('#fullName').val().trim(),
        addressLineOne: $('#addressLineOne').val().trim(),
        addressLineTwo: $('#addressLineTwo').val().trim(),
        city: $('#city').val().trim(),
        state: $('#state').val().trim(),
        zip: parseInt($('#zip').val().trim()),
        phone: $('#phone').val().trim(),
        frequency: $('#frequency').val().trim()
    };
    db.ref('/clients').push(client);
    //console.log(client);
    $('#fullName').val('');
    $('#addressLineOne').val('');
    $('#addressLineTwo').val('');
    $('#city').val('');
    $('#state').val('');
    $('#zip').val('');
    $('#phone').val('');
    $('#frequency').val('');

});