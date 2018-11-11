import React,{Component} from 'react';
import {primeraMayuscula} from '../Helper';
import Result from './Result';

export default class Summary extends Component {

   

    showSummary = () => {
        const {mark, plan, year} = this.props.data;

        if (!plan || !year || !mark) return null
         
        return(
                <div className="resumen">
                    <h2>Your auto insurance:</h2>
                    <li>Mark: {primeraMayuscula(mark)}</li>
                    <li>Year: {year}</li>
                    <li>Plan: {primeraMayuscula(plan)}</li>
                </div>
        )
    }

    render() {
       

        return (

            <div>
                {this.showSummary() }
                <Result price = {this.props.price} />
            </div>
        );
    }
}

