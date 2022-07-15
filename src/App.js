import React from 'react';
import './index.css';

class LessonFour extends React.Component {

    message = () => {
        return(
            <h1> Arrow Function Lesson </h1>
        )
    }

    double = (number) => {
        return(
            number * 4
        )
    }

    render() {
        return(
            <div className='box'>
                {this.message()}
                <p> Dobro do número 40 = {this.double(40)} </p>
            </div>
        )
    }
}

export default LessonFour;
