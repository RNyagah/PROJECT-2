const akanNameCalculator = (CC, YY, MM, DD, gender) => {
const calculationResult = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
let wholeNumber = Number(calculationResult.toFixed())

const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

if (wholeNumber >= 7) {
    wholeNumber = wholeNumber - 1;
}

if (gender == 'Female') {
    return { 'name': femaleNames[wholeNumber], 'day': daysOfTheWeek[wholeNumber] };
} else {

    return { 'name': maleNames[wholeNumber], 'day': daysOfTheWeek[wholeNumber] };
}

}



const handleClick = () => {
  
    const birthDayBox = document.getElementById("birthDay")
    const birthMonthBox = document.getElementById("birthMonth")
    const birthYearBox = document.getElementById("birthYear")
    const birthGenderBox = document.getElementById("birthGender")


    const birthDay = birthDayBox.value;
    const birthMonth = birthMonthBox.value;
    const birthYear = birthYearBox.value;
    const birthGender = birthGenderBox.value;

    const allGendersArray = ("Male", "Female")
    if (allGendersArray.includes (birthGender)) {
  
    
        const centuryVar = String(birthYear).substring(0, 2) 
        const yearVar = String(birthYear).substring(2)
       console.log(centuryVar, yearVar );
       if (birthDay <= 0 || birthDay > 31) {
        alert('Please enter a valid Day')
    } else if (birthMonth <= 0 || birthMonth > 12) {
        alert('Please enter a valid month')
       
       }  else {

        const akanName = akanNameCalculator(centuryVar, yearVar, birthMonth, birthDay, birthGender);
        alert(`Your Akan name is ${akanName.name} born on ${akanName.day}`)
       }
    } else {
           alert('Please enter male or Female in the Gender box')
    }
}