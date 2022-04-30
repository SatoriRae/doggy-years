// DOGGY-YEARS

//STEP 1. CREATE A VARIABLE NAMED myAge, AND SET IT EQUAL TO YOUR AGE AS A NUMBER. WRITE A COMMENT THAT EXPLAINS THIS LINE OF CODE 

let myAge = 41;
console.log(myAge);
//--> The value of the variable myAge is 41.  


//STEP 2. CREATE A VARIABLE NAMED earlyYears AND SAVE 2 TO IT. REMINDER, THE VALUE SAVED TO THIS VARIABLE WILL CHANGE.  WRITE A COMMENT THAT EXPLAINS THIS LINE OF CODE.

let earlyYears = 2; 
console.log(earlyYears);

//--> Here we create a variable to represent the first 2 years of life. This is important because the first two years of a dog's life account for a different span of dog years than the years following. 

//STEP 3. USE THE MULTIPLICATION OPERATOR TO MULTIPLY THE VALUE SAVED TO earlyYears BY 10.5 AND REASSIGN IT TO earlyYears. 

earlyYears *= 10.5;
//earlyYears = (earlyYears * 10.5);
console.log(earlyYears);

//--> This is taking the first two years of life and converting them to the higher span of dog years (10.5 years for 1 human year). In this case we are reassigning earlyYears to a new value which describes the length of the first 2 years in dog years. console.log(earlyYears) = 21.

//STEP 4. SINCE WE ALREADY ACCOUNTED FOR THE FIRST TWO YEARS, TAKE THE myAge VARIABLE AND SUBTRACT 2 FROM IT. SET THE RESULT EQUAL TO A VARIABLE CALLED laterYears. WE'LL BE CHANGING THIS VALUE LATER.  WRITE A COMMENT THAT EXPLAINS THIS LINE OF CODE.

laterYears = (myAge - 2); 
console.log(laterYears);

//--> To account for the years of life after the first two years we subtract 2 years from the current age of the person. Those years must be seperated and accounted for differently because the dog years equivalent accrues at a different rate than the first 2 years. console.log(laterYears) =  39.


//STEP 5. MULTIPLY THE laterYears VARIABLE BY 4 TO CALCULATE THE NUMBER OF DOG YEARS ACCOUNTED FOR BY YOUR LATER YEARS. USE THE MULTIPLICATION ASSIGNMENT OPERATOR TO MULTIPLY AND ASSIGN IN ONE STEP.  WRITE A COMMENT THAT EXPLAINS THIS LINE OF CODE.

laterYears *= 4;
//laterYears = (laterYears * 4);
console.log(laterYears);

//--> Here we take the laterYears that is saved in variable laterYears and use the multiplication assignment operator to convert those years to dog years. In this case, every one human year is equivalent to 4 dog years.  As a result of this operation we reassign laterYears with a value that now represents those years as dog years. console.log(laterYears) = 156

//STEP 6. IF YOU'D LIKE TO CHECK YOUR WORK AT THIS POINT... CONSOLE LOG earlyYears and laterYears. ARE THE VALUES WHAT YOU EXPECTED?  

//--> Yes, I was checking this along the way to make sure that the earlyYears and laterYears values were correct. 

//STEP 7. ADD earlyYears AND laterYears TOGETHER AND STORE THAT IN A VARIABLE NAMED myAgeInDogYears.  WRITE A COMMENT THAT EXPLAINS THIS LINE OF CODE. 

myAgeInDogYears = (earlyYears + laterYears)
console.log(myAgeInDogYears);

//--> Both earlyYears and laterYears are human years transformed into dog years. Ther first two at a conversion rate of 10.5 dog years per year and the remainder at 4 dog years per year. By adding the two variables together we get the combined years in dog years. So, my human years, 41 are equivalent to 177 dog years. That's basically two dog lifetimes. console.log(myAgeInDogYears) = 177

//STEP 8. LETS USE A STRING METHOD NEXT. WRITE YOUR NAME AS A STRING, CALL ITS BUILT-IN METHOD .toLowerCase()  AND STORE THE RESULT IN A VARIABLE CALLED myName. THE toLowerCase() method returns a string with all lowercase letters.  WRITE A COMMENT THAT EXPLAINS THIS LINE OF CODE.

let myName = "SATORI".toLowerCase ();
console.log(myName);

//--> Changed myName to satori in lower case. 


//STEP 9. WRITE A console.log STATEMENT THAT DISPLAYS YOUR NAME AND AGE IN DOG YEARS. USE STRING INTERPOLATION TO DISPLAY THE VALUE IN THE FOLLOWING SENTENCE. ` My name is NAME/ ${myName}. I am AGE/ ${myAge} years old in human years. Which is AGE IN DOG YEARS/ ${myAgeInDogYears} years old in dog years.

console.log(`My name is ${myName}. I am ${myAge} years old in human years. Which is ${myAgeInDogYears} years old in dog years.`)

//-->I used string interpolation to insert the value of myName, myAge, and myAgeInDogYears into a sting ` My name is ${myName}. I am ${myAge} years old in human years. Which in ${myAgeInDogYears} years old in dog years.` by surrounding the sting in backticks and adding $ followed by {} around the  variables which produced sentence that included all of the pertinent information. Then I used console.log to print this sentence to the console.  
//console.log(` My name is satori. I am 41 years old in human years. Which is 177 years old in dog years. `)


//STEP 10. GREAT WORK! YOU CAN CONVERT ANY HUMAN AGE TO DOG YEARS. TRY CHANGING myAge AND SEE WHAT HAPPENS. IF YOU'D LIKE EXTRA PRACTICE, TRY WRITING THIS PROJECT WITHOUT THE *= OPERATOR. 

//-->  I have a dog named Maddy, I think I've owned him about 8 years and he was probably around 5 years old when I got him... let's see how old that makes him in dog years. 

let dogAge = 13;
console.log(dogAge);

let eYears = 2; 
console.log(eYears);

eYears = (eYears * 10.5);
console.log(eYears);

lYears = (dogAge - 2); 
console.log(lYears);

lYears = (lYears * 4);
console.log(lYears);

ageInDogYears = (eYears + lYears)
console.log(ageInDogYears);

let dogName = "MISTER MADDY".toLocaleLowerCase ();
console.log(dogName);

console.log(`My name is ${dogName}. I am ${dogAge} years old in human years. Which is ${ageInDogYears} years old in dog years.`)

//-->  console.log My name is mister maddy. I am 13 years old in human years. Which is 65 years old in dog years. I'm getting to be an old pup but I'm not going to let that slow me down. 

//STEP 11.  SUBMIT PROJECT 
