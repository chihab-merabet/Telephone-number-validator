document.getElementById('check-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const userInput = document.getElementById('user-input').value;

    if (!userInput) {
        alert("Please provide a phone number");
        return; // Exit the function early
    }

    // Regular expression for valid US phone numbers
    const validPhoneNumberPattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

    if (validPhoneNumberPattern.test(userInput)) {
        document.getElementById('results-div').innerHTML = `Valid US number: ${userInput}`;
    } else {
        document.getElementById('results-div').innerHTML = `Invalid US number: ${userInput}`;
    }
});

document.getElementById('clear-btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('results-div').innerHTML = '';
});
