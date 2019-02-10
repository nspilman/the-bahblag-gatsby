import React from 'react'
import BlogComment from './BlogComment'
import Axios from 'axios';

class BlogComments extends React.Component {
    constructor(){
        super();
        this.state = {
            comments :null,
        }
        //  this.updateAuthor = this.updateAuthor.bind(this);
        //  this.updateEmail = this.updateEmail.bind(this);
        //  this.updateComment = this.updateComment.bind(this);
        //  this.postComment = this.postComment.bind(this);
    }


    render() {
        Axios.get(
            `https://natespilman.tech/blog/getComments/${this.props.postId}`
        ).then(resp =>this.setState({comments:resp.data.response}))

        if(this.state.comments){
        return(
            this.state.comments.map(
                comment =>{
                    return <BlogComment author = {comment.author} date = {comment.date} comment = {comment.text}/>
                }
            )
        )
    }
    else{
        return <div></div>
    } 
    }

}

export default BlogComments