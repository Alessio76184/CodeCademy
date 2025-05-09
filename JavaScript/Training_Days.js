const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return "Marathon";
    case 1:
      return "Triathlon";
    case 2:
      return "Pentathlon";
  }
};

// The scope of `days` is too tight
const getTrainingDays = (event) => {
  let days = 0;
  if (event === "Marathon") {
    days = 50;
  } else if (event === "Triathlon") {
    days = 100;
  } else if (event === "Pentathlon") {
    days = 200;
  }
  return days;
};

// The scope of `name` is too tight
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};
// The scope of `random` is too loose

const name = "Nala";
const event = getRandEvent();
const days = getTrainingDays(event);
logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = "Warren";
logEvent(name2, event2);
logTime(name2, days2);
