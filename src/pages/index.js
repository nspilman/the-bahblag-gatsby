import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    console.log(posts)

    return (
      <Layout location={this.props.location} title={siteTitle}> 
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
<Header/>
<div id="main">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (


  <article className="post">
    <header>
      <div className="title">
        <h2><a href={node.fields.slug}>{node.frontmatter.title}</a></h2>
        <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
      </div>
      <div className="meta">
        <time className="published" dateTime="2015-11-01"> {node.frontmatter.date} </time>
        <a href="#" className="author"><span className="name">AUTHOR</span><img src="images/avatar.jpg" alt="" /></a>
      </div>
    </header>
    <a href="#" className="image featured"><img src="https://source.unsplash.com/random" alt="" /></a>
    <p dangerouslySetInnerHTML={{ __html: node.excerpt }}></p>
    <footer>
      <ul className="actions">
        <li><a href="#" className="button big">Continue Reading</a></li>
      </ul>
      <ul className="stats">
        <li><a href="#">General</a></li>
        <li><a href="#" className="icon fa-heart">28</a></li>
        <li><a href="#" className="icon fa-comment">128</a></li>
      </ul>
    </footer>
  </article>

          )})}
            </div>
            <Sidebar data={data}/>
            
  </Layout>

        //     <div key={node.fields.slug}>
        //       <h3
        //         style={{
        //           marginBottom: rhythm(1 / 4),
        //         }}
        //       >
        //         <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
        //           {title}
        //         </Link>
        //       </h3>
        //       <small>{node.frontmatter.date}</small>
        //       <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        //     </div>
        //   )
        // })}
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC filter: {fileAbsolutePath: {regex: "/(blog)/.*\\.md$/"}}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
