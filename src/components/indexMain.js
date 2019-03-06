import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

class indexMain extends React.Component {
render(){
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    return(
    <div id="main">
    {posts.map(({ node }) => {
      console.log(node.frontmatter)
      return (

<article className="post">
<header>
  <div className="title">
    <h2><a href={node.fields.slug}>{node.frontmatter.title}</a></h2>
    <p>{node.frontmatter.description}</p>
  </div>
  <div className="meta">
    <time className="published" dateTime="2015-11-01"> {node.frontmatter.date} </time>
    <span className = "published">author: {node.frontmatter.author}</span>
  </div>
</header>
<a href={node.fields.slug} className="image featured">
    {/* <Img fluid={node.frontmatter.image.childImageSharp.fluid} /> */}
</a>
<p dangerouslySetInnerHTML={{ __html: node.excerpt }}></p>
<footer>
  <ul className="actions">
    <li><a href={node.fields.slug} className="button big">Continue Reading</a></li>
  </ul>
</footer>
</article>

      )})}
        </div>  
)
}}

export default indexMain

