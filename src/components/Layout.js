import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import icon from '../img/globe.jpg'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    // if (location.pathname === rootPath) {
    //   header = (
    //     <h1
    //       style={{
    //         ...scale(1.5),
    //         marginBottom: rhythm(1.5),
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={`/`}
    //       >
    //         {title}
    //       </Link>
    //     </h1>
    //   )
    // } else {
    //   header = (
    //     <h3
    //       style={{
    //         fontFamily: `Montserrat, sans-serif`,
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={`/`}
    //       >
    //         {title}
    //       </Link>
    //     </h3>
    //   )
    // }
    return (
      <div id="wrapper">
      <Helmet
  title="The Lobsteau Blog"
  meta={[
      { name: 'description', content: 'The Travel Blog of Claire and Nate' },
      { name: 'keywords', content: 'webdev, photography, gatsbyjs, reactjs, frontend, graphql, design, photo, photos' },
  ]}
  link={[
      { rel: 'shortcut icon', type: 'image/jpg', href: `${icon}` }
  ]}
/>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-133590138-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-133590138-1');
</script>

      {header}
      {children}
      </div>
    )
  }
}

export default Layout
