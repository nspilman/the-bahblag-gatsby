import React from 'react'

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