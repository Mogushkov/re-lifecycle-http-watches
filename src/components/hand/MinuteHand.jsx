import PropTypes from 'prop-types';

function MinuteHand({ min }) {
    return (
        <div className="min">
            <div className="mn" style={{transform: `rotateZ(${min * 6}deg)`}}></div>
        </div>
    )
}

MinuteHand.propTypes ={
    min: PropTypes.number
}

export default MinuteHand