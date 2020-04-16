import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => {
    const data = useStaticQuery(
    graphql`
        query {
            allMarkdownRemark(sort: {fields: [frontmatter___element], order: ASC}) {
                edges {
                node {
                    id
                    frontmatter {
                        element
                        title
                        order
                    }
                }
                }
            }
        }
    `
    )
    console.log(data)
    // const navItems = ["intro","first","second", "third", "cta"]
    const navItems = data.allMarkdownRemark.edges.map(( {node} ) => node.frontmatter.title )
    // homes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

    console.log(navItems)
    // console.log(navItemsTest)


    // var names = ['Jake', 'Jon', 'Thruster'];
    // var namesList = names.map(function(name){
    //               return <li>{name}</li>;
    //              })

    const navContent = data.allMarkdownRemark.edges.map(( {node} ) => {

        return (<li>
            <Scroll type="id" element={  node.frontmatter.element }>
                <a href="#">{  node.frontmatter.title }</a>
            </Scroll>
        </li>)
    })

    console.log(navContent)

    return (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ navItems } currentClassName="is-active" offset={-300}>

            { navContent}
           {/*  
            <li>
                <Scroll type="id" element="first">
                    <a href="#">Test</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="second">
                    <a href="#">Second Section</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="third">
                    <a href="#">Third Section</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="cta">
                    <a href="#">Get Started</a>
                </Scroll>
            </li>*/}
        </Scrollspy>
    </nav>
)}

export default Nav
