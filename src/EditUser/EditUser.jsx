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
        const data = {
          newName,
          newLastname,
          newCountry
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }
    render() {
        const { options } = this.props
        return (
            <div key={this.props.post.id} className="content">
                <form className="form" onSubmit={this.handleEdit}>
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
                    <button className="btn-u">Update</button>
                </form>
            </div>
        );
    }
}

EditUser.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
      ).isRequired
};

export default connect() (EditUser);