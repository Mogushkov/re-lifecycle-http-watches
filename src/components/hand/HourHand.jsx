import PropTypes from 'prop-types';

function HourHand({ h, min }) {
    return (
        <div className="hour">
             <div className="hr" style={{transform: `rotateZ(${h * 30 + (min * 6 / 12)}deg)`}}></div>
        </div>
    )
}

HourHand.propTypes ={
    h: PropTypes.number,
    min: PropTypes.number
}

export default HourHand