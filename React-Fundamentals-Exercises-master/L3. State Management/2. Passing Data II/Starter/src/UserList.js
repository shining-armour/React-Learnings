import LikedUserList from "./LikedUserList";

const UserList = ({currentMovieUsers, usersList}) => {

    // currentMovieUsers = [1,2] or [5] or [6] or [4,3] or udefined
    if(!currentMovieUsers) {
        return <p>Nobody liked it</p> ;
    }

    const likedUserNamesList = currentMovieUsers.map((userID) => {                  
        return <li key={userID}>{usersList[userID].name}</li>;
      });

    return <LikedUserList likedUserNamesList={likedUserNamesList}/>;
}

export default UserList;