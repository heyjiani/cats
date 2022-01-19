// asyncBreeds.js
const fs = require('fs');
const breedDetails = require('./syncBreeds');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) return callback(data);
    if (error) return callback(undefined);
  });

};

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};

// breedDetailsFromFile('Bombay', printOutCatBreed);

module.exports = breedDetailsFromFile;
