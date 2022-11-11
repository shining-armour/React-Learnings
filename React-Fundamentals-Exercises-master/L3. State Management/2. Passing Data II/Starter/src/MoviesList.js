import UserList from "./UserList";

const MoviesList = ({moviesList, currentMovieUsers, usersList}) => {
    
    const movieItem = Object.keys(moviesList).map((movieID)=>{
        return (
          <li key={movieID}>
            <h2>{moviesList[movieID].name}</h2>
            <UserList currentMovieUsers={currentMovieUsers[movieID]} usersList={usersList}/>
          </li>
        );
      })

   return <ul>{movieItem}</ul>   
}

export default MoviesList;