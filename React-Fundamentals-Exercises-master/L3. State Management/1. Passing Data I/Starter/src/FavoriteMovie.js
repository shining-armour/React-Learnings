const FavoriteMovie = ({profilesList, usersList, moviesList}) => {

    const favouriteString = profilesList.map((profile) => {
        const userName = usersList[profile.userID].name
        const favouriteMovieName = moviesList[profile.favoriteMovieID].name
        
        return <li key={profile.id}>
            <p>{`${userName}'s favorite movie is ${favouriteMovieName}.`}</p>
            </li>
        
    });

    return <ul>{favouriteString}</ul>;
}

export default FavoriteMovie;