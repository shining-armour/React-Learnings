import "./App.css";
import logo from "./logo.svg";
import MoviesList from "./MoviesList";
import UserList from "./UserList";
// Display a list of movies where each movie contains a list of users that favorited it.
// For detailed instructions, refer to Instructions.md.

const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1",
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1",
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5",
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2",
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5",
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4",
  },
];

const users = {
  1: {
    id: 1,
    name: "Jane Cruz",
    userName: "coder",
  },
  2: {
    id: 2,
    name: "Matthew Johnson",
    userName: "mpage",
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123",
  },
  4: {
    id: 4,
    name: "John Doe",
    userName: "user123",
  },
  5: {
    id: 5,
    name: "Lauren Carlson",
    userName: "user123",
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123",
  },
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth 1",
  },
  2: {
    id: 2,
    name: "Selma",
  },
  3: {
    id: 3,
    name: "Million Dollar Baby",
  },
  4: {
    id: 4,
    name: "Forrest Gump",
  },
  5: {
    id: 5,
    name: "Get Out",
  },
};

const App = () => {

  let userIDsForMovieIDs = {};

  // creating a map in format -  { movieID :  [userID, userID,...] , ...}
  profiles.map((profile) => {
      // if movie id key already exists - add current user id to list
      if(userIDsForMovieIDs[profile.favoriteMovieID]){
        userIDsForMovieIDs[profile.favoriteMovieID].push(profile.userID)
      } else // create movie id key and for value, create a list of length 1 with current user id
      {
        userIDsForMovieIDs[profile.favoriteMovieID] = [profile.userID]
      }
  });

  console.log(userIDsForMovieIDs)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <h2>How Popular is Your Favorite Movie?</h2>
      {/*
      Naive Approach
       <ul>
        {
          Object.keys(movies).map((movieID)=>{
            return (
              <li key={movieID}>
                <h2>{movies[movieID].name}</h2>
                {
                userIDsForMovieIDs[movieID] ? 
                <div>
                <p>Liked by:</p>
                <ul>{
                  userIDsForMovieIDs[movieID].map((userID) => {                  
                    return <li key={userID}>{users[userID].name}</li>
                  })
                  }</ul>
                  </div> : <p>Nobody liked it</p>}
                </li>
            );
          })
        }
      </ul> */}
      <MoviesList moviesList={movies} usersList={users} currentMovieUsers={userIDsForMovieIDs}/>
    </div>
  );
};

export default App;
