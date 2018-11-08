import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './EditUser.css';

class EditUser extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newName = this.getName.value;
        const newLastname = this.getLastname.value;
        const newCountry = this.getCountry.value;
        const newGender =this.getGender.value;
        const data = {
          newName,
          newLastname,
          newCountry,
          newGender
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }
    render() {
        const { options,genders } = this.props
        return (
            <div key={this.props.post.id} className="content">
                <form className="form" onSubmit={this.handleEdit}>
                    <h2>CHANGES</h2>
                    <input className="input-nn" required type="text" ref={(input) => this.getName = input}
                    defaultValue={this.props.post.name} placeholder="Enter New First Name" /><br /><br />
                    <input className="input-nn" required type="text" ref={(input) => this.getLastname = input}
                    defaultValue={this.props.post.lastname} placeholder="Enter New Last Name" /><br /><br />
                    <select className="list" ref={(input)=>this.getCountry=input} defaultValue={this.props.post.country}>
                        {options.map(option =>
                        <option value={option} key={option}>
                        {option}
                        </option>)
                        }
                    </select>
                    <select className="list" ref={(input)=>this.getGender=input} defaultValue={this.props.post.gender}>
                        {genders.map(gender =>
                        <option value={gender} key={gender}>
                        {gender}
                        </option>)
                        }
                    </select>
                    <button className="btn-u">Update</button>
                </form>
            </div>
        );
    }
}

EditUser.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
      ).isRequired,
    genders: PropTypes.arrayOf(
        PropTypes.string.isRequired
      ).isRequired
};

export default connect() (EditUser);