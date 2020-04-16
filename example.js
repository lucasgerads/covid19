                            <StaticQuery
                              query={graphql`
                                query {
                                  allShopifyProduct(
                                    limit: 10,
                                    sort: {
                                      fields: [createdAt]
                                      order: DESC
                                    }
                                  ) {
                                    edges {
                                      node {
                                        id
                                        title
                                        handle
                                        createdAt
                                        images {
                                          id
                                          originalSrc
                                          localFile {
                                            childImageSharp {
                                              fluid(maxWidth: 910) {
                                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                              }
                                            }
                                          }
                                        }
                                        variants {
                                          price
                                        }
                                      }
                                    }
                                  }
                                }
                              `}
                              render={data => (
                                 <Slider ref={c => (this.slider = c)} {...settings}>
                                    {data.allShopifyProduct.edges.map(x => (
                                        <div>Each product data</div>
                                    ))}
                                </Slider>
                              )}
                            />