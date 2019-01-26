import React from 'react'

class Mailing extends React.Component {

    render() {
return(
    <div>
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Join our Mailing List</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  </form>

<button type="button" class="btn btn-primary" style={{height:'3em'}}>submit</button>
</div>

)}}

export default Mailing