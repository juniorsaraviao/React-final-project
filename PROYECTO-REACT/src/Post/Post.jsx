import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Post.css';
import hombre from '../img/hombre.jpg';
import mujer from '../img/mujer.jpg';

class Post extends Component {
    
    handleDelete=(e)=>{
        this.props.dispatch({
            type:'DELETE_POST',
            id:this.props.post.id
        });
    }

    handleEdit=(e)=>{
        this.props.dispatch({
            type: 'EDIT_POST', 
            id: this.props.post.id
        });
    }
    

    render() {
        var {post}=this.props;
        return (
            <div className="content">
                <br/>
                <img className="img" alt="img"
                src={post.gender==="Male" ? hombre  : mujer } 
                />
                <h2>User Name: {post.name}</h2>
                <p>Last Name: {post.lastname}</p>
                <p>Country: {post.country}</p>
                <p>Gender: {post.gender}</p>
                <button className="btn-e" onClick={()=>this.handleEdit()}>Edit</button>
                <button className="btn-d" onClick={()=>this.handleDelete()}>Delete</button>
                
            </div>
            
        );
    }
}

Post.propTypes = {
    post:PropTypes.any
};

export default connect() (Post);