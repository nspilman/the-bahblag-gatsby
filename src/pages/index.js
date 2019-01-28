import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Indexmain from '../components/indexMain'
import SEO from '../components/seo'
import bahbes from "../img/theBabes.jpg"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    

    return (
      <Layout location={this.props.location} title={siteTitle}> 
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
<Header/>

<Sidebar header = "Nate and Claire's Travel blog" imgsrc = {bahbes}/>
<Indexmain data = {data}/>
            
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC},filter: {fileAbsolutePath: {regex: "/(blog)/.*\\.md$/"},frontmatter: {draft: {ne: true}}}) {
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
