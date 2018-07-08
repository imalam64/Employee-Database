 $('document').ready(function(){
 // Initialize Firebase
     var config = {
         apiKey: "////",
         authDomain: "ucla-bootcamp-test.firebaseapp.com",
         databaseURL: "https://ucla-bootcamp-test.firebaseio.com",
         projectId: "ucla-bootcamp-test",
         storageBucket: "ucla-bootcamp-test.appspot.com",
         messagingSenderId: "///"
     };
firebase.initializeApp(config);

var database = firebase.database();

var name = '';
var role = '';
var startDate = '';
var payRate = '';
var timeWorked = '';
var totalBilled = '';

$('#submit').on('click', function(event){

event.preventDefault();
var name = $('#name-input').val().trim();
var role = $('#role-input').val().trim();
var startDate = $('#date-input').val().trim();
var payRate = $('#rate-input').val().trim();
var a = moment();

var timeWorked = a.diff(moment(startDate, 'YYYY-MM-DD'),'months');
totalBilled = timeWorked * payRate;

database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    payRate: payRate,
    timeWorked: timeWorked,
    totalBilled: totalBilled
});

database.ref().on("value", function(snapshot) {

    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().role);
    console.log(snapshot.val().startDate);
    console.log(snapshot.val().payRate);
    console.log(snapshot.val().timeWorked);
    console.log(snapshot.val().totalBilled);

    // Change the HTML to reflect
    var name = $('<td>');
    var role = $('<td>');
    var startDate = $('<td>');
    var timeWorked = $('<td>');
    var payRate = $('<td>');
    var totalBilled = $('<td>');

    name = snapshot.val().name;
    role = snapshot.val().role;
    startDate = snapshot.val().startDate;
    timeWorked = snapshot.val().timeWorked;
    payRate = snapshot.val().payRate;
    totalBilled = snapshot.val().totalBilled;

    $("#data-row").append(name, role, startDate, timeWorked, payRate, totalBilled);

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
});
});