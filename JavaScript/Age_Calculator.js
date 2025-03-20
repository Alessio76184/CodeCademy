const howOld = (age, year) => {
  const currentYear = new Date().getFullYear(); // Get the current year
  const birthYear = currentYear - age; // Calculate birth year

  if (year > currentYear) {
    return `You will be ${age + (year - currentYear)} in the year ${year}`;
  } else if (year < birthYear) {
    return `The year ${year} was ${
      birthYear - year
    } years before you were born`;
  } else {
    return `You were ${year - birthYear} in the year ${year}`;
  }
};

// Test cases:
console.log(howOld(25, 2030)); // "You will be 30 in the year 2030"
console.log(howOld(25, 1990)); // "The year 1990 was 10 years before you were born"
console.log(howOld(25, 2015)); // "You were 15 in the year 2015"
