/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
var newID = oldID + 1000000000; 
const ageIsValid = Number.isInteger();

var randomNumber = Math.random(0,20);
var randomInteger = Math.floor(randomNumber);
var randomUserID = randomInteger


expect(Number.isInteger(randomUserID)).to.be.true;

      expect(randomUserID).to.be.at.least(1000000001).and.at.most(1000000020);
    });