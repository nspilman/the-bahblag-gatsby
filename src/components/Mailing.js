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
        this.addEmail2 = this.addEmail2.bind(this);
        this.addEmail3 = this.addEmail3.bind(this);
this.updateEmail = this.updateEmail.bind(this);
    }
    addEmail(e){
        e.preventDefault();
        console.log(this.state.email)
        axios.post(
            "https://artsonthehudson.com/921gsheet/blog",
            {
                "email":this.state.email
            },
            {
            headers:{
                    'content-type': 'application/json',
            }}
        ).then(resp =>
            {if(resp.status == "200"){
                localStorage.setItem('mailSub',true)
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
        if(localStorage.getItem('mailSub')){
            this.returnThanks()
        }
        else{
            this.returnForm()
        }
}}

export default Mailing