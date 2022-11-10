const filterDiv = document.getElementById("filter-examples");
const fArr = [3,7,1,6,8,2,0,5]

// Odd
const oddArray = fArr.filter((element) => element%2 !== 0)


// Session Exercise - Filter languages array object where score >= 3
const languages2 = [
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
const score3Array = languages2.filter((item) => item.score >= 3);

// Workspace exercise - filter name length < 6
const names2 = ["Karen", "Richard", "Tyler"];
const shortNames = names2.filter((name) => name.length < 6);

// Workspace exercise - filter album objects with 10 <= album's name length <= 25
const musicData2 = [
  { artist: 'Adele', name: '25', sales: 1731000 },
  { artist: 'Drake', name: 'Views', sales: 1608000 },
  { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
  { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
  { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
  { artist: 'Original Broadway Cast Recording', 
    name: 'Hamilton: An American Musical', sales: 820000 },
  { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
  { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
  { artist: 'Rihanna', name: 'Anti', sales: 603000 },
  { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];
const filterMusicData = musicData2.filter(item => item.name.length >= 10 && item.name.length <= 25)

const fe1 = document.createElement('h4')
fe1.innerText = `Array 1 - [${fArr}]`
filterDiv.append(fe1);

const fe2 = document.createElement('p')
fe2.innerText = `Example 1 - Filter all odd elements --> [${oddArray}]`
filterDiv.append(fe2);

const fe3 = document.createElement('h4')
fe3.innerText = `Array 2 - ${JSON.stringify(languages2)}`
filterDiv.append(fe3);

const fe4 = document.createElement('p')
fe4.innerText = `Example 2 - languages array object where score >= 3 --> ${JSON.stringify(score3Array)}`
filterDiv.append(fe4);

const fe5 = document.createElement('h4')
fe5.innerText = `Array 3 - [${names2}]`
filterDiv.append(fe5);

const fe6 = document.createElement('p')
fe6.innerText = `Example 3 - Filter name length < 6 --> [${shortNames}]`
filterDiv.append(fe6);

const fe7 = document.createElement('h4')
fe7.innerText = `Array 4 - ${JSON.stringify(musicData2)}`
filterDiv.append(fe7);

const fe8 = document.createElement('p')
fe8.innerText = `Example 4 - album objects with 10 <= album's name length <= 25 --> ${JSON.stringify(filterMusicData)}`
filterDiv.append(fe8);



