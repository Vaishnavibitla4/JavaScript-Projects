const dobInput = document.getElementById('dob');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', function () {
    /*const dob = new Date(dobInput.value);
    const ageInMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageInMs);
    const age = Math.abs(ageDate.getUTCFullYear()-1970);*/

    const dobInput = document.getElementById("dob");
    const dob = new Date(dobInput.value);

    if (!dobInput.value) {
    document.getElementById("result").innerText = "Please enter a valid date.";
    return;
    }

    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }


    resultDiv.innerHTML = `Your age is ${age} years`
});