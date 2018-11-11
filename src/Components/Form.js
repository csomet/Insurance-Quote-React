import React,{Component} from 'react';


export default class Form extends Component {

    //connect form fields with this class
    markRef  = React.createRef();
    yearRef  = React.createRef();
    basicRef = React.createRef();
    fullRef  = React.createRef(); 

    //Avoid using onSubmit this.sendData.bind(this) with arrow function
    //e.preventDefault avoid reloading web with params in url
    sendData = (e) => {
        e.preventDefault();

        //get data

        const plan = this.basicRef.current.checked ? 'basico' : 'completo';

        const dataAuto = {
            mark: this.markRef.current.value,
            year: this.yearRef.current.value,
            plan: plan
        }

        //send data to parent component to process information. We'll use data in parent for other purporses.
        this.props.parentFunction(dataAuto);

        //optional reset form
        //e.currentTarget.reset();
    }


    render() {
        return (
            <form className="cotizar-auto" onSubmit={this.sendData}> 
                <div className="campo">
                    <label>Marca</label>
                    <select name="marca" ref={this.markRef} >
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="campo">
                    <label>Año</label>
                    <select name="year" ref={this.yearRef}>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="campo">
                    <label>Plan:</label>
                    <input type="radio" name="plan" ref={this.basicRef} value="basico"/> Básico
                    <input type="radio" name="plan" ref={this.fullRef} value="completo"/> Completo
                </div>

                <button type="submit" className="boton">Cotizar</button>
            </form>
        );
    }
}