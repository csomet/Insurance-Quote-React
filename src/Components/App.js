import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import Form from './Form';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../Helper';
import Summary from './Summary';

class App extends Component {

  //no need for constructor
  state = {
    baseRate : '', 
    data: {}
  }

  quoteHandler = (data) => {
    
    let baseRate = 2000;

    //Years
    let yearDiff = obtenerDiferenciaAnio(data.year);
    baseRate -= (yearDiff * 0.03) * baseRate;

    //Kind of auto
    baseRate = calcularMarca(data.mark) * baseRate;

    //Plan
    baseRate = parseFloat(obtenerPlan(data.plan) * baseRate).toFixed(2);
    
    //Finally -> state
    this.setState ({
        baseRate : baseRate,
        data : data
    })

  }

  render() {
    return (
      <div className="contenedor">
        <Header title="Insurance Quote" />
      
        <div className="contenedor-formulario">
          <Form parentFunction={this.quoteHandler} />

          <Summary data={this.state.data}
                 price={this.state.baseRate}/>

        </div>
  
      </div>

      
    );
  }
}

export default App;
