import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import BlogCommmentWrapper from '../components/BlogCommentWrapper'
import Img from 'gatsby-image'

const mainImg = ()=>{
  const post = this.props.data.markdownRemark
  return(
    <Img fluid={post.frontmatter.image.childImageSharp.fluid} className = "p5" />
  )
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = post.frontmatter.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Header/>
        <Sidebar header={post.frontmatter.title} mainImg={mainImg} />
					<div id="main">

							<article className="post">
								<header>
									<div className="title">
										<h2>{post.frontmatter.title}</h2>
										<p>{post.frontmatter.description}</p>
									</div>
									<div className="meta">
										<time className="published" datetime="2015-11-01">{post.frontmatter.date}</time>
                    <span className="published">author: {post.frontmatter.author}</span>
									</div>
								</header>
								<span className="image featured">
                <Img fluid={post.frontmatter.image.childImageSharp.fluid} className = "p5" />
                </span>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
							</article>
              <BlogCommmentWrapper postId = {post.id} draft = {post.frontmatter.draft}/>
              <ul className="actions">
									<li><a href="/" className="button">Home Page</a></li>
								</ul>
					</div>
        {/* /* <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
*/}
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
            </ul> 
        
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site{
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        author
        draft
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
`