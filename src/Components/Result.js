import React,{Component} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export default class Result extends Component {

    render() {

        const result = this.props.price;
        const message = (!result) ? 'Choose mark, year and insurance modality please to get a qoute' 
        : 'Insurace is: $ ';

        return (
            <div className="gran-total">
                {message}
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition 
                            classNames="resultado" 
                            key={result} 
                            timeout={{enter: 50000, exit: 50000}} >
                        <span>{result}</span>
                    </CSSTransition>
                </TransitionGroup>
            </div>
            

        );
    }
}
