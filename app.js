$('document').ready(function(){
var name = '';
var role = '';
var startDate = '';
var payRate = '';
var timeWorked = '';
var totalBilled = '';

$('#submit').on('click', function(event){
var name = $('#name-input').val().trim();
var role = $('#role-input').val().trim();
var startDate = $('#date-input').val().trim();
var payRate = $('#rate-input').val().trim();


timeWorked = ''; //startDate - dateStamp and convert to months
totalBilled = timeWorked * payRate;

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




});
});