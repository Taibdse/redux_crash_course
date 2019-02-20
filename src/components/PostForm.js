import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions/post.actions';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { title, body } = this.state;
        this.props.createPost({ title, body });
    }

    render() {
        return (
            <div>
                <h2>Add Post</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input className="form-control" onChange={this.onChange} name="title" type="text" value={this.state.title} />
                    </div>
                    <div className="form-group">
                        <label>Body: </label>
                        <textarea className="form-control" onChange={this.onChange} name="body" type="text" value={this.state.body}></textarea>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);
