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

    componentDidMount() {
        Axios.get(
            "https://natespilman.tech/blog/getComments/333"
        ).then(resp => this.setState({comments:resp.data.response}))
    }

    render() {
        return(
            this.state.comments.map(
                comment =>{
                    const {author,text,date} = comment
                    return <BlogComment author = {author} date = {date} comment = {text}/>
                }
            )
        ) 
    }

}

export default BlogComments