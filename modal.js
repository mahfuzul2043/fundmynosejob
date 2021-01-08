var modal, btn, span;

function getOS() {
  const userAgent = navigator.userAgent;
  if(/android/i.test(userAgent)){
      return 'android';
  }
  if(/iPad|iPhone|iPod/i.test(userAgent)){
      return 'ios';
  }
}

window.onload = function() {
    // Get the modal
    modal = document.getElementById("modal");

    // Get the button that opens the modal
    btn = document.querySelector(".venmo-btn");

    // Get the <span> element that closes the modal
    span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "flex";
        modal.style.alignItems = 'center';
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    switch (getOS()) {
      case 'android':
        document.querySelector('.venmo-link').setAttribute('href', 'intent://venmo.com/marjana-begum#Intent;package=com.venmo;scheme=https;end');
        break;
      case 'ios':
        document.querySelector('.venmo-link').setAttribute('href', 'venmo://users/36709575');
        break;
      default:
        document.querySelector('.venmo-link').setAttribute('href', 'https://venmo.com/marjana-begum');
        document.querySelector('.venmo-link').setAttribute('target', '_blank');
        break;
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}