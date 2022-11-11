const filterDiv = document.getElementById("filter-examples");

// Filter odd numbers
const fArr = [3,7,1,6,8,2,0,5]
const oddArray = fArr.filter((element) => element%2 !== 0)
createUIElements(`Array 1 - [${fArr}]`, `Example 1 - Filter all odd elements --> [${oddArray}]`, filterDiv)


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
createUIElements(`Array 2 - ${JSON.stringify(languages2)}`, `Example 2 - languages array object where score >= 3 --> ${JSON.stringify(score3Array)}`, filterDiv)


// Workspace exercise - filter name length < 6
const names2 = ["Karen", "Richard", "Tyler"];
const shortNames = names2.filter((name) => name.length < 6);
createUIElements(`Array 3 - [${names2}]`, `Example 3 - Filter name length < 6 --> [${shortNames}]`,filterDiv)


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
createUIElements(`Array 4 - ${JSON.stringify(musicData2)}`, `Example 4 - album objects with 10 <= album's name length <= 25 --> ${JSON.stringify(filterMusicData)}`,filterDiv)



