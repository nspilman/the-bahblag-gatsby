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
        ).then(resp => console.log(resp))
    }

    render() {
        return <div></div>
    }

}

export default BlogComments