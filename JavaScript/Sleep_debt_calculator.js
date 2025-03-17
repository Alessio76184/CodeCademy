const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;

    case "tuesday":
      return 8;

    case "wednesday":
      return 8;

    case "thursday":
      return 8;

    case "friday":
      return 8;

    case "saturday":
      return 8;

    case "sunday":
      return 8;

    default:
      console.log("Invalid Day, again");
  }
};

// Using the array to hold all days of the week
// .reduce used to loop through all cases and sum via the "total" setting it first to zero
// uses implicit returns so no return needed
const getActualSleepHours = () =>
  [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ].reduce((total, day) => total + getSleepHours(day), 0);

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  // Place the ideal hours per night
  const idealSleepHours = getIdealSleepHours(9);

  const sleepDebt = actualSleepHours - idealSleepHours;

  if (sleepDebt === 0) {
    console.log(
      `Congratulations! You got the perfect amount of sleep! (${sleepDebt} hours)`
    );
  } else if (sleepDebt > 0) {
    console.log(
      `You are getting more than enough sleep! (${sleepDebt} hours over your ideal amount)`
    );
  } else {
    console.log(
      `You need to sleep more, do not waste time and go now! You are ${Math.abs(
        sleepDebt
      )} hours under your ideal sleep.`
    );
  }
};

calculateSleepDebt();
