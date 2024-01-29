
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  

function handleAnswer(choice) {
    if (choice === 'yes') {
        // User chose 'Yes', redirect to the confirmation page
        window.location.href = "confirmation.html";
    } else if (choice === 'no') {
        // Handle 'No' option if needed
        window.location.href = "noPage.html";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Get the 'Yes' and 'No' buttons
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');

    // Attach click event listeners to the buttons
    yesButton.addEventListener('click', function () {
        handleAnswer('yes');
    });

    noButton.addEventListener('click', function () {
        handleAnswer('no');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Delay the appearance of the second container
    setTimeout(function () {
        document.getElementById("container-1").style.visibility = "visible";
    }, 1000);

    // Delay the appearance of the third container
    setTimeout(function () {
        document.getElementById("container-2").style.visibility = "visible";
        document.getElementById("container-2").style.animation = "fadeInUp 1s ease-in-out";
    }, 3000);

    // Delay the appearance of the fourth container
    setTimeout(function () {
        document.getElementById("container-3").style.visibility = "visible";
        document.getElementById("container-3").style.animation = "fadeInUp 2s ease-in-out";
    }, 5000);
});

document.getElementById('readMoreButton').addEventListener('click', function() {
    document.getElementById('overlay').classList.add('active');
});

document.getElementById('closeOverlayButton').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('active');
});


