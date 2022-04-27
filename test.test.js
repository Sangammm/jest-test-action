import * as FileOne from "./fileOne";
import * as FileTwo from "./fileTwo";


describe('Testing new Grid Config File', () => {
  test('testing one', () => {
    expect(FileOne.One).toEqual(FileTwo.One);
  })
  test('testing two', () => {
    expect(FileOne.Two).toEqual(FileTwo.Two);
  })
})