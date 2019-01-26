import React from 'react'
import axios from 'axios'

class Mailing extends React.Component {
    constructor(){
        super();
        this.state = {
           email: null,
        }
        this.addEmail = this.addEmail.bind(this);
this.updateEmail = this.updateEmail.bind(this);
    }
    addEmail(){
        console.log(this.state.email)
        axios.post(
            "https://artsonthehudson.com/921gsheet/blog",
            {
                "email":this.state.email
            },
            {
            headers:{
                'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'text/plain',
            }}
        ).then(resp =>
            console.log(resp)
        )
    }

    updateEmail(e){
        this.setState({email: e.target.value})
    }   

    render() {
return(
    <div>
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Join our Mailing List</label>
    <input type="email" onChange={this.updateEmail} value={this.state.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  </form>

<button type="button" class="btn btn-primary" style={{height:'3em'}} onClick={this.addEmail}>submit</button>
</div>

)}}

export default Mailing