const reduceDiv = document.getElementById("reduce-examples");

// Find sum of all elements
const rArr = [2,8,6,1,0]
const sumOfAllElements = rArr.reduce(function (acc, curr){
    acc += curr
    return acc; 
},0);
createUIElements(`Array 1 - [${rArr}]`, `Example 1 - Sum of all elements --> ${sumOfAllElements}`,reduceDiv)


// Session Exercise - Reduce array to return max score
const languages3 = [
    {
      name: "English",
      score: 3
    },
    {
      name: "French",
      score: 1
    },
    {
      name: "Spanish",
      score: 2
    },
    {
      name: "Japanese",
      score: 4
    },
    {
      name: "Hindi",
      score: 3
    }
  ];
const maxScore = languages3.reduce(function(acc,curr){
    acc = (curr.score > acc) ? curr.score : acc
    return acc;
},0)
createUIElements(`Array 2 - ${JSON.stringify(languages3)}`, `Example 2 - Maximum score --> ${maxScore}`,reduceDiv)



