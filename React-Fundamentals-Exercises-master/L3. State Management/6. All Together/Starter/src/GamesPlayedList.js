import PropTypes from "prop-types"
import GamesPlayedListItem from "./GamesPlayedListItem";
import { useState } from "react";

const GamesPlayedList = ({userList}) => {

    const [showGamesPlayed, setShowGamesPlayed] = useState(true);

    const userPlayedGamesList = userList.length === 0 ? <li>No user added</li> : userList.map((user,index) => {
        return <GamesPlayedListItem key={index} userNameValue={user.get("userName")} gamesPlayedCount={showGamesPlayed ? user.get("score") : "*"} />
    })

    const toggleShowGamesState = () => {
        setShowGamesPlayed(!showGamesPlayed)
    }

    const toggleButton = (
        <button onClick={() => toggleShowGamesState()}>{showGamesPlayed ? `Hide Scores` : `Show Scores`}</button>
    )

    return <div>
        {userList.length === 0 ? "" : toggleButton}
        <ul>{userPlayedGamesList}</ul>
        </div>
}

GamesPlayedList.propTypes = {
    userList: PropTypes.array.isRequired
}

export default GamesPlayedList;