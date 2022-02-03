export default class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  syllableCountLine1(str) {
    str = this.line1;
    str = str.toLowerCase(); 
    let syllableCount1 = str.match(/[aeiouy]{1,2}/g).length;
    return syllableCount1;
  }
  
  syllableCountLine2(str) {
    str = this.line2;
    str = str.toLowerCase(); 
    const syllableCount2 = str.match(/[aeiou]{1,2}/g).length;
    return syllableCount2;
  }

  syllableCountLine3(str) {
    str = this.line3;
    str = str.toLowerCase(); 
    const syllableCount3 = str.match(/[aeiou]{1,2}/g).length;
    return syllableCount3;
  }

}
