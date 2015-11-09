import React, { PropTypes, Component } from 'react'


class Panel extends Component {
    render() {
        return (
            <div className="score-panel">
                 <div className="item">score: { this.props.score }</div>
                 <div className="item">speed: { this.props.speed }</div>
            </div>
        )
    }
}

Panel.propTypes = {
    score: PropTypes.number.isRequired
}

export default Panel