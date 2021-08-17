import React from 'react';
import PropTypes from 'prop-types';
import SecondHand from '../hand/SecondHand';
import MinuteHand from '../hand/MinuteHand';
import HourHand from '../hand/HourHand';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: this.toOffsetDate(this.props.zone) };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    toOffsetDate(zone) {
        const d = new Date();
        const h = d.getUTCHours() + +zone;
        const m = d.getUTCMinutes();
        const s = d.getUTCSeconds();
        return {h, m, s};
    }

    tick() {
        this.setState({ time: this.toOffsetDate(this.props.zone) });
    }

    render() {
        return (
            <li className="clock-item">
                <div className="title">{this.props.name}</div>
                <button onClick={() => this.props.onDelete(this.props.id)}>X</button>
                <div className="clock">
                    <HourHand min={this.state.time.m} h={this.state.time.h} />
                    <MinuteHand min={this.state.time.m} />
                    <SecondHand sec={this.state.time.s} />
                </div>
            </li>
        )
    }
}

Clock.propTypes = {
    props: PropTypes.object
}

export default Clock