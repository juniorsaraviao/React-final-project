import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './FormUsers.css';
import users from '../img/users.jpg';


class FormUsers extends Component {
    handleSubmit=(e)=>{
        e.preventDefault();
        var name=this.getName.value;
        var lastname=this.getLastname.value;
        var country=this.getCountry.value;
        var gender=this.getGender.value;
        var data=({
            id:new Date(),
            name,
            lastname,
            country,
            gender
        });
        this.props.dispatch({
            type:'ADD_POST',
            data
        });

        this.getName.value='';
        this.getLastname.value='';
        this.getCountry.value='Perú';
        this.getGender.value='Male';
    }  
    
    setGender(event) {
        console.log(event.target.value);
    }

    render() {
        const { options,genders } = this.props
        return (
            <div>
                <div className="create">
                    <h1>CREATE USERS</h1>
                    <img className="img2" alt="img2" src={users}/>
                    <br/><br/>
                    <form onSubmit={this.handleSubmit}>
                        <input className="input-n" type="text" placeholder="Enter first name" required ref={(input)=>this.getName=input}/> <br/><br/>
                        <input className="input-n" type="text" placeholder="Enter last name" required ref={(input)=>this.getLastname=input}/> <br/><br/>
                        <span className="country">Select Country</span>
                        <select ref={(input)=>this.getCountry=input}>
                            {options.map(option =>
                            <option value={option} key={option}>
                            {option}
                            </option>)
                            }
                        </select>
                        <br/><br/>
                        <span className="country">Select Gender</span>
                        <select ref={(input)=>this.getGender=input}>
                            {genders.map(gender =>
                            <option value={gender} key={gender}>
                            {gender}
                            </option>)
                            }
                        </select>
                        {/* <div>
                            <input type="radio" value="MALE" name="gender"  onChange={this.setGender.bind(this)} ref={(input)=>this.getSex=input}/> Male
                            <input type="radio" value="FEMALE" name="gender"  onChange={this.setGender.bind(this)} ref={(input)=>this.getSex=input}/> Female
                        </div> */}
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
      ).isRequired,
    genders: PropTypes.arrayOf(
        PropTypes.string.isRequired
      ).isRequired
};

export default connect() (FormUsers);