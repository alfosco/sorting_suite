const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')

describe("Uses bubble sort algorithm", function(){
  it("sorts array", function(){
    var unsortedArray = [1,9,2,3,12,7]
    var sortedArray = [1,2,3,7,9,12]
    var result = bubbleSort(unsortedArray);
    assert.deepEqual(result, sortedArray);
  });
});
