import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './FormUsers.css'
import { Field } from 'redux-form';
// const  { DOM: { input } } = React;

class FormUsers extends Component {
    handleSubmit=(e)=>{
        e.preventDefault();
        var name=this.getName.value;
        var lastname=this.getLastname.value;
        var country=this.getCountry.value;
        
        var data=({
            id:new Date(),
            name,
            lastname,
            country
        });
        this.props.dispatch({
            type:'ADD_POST',
            data
        });

        this.getName.value='';
        this.getLastname.value='';
        this.getCountry.value='Perú'
    }  
    
    setGender(event) {
        console.log(event.target.value);
    }

    render() {
        const { options } = this.props
        return (
            <div>
                <div>
                    <h1>CREATE USERS</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input className="input-n" type="text" placeholder="Enter first name" required ref={(input)=>this.getName=input}/> <br/><br/>
                        <input className="input-n" type="text" placeholder="Enter last name" required ref={(input)=>this.getLastname=input}/> <br/><br/>
                        <span className="country">Select country</span>
                        <select ref={(input)=>this.getCountry=input}>
                            {options.map(option =>
                            <option value={option} key={option}>
                            {option}
                            </option>)
                            }
                        </select>
                        <br/><br/>
                        <button className="btn-s">Save</button>
                    </form>
                    
                </div>
                
            </div>
        );
    }
}

FormUsers.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
      ).isRequired
};

export default connect() (FormUsers);