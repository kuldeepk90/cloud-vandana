document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;


    const popupContent = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    document.getElementById('popupValues').innerHTML = popupContent;
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('surveyForm').reset();
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('surveyForm').reset();  
}
