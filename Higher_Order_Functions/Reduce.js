const reduceDiv = document.getElementById("reduce-examples");
const rArr = [2,8,6,1,0]

const sumOfAllElements = rArr.reduce(function (acc, curr){
    acc += curr
    return acc; 
},0);

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

const re1 = document.createElement('h3')
re1.innerText = `Array 1 - [${rArr}]`
reduceDiv.append(re1);

const re2 = document.createElement('p')
re2.innerText = `Example 1 - Sum of all elements --> ${sumOfAllElements}`
reduceDiv.append(re2);

const re3 = document.createElement('h4')
re3.innerText = `Array 2 - ${JSON.stringify(languages3)}`
reduceDiv.append(re3);

const re4 = document.createElement('p')
re4.innerText = `Example 2 - Maximum score --> ${maxScore}`
reduceDiv.append(re4);


