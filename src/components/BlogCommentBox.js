import React from 'react'



class BlogCommentBox extends React.Component {
     constructor(){
            super();
            this.state = {
               email: null,
               author:null,
               comment:null,
               status:null,
            }
            this.addEmail = this.addEmail.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
        }
render(){
    return(
        
<div className="form-group">

<label for="usr">Name:</label>
  <input type="text" className="form-control" id="name"></input>
<label for="usr">Email:</label>
  <input type="text" className="form-control" id="email"></input>
  <label for="comment">Comment:</label>
  <textarea className="form-control" rows="5" id="comment"></textarea>
</div>
    )
}
}

export default BlogCommentBox