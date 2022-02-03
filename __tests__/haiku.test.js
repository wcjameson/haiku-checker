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
    expect(haiku.vowelCountLine1()).toEqual(4);
    
  });

  test('should find and return the number of vowels in the second string', () => {
    const haiku = new Haiku("line one", "line two", "line three");
    expect(haiku.vowelCountLine2()).toEqual(3);
  });

  test('should find and return the number of vowels in the third string', () => {
    const haiku = new Haiku("line one", "line two", "line three");
    expect(haiku.vowelCountLine3()).toEqual(4);
  });
  
});