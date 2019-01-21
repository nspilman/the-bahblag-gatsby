import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import SEO from '../components/seo'
import Img from 'gatsby-image'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}> 
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
<Header/>

<Sidebar data={data}/>
<div id="main">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (


  <article className="post">
    <header>
      <div className="title">
        <h2><a href={node.fields.slug}>{node.frontmatter.title}</a></h2>
        <p>{node.frontmatter.description}</p>
      </div>
      <div className="meta">
        <time className="published" dateTime="2015-11-01"> {node.frontmatter.date} </time>
        <a href="#" className="author"><span className="name">AUTHOR</span><img src="images/avatar.jpg" alt="" /></a>
      </div>
    </header>
    <a href={node.fields.slug} className="image featured">
        <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC},filter: {fileAbsolutePath: {regex: "/(blog)/.*\\.md$/"}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image{
              childImageSharp {
                fluid(maxWidth: 1240 ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
              
          }
        }
      }
    }
  }
`
