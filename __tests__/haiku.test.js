/* eslint-disable no-undef */
import Haiku from "../src/haiku";

describe('Haiku', () => {

  test('should create a haiku object with three sentences', () => {
    const haiku = new Haiku("line one", "line two", "line three");
    expect(haiku.line1).toEqual("line one");
    expect(haiku.line2).toEqual("line two");
    expect(haiku.line3).toEqual("line three");
  });

  test('should find and return the number of syllables in the first string', () => {
    const haiku = new Haiku("line one", "line two", "line three");
    expect(haiku.stringSyllableCount1()).toEqual(2);
    
  });

  test('should find and return the number of syllables in the second string', () => {
    const haiku = new Haiku("line one", "line two", "line three");
    expect(haiku.stringSyllableCount2()).toEqual(3);
  });

  test('should find and return the number of syllables in the third string', () => {
    const haiku = new Haiku("line one", "line two", "line three");
    expect(haiku.stringSyllableCount3()).toEqual(3);
  });

  test('should find and return number of syllables in first string regardless of case', () => {
    const haiku = new Haiku("LINE ONe", "LIne TwO", "LINE Three");
    expect(haiku.stringSyllableCount1()).toEqual(4);
  });

  test('should find and return number of syllables in second string regardless of case', () => {
    const haiku = new Haiku("LINE ONe", "LIne TwO", "LINE Three");
    expect(haiku.stringSyllableCount2()).toEqual(3);
  });

  test('should find and return number of syllables in third string regardless of case', () => {
    const haiku = new Haiku("LINE ONe", "LIne TwO", "LINE Three");
    expect(haiku.stringSyllableCount3()).toEqual(3);
  });

  // test('should find and return number of syllables, making exceptions for es || ed at end of word', () => {
  //   const haiku = new Haiku("Does that worked", "Maybe it works",  "Hoped it works");
  //   expect(haiku.syllableCountLine1()).toEqual(3);
  // });
  
});