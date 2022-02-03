export default class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    // let syllables = 0;
    // let wordArray = [""];
  }

  // wordArray.forEach(function(words) {
  // let wordArray = words.split("");
  // wordArray.forEach(function(char){
  //   if(char == 'A', char == 'E', char == 'I', char == 'o', char == 'u'){
  //     syllables++;
  //   }
  // });

  vowelCountLine1(str) {
    str = this.line1; 
    let syllableCount1 = str.match(/[aeiouy]{1,2}/g).length;
    return syllableCount1;
    // const count = str.match(/[aeiou]/gi).length;
    // return count;
    // syllableCount = 0;
    // newArray = str.split(" ");
    // newArray.forEach(function(element) {
    // if (element.length <= 3) {
    //   syllableCount ++;
    // }
    // return syllableCount;
  }
  
  
  vowelCountLine2(str) {
    str = this.line2;
    const count = str.match(/[aeiou]/gi).length;
    return count;
  }

  vowelCountLine3(str) {
    str = this.line3;
    const count = str.match(/[aeiou]/gi).length;
    return count;
  }

}
