import PropTypes from "prop-types"
 
const GamesPlayedListItem = ({userNameValue, gamesPlayedCount}) => {
    return <li>{`Number of games played by ${userNameValue} : ${gamesPlayedCount}`}</li>
}

GamesPlayedListItem.propTypes = {
    userNameValue: PropTypes.string.isRequired,
}

export default GamesPlayedListItem;