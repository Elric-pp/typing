import React, { PropTypes, Component } from 'react'
import Words from '../words.json';


class Word extends Component {

    render() {
        const letters = this.props.text.map((elem, index) => {
            const className = elem.typed ? elem.tf : "unType"
            return <span className= {className} key={index} >{elem.key}</span>
        })

        return (
            <div className="text-line">{letters}</div>
        )
    }
}


export default Word