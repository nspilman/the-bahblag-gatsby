import React from 'react'
import axios from 'axios'

class Mailing extends React.Component {
    constructor(){
        super();
        this.state = {
           email: null,
           loginStatus:null
        }
        this.addEmail = this.addEmail.bind(this);
this.updateEmail = this.updateEmail.bind(this);
    }
    addEmail(e){
        e.preventDefault();
        console.log(this.state.email)
        axios.post(
            "https://natespilman.tech/gsheet/blog",
            {
                "email":this.state.email
            },
            {
            headers:{
                    'content-type': 'application/json',
            }}
        ).then(resp =>
            {if(resp.status == "200"){
                this.setState({loginStatus:true})
            }
            console.log(resp)
        }
        )
    }

    returnForm(){
        return(
            <div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Join our Mailing List</label>
            <input type="email" onChange={this.updateEmail} value={this.state.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <button type="button" class="btn btn-primary" style={{height:'3em'}} onClick={this.addEmail} value="Submit">submit</button>
          </form>
        
        </div>
        )
    }
        
    returnThanks(){
        return(
            <div>
                Thank you for signing up!
            </div>
        )
    }

    updateEmail(e){
        this.setState({email: e.target.value})
    }   

    render() {
        if(this.state.loginStatus){
            return this.returnThanks()
        }
        else{
          return this.returnForm()
        }
}}

export default Mailing
