import React, { Component, PropTypes } from 'react'
import Word from '../components/Word'
import Board from '../components/Board'
import Words from '../words.json';

function formatText (words) {
    const count = 5;
    let textString = "";
    const len = words.length;
    for (let i = 0; i < count; i++) {
        let j = Math.floor(Math.random()*len);
        textString += words[j].word + " ";
    }
    let textArr = textString.split("")
    let result = []
    textArr.forEach((elem, index) => {
        let obj = {
            key: elem,
            typed: false,
            tf: "right"
        }
       result.push(obj)
    });
    return result;
}


class Keyboard extends Component {
    constructor(props) {
        super(props)
        this.score = 0;
        this.speed = 0;
        this.num = this.props.typingNum;
        this.redo = this.props.wrong;
        this.wrongNum = 0;
        this.typingLine = [];
    }

    componentWillMount() {
        this.typingLine = formatText(Words)
    }

    handleFocus() {
        this.props.actions.startTyping(this.num)
    }

    handleBlur() {
        this.props.actions.pause(this.score)
    }

    handleKeyPress(e) {
        let letter = this.typingLine[this.num]

        if (e.key === letter.key) {
            letter.tf = letter.typed ? "wrong" : "right";
            this.num++;
            this.props.actions.startTyping(this.num)
        } else {
            letter.tf = "wrong";
            this.wrongNum++
        }
        letter.typed = true;


        if (this.num === this.typingLine.length) {
            this.handleFinish()
        };
    }

    handleFinish() {
        this.typingLine = formatText(Words);
        this.num = 0;
        this.score = 100 - this.wrongNum;
        this.props.actions.finishTyping(this.score, this.speed, this.num)
    }

    render() {
        return (
            <section tabIndex="0"
                            onFocus={this.handleFocus.bind(this)}
                            onBlur={this.handleBlur.bind(this)}
                            onKeyPress={this.handleKeyPress.bind(this)}>
                    <Word   text={this.typingLine} />
                    <Board />
            </section>
        )
    }
}

Keyboard.propTypes = {
    status: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
}

export default Keyboard