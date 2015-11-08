import React, { PropTypes, Component } from 'react'


class Panel extends Component {
    render() {
        return (
            <div>我是{ this.props.score }</div>
        )
    }
}

Panel.propTypes = {
    score: PropTypes.number.isRequired
}

export default Panel