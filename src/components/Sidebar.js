import React from 'react'
import { Link } from 'gatsby'

class Sidebar extends React.Component {
render(){
    return(
                        <section id="sidebar">
							<section id="intro">
								<a href="#" className="logo"><img src="../../static/img/theBabes.jpg" alt="" /></a>
								<header>
									<h2>{this.props.header}</h2>
								</header>
							</section>

							{/* <section>
								<div className="mini-posts"> */}


{/* // {posts.map(({ node }) => { }
//     const title = node.frontmatter.title || node.fields.slug
//     return (
// 										<article className="mini-post">
// 											<header>
// 												<h3><a href="#">{node.frontmatter.title}</a></h3>
// 												<time className="published" dateTime="2015-10-20">{node.frontmatter.title}</time>
// 												<a href="#" className="author"><img src="../images/avatar.jpg" alt="" /></a>
// 											</header>
// 											<a href="#" className="image"><img src="../images/pic04.jpg" alt="" /></a>
// 										</article>
	)})}*/}
	
										{/* <article className="mini-post">
											<header>
												<h3><a href="#">Rutrum neque accumsan</a></h3>
												<time className="published" datetime="2015-10-19">October 19, 2015</time>
												<a href="#" className="author"><img src="../images/avatar.jpg" alt="" /></a>
											</header>
											<a href="#" className="image"><img src="../images/pic05.jpg" alt="" /></a>
										</article>

										<article className="mini-post">
											<header>
												<h3><a href="#">Odio congue mattis</a></h3>
												<time className="published" datetime="2015-10-18">October 18, 2015</time>
												<a href="#" className="author"><img src="../images/avatar.jpg" alt="" /></a>
											</header>
											<a href="#" className="image"><img src="../images/pic06.jpg" alt="" /></a>
										</article>

										<article className="mini-post">
											<header>
												<h3><a href="#">Enim nisl veroeros</a></h3>
												<time className="published" datetime="2015-10-17">October 17, 2015</time>
												<a href="#" className="author"><img src="../images/avatar.jpg" alt="" /></a>
											</header>
											<a href="#" className="image"><img src="../images/pic07.jpg" alt="" /></a>
										</article> */}

								{/* </div>
							</section> */}

							{/* <section>
								<ul className="posts">
									<li>
										<article>
											<header>
												<h3><a href="#">Lorem ipsum fermentum ut nisl vitae</a></h3>
												<time className="published" datetime="2015-10-20">October 20, 2015</time>
											</header>
											<a href="#" className="image"><img src="../images/pic08.jpg" alt="" /></a>
										</article>
									</li>
									<li>
										<article>
											<header>
												<h3><a href="#">Convallis maximus nisl mattis nunc id lorem</a></h3>
												<time className="published" datetime="2015-10-15">October 15, 2015</time>
											</header>
											<a href="#" className="image"><img src="../images/pic09.jpg" alt="" /></a>
										</article>
									</li>
									<li>
										<article>
											<header>
												<h3><a href="#">Euismod amet placerat vivamus porttitor</a></h3>
												<time className="published" datetime="2015-10-10">October 10, 2015</time>
											</header>
											<a href="#" className="image"><img src="../images/pic10.jpg" alt="" /></a>
										</article>
									</li>
									<li>
										<article>
											<header>
												<h3><a href="#">Magna enim accumsan tortor cursus ultricies</a></h3>
												<time className="published" datetime="2015-10-08">October 8, 2015</time>
											</header>
											<a href="#" className="image"><img src="../images/pic11.jpg" alt="" /></a>
										</article>
									</li>
									<li>
										<article>
											<header>
												<h3><a href="#">Congue ullam corper lorem ipsum dolor</a></h3>
												<time className="published" datetime="2015-10-06">October 7, 2015</time>
											</header>
											<a href="#" className="image"><img src="../images/pic12.jpg" alt="" /></a>
										</article>
									</li>
								</ul>
							</section> */}

							<section className="blurb">
								<h2>About</h2>
								<p>
This is Nate and Claire's travel blog!</p>
								<ul className="actions">
									<li><a href="/about" className="button">Learn More</a></li>
								</ul>
							</section>

							<section id="footer">
								<p className="copyright">&copy; Claire & Nate.</p>
							</section>
					</section>
)
}}

export default Sidebar

