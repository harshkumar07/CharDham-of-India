function arr() {
    var a = document.getElementById("lon");
    a.textContent = "Thanks for your feedback";
    setTimeout(function(){
      a.textContent = "Thanks for your feedback";
    }, 5000);
  }
  function showNotification(message) {
    var notification = document.getElementById("notification");
    var messageSpan = document.getElementById("message");
    messageSpan.innerText = message;
    notification.classList.add("show");
    
    setTimeout(function() {
      notification.classList.remove("show");
    }, 5000); // Hide after 5 seconds
  }
  
  function closeNotification() {
    var notification = document.getElementById("notification");
    notification.classList.remove("show");
  }
  showNotification("Welcome to CharDhamWeb");
  
    
    
