import React from 'react'

class BlogComment extends React.Component {
    render() {
        return (
            <div className="bg-light container" style={{borderRadius: ".5em", padding:"1em", margin:".5em 0 .5em 0"}}>
                <div className="row">
                    <div className="col-sm-2 py-2">
                        <p>{this.props.author}</p>
                        <p>{this.props.date.slice(0,9)}</p>
                    </div>
                    <div className="col-sm-9">
                        {this.props.comment}
                    </div> 
                </div>
            </div>
        )
    }

}

export default BlogComment