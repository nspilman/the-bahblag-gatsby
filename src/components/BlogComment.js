import React from 'react'

class BlogComment extends React.Component {
    render() {
        return (
            <div className="bg-info container" style="border-radius: .5em; padding:1em;">
                <div className="row">
                    <div className="col-sm-2 py-2">
                        <p>{this.props.author}</p>
                        <p>{this.props.date}</p>
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