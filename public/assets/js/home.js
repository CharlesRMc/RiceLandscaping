var db = firebase.database();

db.ref('/clients').on('child_added', function (client) {
    var clientInfo = client.toJSON();
   var clientCard = $('<div>').addClass('small-12 medium-4 cell card').attr('data-key',client.key);
   var clientName = $('<h2>' + clientInfo.name + '</h2>');
   var clientPhone = $('<h4>' + clientInfo.phone + '</h4>');

   clientCard.append(clientName)
    .append(clientPhone);

    $('#clientOverview').append(clientCard);
});