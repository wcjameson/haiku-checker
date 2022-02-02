/* eslint-disable no-undef */
import Haiku from "../src/haiku";

describe('Haiku', () => {

  test('should create a haiku object with three sentences', () => {
    const haiku = new Haiku("line one", "line two", "line three");
    expect(haiku.line1).toEqual("line one");
    expect(haiku.line2).toEqual("line two");
    expect(haiku.line3).toEqual("line three");
    
  });

});