import PropTypes from 'prop-types';

function SecondHand({ sec }) {
    return (
        <div className="sec">
            <div className="sc" style={{transform: `rotateZ(${sec * 6}deg)`}}></div>
        </div>
    )
}

SecondHand.propTypes ={
    sec: PropTypes.number
}

export default SecondHand