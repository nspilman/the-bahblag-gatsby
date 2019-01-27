import React from 'react'
import axios from 'axios'

class Mailing extends React.Component {
    constructor(){
        super();
        this.state = {
           email: null,
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
            console.log(resp)
        )
    }

    addEmail2(){
        console.log(this.state.email)
        fetch(
            "https://artsonthehudson.com/921gsheet/blog",
            {
                method:"POST",
            mode: "no-cors", // no-cors, cors, *same-origin
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify({
            "email":this.state.email
        }), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses response to JSON
}
addEmail3(){
    axios.post(
        'https://artsonthehudson.com/921gsheet',{
            "group":"9999",
            "firstname":"testUser",
            "function":"login"
            }
            ).then(response => console.log(response))
.catch(e => {
  this.errors.push(e)
})
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
  <button type="button" class="btn btn-primary" style={{height:'3em'}} onClick={this.addEmail} value="Submit">submit</button>
  </form>

</div>

)}}

export default Mailing