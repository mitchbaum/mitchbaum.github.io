//clear form button 
document.getElementById("clearForm").addEventListener("click", myClearClickHandler);
function myClearClickHandler() {
        //reset all inputs to empty string
        document.getElementById("first-name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
      }
      
//submit alert
document.getElementById("submit").addEventListener("click", mySubmitClickHandler);
function mySubmitClickHandler () {
        var firstName = document.getElementById("first-name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var message = document.getElementById("message").value;
        if (firstName != "") {
            window.alert("Thank you for your submission. We will get back to you as soon as possible! \n\nFirst Name: " + firstName + "\nEmail: " + email + "\nPhone: " + phone +"\nMessage: " + message);
        }
}
