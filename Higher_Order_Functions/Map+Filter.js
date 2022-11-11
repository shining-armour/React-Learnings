const mapFilterDiv = document.getElementById("map-filter-examples");

// Workspace exercise - return names length array where all name length < 6
const names3 = ["Karen", "Richard", "Tyler"];
const shortNamesLengths = names3.filter((name) => name.length < 6).map((name) => name.length);
createUIElements(`Array 1 - [${names3}]`, `Example 1 - names length array where all name length < 6 --> [${shortNamesLengths}]`,mapFilterDiv)


// Workspace exercise - each item "<artist> is a great performer" where sales > 1,000,000
const musicData3 = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
]; 
const greatPerformerArr = musicData3.filter((album) => album.sales > 1000000).map((famousAlbum) => `${famousAlbum.artist} is a great performer`)
createUIElements(`Array 2 - ${JSON.stringify(musicData3)}`, `Example 2 - each item "<artist> is a great performer" where sales > 1,000,000 --> [${greatPerformerArr}]`,mapFilterDiv )

// Session exercise - only languages name array with score <= 2
const languages4 = [
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
const onlyLangWithLessScore = languages4.filter((item) => item.score <= 2).map((lessScoreItem) => lessScoreItem.name)
createUIElements(`Array 3 - ${JSON.stringify(languages4)}`, `Example 3 - only languages name array with score <= 2 --> [${onlyLangWithLessScore}]`, mapFilterDiv)

