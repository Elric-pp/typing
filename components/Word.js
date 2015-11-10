import React, { PropTypes, Component } from 'react'
import Words from '../words.json';


class Word extends Component {

    render() {
            const  { curNum, text } = this.props;
            const letters = text.map((elem, index) => {
                const className = elem.typed ? elem.tf : "unType";
                const blink = curNum === index ? <span className="blink">_</span> : "";
                return <span className= {"letter " + className} key={index} >{ elem.key }{ blink }</span>
            })

        return (
            <div className="text-line">{letters}</div>
        )
    }
}


export default Word