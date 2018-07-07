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

     database.ref().on("value", function(snapshot) {

         // Print the initial data to the console.
         console.log(snapshot.val());

         // Change the HTML

         // If any errors are experienced, log them to console.
     }, function(errorObject) {
         console.log("The read failed: " + errorObject.code);
     });
});