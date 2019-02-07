import React from 'react'
import BlogCommentBox from "./BlogCommentBox"
import BlogComments from "./BlogComments"

class BlogCommentWrapper extends React.Component {
    showCommentBox(){
        if(this.props.draft === true){
            return (
                <template>
            <BlogCommentBox/>
            <BlogComments/>
            </template>
            )
        }
        else{
            return <div></div>
        }
    }
    render() {
        return this.showCommentBox()
    }
}

export default BlogCommentWrapper