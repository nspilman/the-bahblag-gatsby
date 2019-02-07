import React from 'react'
import BlogCommentBox from "./BlogCommentBox.js"



class BlogCommentWrapper extends React.Component {
    showCommentBox(){
        if(this.props.draft === true){
            return <BlogCommentBox/>
        }
        else{
            return <div></div>
        }
    }
    render() {
        this.showCommentBox()
    }
}

export default BlogCommentWrapper