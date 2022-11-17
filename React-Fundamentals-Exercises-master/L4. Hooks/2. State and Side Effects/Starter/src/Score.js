import PropTypes from "prop-types"

const Score = ({numCorrectAnswers, numQuestionsAnswered}) => {
    return <p className="text">Your Score: {numCorrectAnswers}/{numQuestionsAnswered}</p>
}

Score.propTypes = {
    numCorrectAnswers: PropTypes.number.isRequired,
    numQuestionsAnswered: PropTypes.number.isRequired
}

export default Score;