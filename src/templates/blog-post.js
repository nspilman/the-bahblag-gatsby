import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    console.log(post)
    const siteTitle = post.frontmatter.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
       
        <header id="header">
						<h1><a href="/">Nate and Claire's Travel Blog</a></h1>
						<nav className="links">
							<ul>
								<li><a href="#">Lorem</a></li>
								<li><a href="#">Ipsum</a></li>
								<li><a href="#">Feugiat</a></li>
								<li><a href="#">Tempus</a></li>
								<li><a href="#">Adipiscing</a></li>
							</ul>
						</nav>
						<nav className="main">
							<ul>
								<li className="search">
									<a className="fa-search" href="#search">Search</a>
									<form id="search" method="get" action="#">
										<input type="text" name="query" placeholder="Search" />
									</form>
								</li>
								<li className="menu">
									<a className="fa-bars" href="#menu">Menu</a>
								</li>
							</ul>
						</nav>
					</header>

					<div id="main">

							<article className="post">
								<header>
									<div className="title">
										<h2>{post.frontmatter.title}</h2>
										<p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
									</div>
									<div className="meta">
										<time className="published" datetime="2015-11-01">{post.frontmatter.date}</time>
										<a href="#" className="author"><span className="name"></span><img src="../images/avatar.jpg" alt="" /></a>
									</div>
								</header>
								<span className="image featured"><img src="https://source.unsplash.com/random" alt="" /></span>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
									<footer>
									<ul className="stats">
										<li><a href="#">General</a></li>
										<li><a href="#" className="icon fa-heart">28</a></li>
										<li><a href="#" className="icon fa-comment">128</a></li>
									</ul>
								</footer>
							</article>

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
            </ul> */}
        
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`