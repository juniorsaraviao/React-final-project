import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import EditUser from '../EditUser/EditUser';
import Post from '../Post/Post';
import './CreateUsers.css'


class CreateUsers extends Component {
    render() {
        var{posts}=this.props;

        return (
            <div>
                <h1>USERS</h1>
                {this.props.posts.map((post) => (
                    <div key={post.id} className="content-t">
                        {post.editing ? <EditUser options={[ 'Perú', 'Colombia','Ecuador','Argentina','Chile','Venezuela','Brasil','Bolivia' ]} genders={['Male', 'Female']}  post={post} key={post.id} /> : <Post post={post}
                        key={post.id} />}
                    </div>
                ))}
            </div>
        );
    }
}

CreateUsers.propTypes = {
    posts:PropTypes.any
};

const mapStateProps=(state)=>{
    return{
        posts:state
    }
}

export default connect(mapStateProps) (CreateUsers);