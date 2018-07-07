 $('document').ready(function(){
 // Initialize Firebase
     var config = {
         apiKey: "AIzaSyBORDUaB6LmFQBmz5qvrx0vIZk_uYk0Bfo",
         authDomain: "ucla-bootcamp-test.firebaseapp.com",
         databaseURL: "https://ucla-bootcamp-test.firebaseio.com",
         projectId: "ucla-bootcamp-test",
         storageBucket: "ucla-bootcamp-test.appspot.com",
         messagingSenderId: "883043883216"
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


timeWorked = ''; //startDate - dateStamp and convert to months
totalBilled = timeWorked * payRate;

    database.ref().set({
        name: name,
        role: role,
        startDate: startDate,
        payRate : payRate,
        timeWorked : timeWorked,
        total : totalBilled
    });
    

});

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
    /* $("#name-display").text(snapshot.val().name);
    $("#email-display").text(snapshot.val().email);
    $("#age-display").text(snapshot.val().age);
    $("#comment-display").text(snapshot.val().comment); */

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
});