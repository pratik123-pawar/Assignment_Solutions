function submitForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;
    var gender = getSelectedGender();
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var popupContent = `First Name: ${firstName}<br>`;
    popupContent += `Last Name: ${lastName}<br>`;
    popupContent += `Date of Birth: ${dob}<br>`;
    popupContent += `Country: ${country}<br>`;
    popupContent += `Gender: ${gender}<br>`;
    popupContent += `Profession: ${profession}<br>`;
    popupContent += `Email: ${email}<br>`;
    popupContent += `Mobile Number: ${mobile}<br>`;

    document.getElementById('popupContent').innerHTML = popupContent;
    document.getElementById('popup').style.display = 'flex';
    resetForm();
}

function getSelectedGender() {
    var genderInputs = document.querySelectorAll('input[name="gender"]');
    var selectedGender = [];
    for (var i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            selectedGender.push(genderInputs[i].value);
        }
    }
    return selectedGender.join(', ');
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});