import React from 'react'
import Axios from 'axios';



class BlogCommentBox extends React.Component {
     constructor(){
            super();
            this.state = {
               email: null,
               author:null,
               comment:null,
               status:null,
            }
             this.updateAuthor = this.updateAuthor.bind(this);
             this.updateEmail = this.updateEmail.bind(this);
             this.updateComment = this.updateComment.bind(this);
             this.postComment = this.postComment.bind(this);
        }
        updateEmail(e){
            this.setState({email: e.target.value})
        }  
        updateAuthor(e){
            this.setState({author: e.target.value})
        }  
        updateComment(e){
            this.setState({comment: e.target.value})
        }

        postComment(){
            this.setState({status:'pending'})
            Axios.post(
                "https://natespilman.tech/blog",
                {
                        "post":"333",
                        "text":this.state.comment,
                        "author":this.state.author,   
                }
            ).then(resp =>
                {
                    if(resp.status == "200"){
                        this.setState({status:'posted'})
                }
                else{
                    this.setState({status:"failed"})
                }
        })}
    
        showNewComment(){
            return(
                <div>
                <h2>Leave a Comment</h2>
        <div className="form-group">
        <label for="usr">Name:</label>
          <input type="text" onChange={this.updateAuthor} value={this.state.author} className="form-control" id="name"></input>
        <label for="usr">Email:</label>
          <input type="text" className="form-control" onChange={this.updateEmail} value={this.state.email} id="email"></input>
          <textarea className="form-control" rows="5" onChange={this.updateComment} value={this.state.comment} id="comment"></textarea>
        </div>
        <button onClick={this.postComment}>
            Submit Comment
        </button>
        </div>
            )
        }
        showPending(){
            return(<div className="container jumboton">
            <h2>Posting</h2>
            </div>)
        }

        showPosted(){
            return(<div className="container jumboton">
            <h2>Success!</h2>
            <h4>Your comment has been submitted for review</h4>
            </div>)
        }

        dynamicDisplay(){
            if(!this.state.status){
                return this.showNewComment()
            }
            if(this.state.status==="pending"){
                return this.showPending()
            }
            if(this.state.status ==="posted"){
                return this.showPosted()
            }
        }

render(){
   return this.dynamicDisplay()
}
}

export default BlogCommentBox