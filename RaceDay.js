let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
const age = 15;
// const registeredTime = true; // Uncomment and assign a value if needed

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}
// checking if the runners are 18 and registered
if (age > 18 && registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`)
} else if (age > 18 && !registeredEarly) {
  console.log('Late adults run at 11:00 am')
} else if (age < 18){
  console.log(`Youth registrants run at 12:30 pm. Your race number is ${raceNumber}.`)
} else {
  console.log('See registration desk')
}
