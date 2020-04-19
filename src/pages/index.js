import { Link, StaticQuery, graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
   
    return (
      <Layout>
        <Helmet title="Covid19 Aachen" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

        <StaticQuery
        query= {graphql`
          query {
              allMarkdownRemark(sort: {fields: [frontmatter___element], order: ASC}) {
                  edges {
                  node {
                      id
                      frontmatter {
                          element
                          title
                          summary
                      }
                      html
                  }
                  }
              }
          }
          `
        }
        render={data => {
            const sections = data.allMarkdownRemark.edges.map(( {node} ) => {
            return (
            <section id={  node.frontmatter.element} className="main">
              <header className="major">
                <h2>{ node.frontmatter.title }</h2>
                <p>
                  { node.frontmatter.summary}
                </p>
              </header>
              <div className="content" dangerouslySetInnerHTML={{ __html: node.html }}>
              </div>
            </section>
            )})
          return (sections)
          }}
        />
          
        </div>
      </Layout>
    )
  }
}

export default Index
