import React from 'react'

class BlogCommentBox extends React.Component {
render(){
    return(
<div className="form-group">
  <label for="comment">Comment:</label>
  <textarea className="form-control" rows="5" id="comment"></textarea>
</div>
    )
}
}

export default BlogCommentBox