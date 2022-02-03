export default class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }
  
  syllableCount(word) {
    word = word.toLowerCase();
    if (word.length <= 3) { return 1; }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    let sylCount = word.match(/[aeiouy]{1,2}/g).length;
    // if(sylCount)
    
    return sylCount.length;
  }
  
  
  stringSyllableCount1(string) {
    string = this.line1;
    let wordArray = string.split(" ");
    let numberOfSyllables = 0;
    wordArray.forEach(function(element) {
      numberOfSyllables += syllableCount(element);
    });
    return numberOfSyllables;
  }

  stringSyllableCount2(string) {
    let wordArray = string.split(" ");
    let numberOfSyllables = 0;
    wordArray.forEach(function(element) {
      numberOfSyllables += syllableCount(element);
    });
    return numberOfSyllables;
  }

  stringSyllableCount3(string) {
    let wordArray = string.split(" ");
    let numberOfSyllables = 0;
    wordArray.forEach(function(element) {
      numberOfSyllables += syllableCount(element);
    });
    return numberOfSyllables;
  }

  
  // syllableCountLine2(str) {
  //   str = this.line2;
  //   str = str.toLowerCase(); 
  //   const syllableCount2 = str.match(/[aeiouy]{1,2}/g).length;
  //   return syllableCount2;
  // }

  // syllableCountLine3(str) {
  //   str = this.line3;
  //   str = str.toLowerCase(); 
  //   const syllableCount3 = str.match(/[aeiouy]{1,2}/g).length;
  //   return syllableCount3;
  // }

}