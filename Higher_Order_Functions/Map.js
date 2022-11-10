const mapDiv = document.getElementById("map-examples");

const mArr = [1,2,3,4,5,6]
const doubleArray = mArr.map((element) => element*2)

// Calculate age from birth year
const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = birthYear.map(year => 2022 - year);

// Session Exercise - create only languages name array
const languages = [
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
const onlyLang = languages.map((item) => item.name);

// Workscape exercise - return length of each name
const names = ["Karen", "Richard", "Tyler"];
const nameLengths = names.map((name) => name.length);

// Workscape exercise - return musicData with each item as "<album-name> by <artist> sold <sales> copies"
const musicData = [
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
const musicArray = musicData.map((item) => `${item.name} by ${item.artist} sold ${item.sales} copies`)



const me1 = document.createElement('h4')
me1.innerText = `Array 1 - [${mArr}]`
mapDiv.append(me1);

const me2 = document.createElement('p')
me2.innerText = `Example 1 - Double all elements --> [${doubleArray}]`
mapDiv.append(me2);

const me4 = document.createElement('h4')
me4.innerText = `Array 2 - [${birthYear}]`
mapDiv.append(me4);

const me5 = document.createElement('p')
me5.innerText = `Example 2 - Ages from Birth year --> [${ages}]`
mapDiv.append(me5);

const me6 = document.createElement('h4')
me6.innerText = `Array 3 - ${JSON.stringify(languages)}`
mapDiv.append(me6);

const me7 = document.createElement('p')
me7.innerText = `Example 3 - only languages name array --> [${onlyLang}]`
mapDiv.append(me7);

const me8 = document.createElement('h4')
me8.innerText = `Array 4 - [${names}]`
mapDiv.append(me8);

const me9 = document.createElement('p')
me9.innerText = `Example 4 - length of each name --> [${nameLengths}]`
mapDiv.append(me9);

const me10 = document.createElement('h4')
me10.innerText = `Array 5 - ${JSON.stringify(musicData)}`
mapDiv.append(me10);

const me11 = document.createElement('p')
me11.innerText = `Example 5 - each item as "<album-name> by <artist> sold <sales> copies" --> [${musicArray}]`
mapDiv.append(me11);




