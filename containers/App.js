import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Panel from '../components/Panel'
import Keyboard from '../components/Keyboard'
import * as KeyboardActions from '../actions/keyboard'

class App extends Component {

    render() {
        const { status, score, actions, speed, typingNum } = this.props
        return (
            <div  className="App">
                <Panel score={score} speed={speed} />
                <Keyboard status={status} actions={actions} typingNum={typingNum} />
            </div>
        )
    }
}


App.propTypes = {
    status: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        status: state.keyboard.status,
        score: state.keyboard.score,
        speed: state.keyboard.speed,
        typingNum: state.keyboard.typingNum
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(KeyboardActions, dispatch)
    }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App)


