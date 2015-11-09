import React, { PropTypes, Component } from 'react'


class Panel extends Component {
    render() {
        return (
            <div>
                 <div>score: { this.props.score }</div>
                 <div>speed: { this.props.speed }</div>
            </div>
        )
    }
}

Panel.propTypes = {
    score: PropTypes.number.isRequired
}

export default Panel