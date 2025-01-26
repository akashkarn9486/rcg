// CREATED A FUNCTION TO HAVE RANDOM CHOICE 
let pickRandomChoice = () => {
  const choicesInput = document.getElementById("choices");
  const resultElement = document.getElementById("result");

  //TOOK INPUT AND SPLITTED THEM INTO A ARRAY
  let userChoices = choicesInput.value.split(",").map((choice) => choice.trim());

  // DEFINED A LIBRARY OF 15 FRUITS
  const libraryChoices = [
    "Apple", "Banana", "Cherry", "Date", "Elderberry", "Apricot","Avocado","Blueberry","Blackcurrant","Cranberry"
    ,"Coconut","Grape","Kiwi","Zucchini","Lychee"
  ];

  // CHECKED IF DATA IS INPUTTED BY THE USER 
  if (userChoices.length === 0 || (userChoices.length === 1 && userChoices[0] === "")) {
    // GENERATED A RANDOM INDEX FROM LIBRARY
    const randomIndex = Math.floor(Math.random() * libraryChoices.length);
    // DISPLAYED THE RANDOM CHOICE FROM LIBRARY
    const randomChoice = libraryChoices[randomIndex];
    resultElement.textContent = `Random Choice: ${randomChoice}`;
  } else {
    // GENERATED A RANDOM INDEX FOR DATA INPUTTED 
    const randomIndex = Math.floor(Math.random() * userChoices.length);
    // DISPLAYED THE RANDOM CHOICE INPUTTED BY USER 
    const randomChoice = userChoices[randomIndex];
    resultElement.textContent = `Random Choice: ${randomChoice}`;
  }
};

const pickButton = document.getElementById("pickButton");

// ADDED AN EVENT
pickButton.addEventListener("click", pickRandomChoice);