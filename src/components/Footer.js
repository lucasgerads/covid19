import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>
       Über diese Seite 
      </h2>
      <p>
      Alle Daten wurden aus den Pressemittelungen der Stadt Aachen genommen und in einem Google Spreadsheet gesammlt. Die Graphen werden mit <a href="https://www.everviz.com/">Everviz.</a> erstellt. Die Webseite ist mit dem <a href="https://www.gatsbyjs.org/">Gatsbyjs</a> Framework erstellt worden und wird auf <a href="https://www.netlify.com/">Netlify</a> gehostet. Das Design beruht auf einem Template von <a href="https://html5up.net/">HTML5Up</a>. 
      Der Sourecode dieser Seite ist opensource und in meine <a href="https://github.com/lucasgerads/covid19">Github account</a> zu finde.      
      </p>
      {/*<ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>
</ul>*/}
    </section>
    <section>
      {/*<h2>Etiam feugiat</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
        <dt>Phone</dt>
        <dd>(000) 000-0000 x 0000</dd>
        <dt>Email</dt>
        <dd>
          <a href="https://codebushi.com">information@untitled.tld</a>
        </dd>
      </dl>*/}
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/lucasgerads"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/lucasgerads/covid19"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; <a href="https://twitter.com/lucasgerads">Lucas Gerads </a>.
    </p>
  </footer>
)

export default Footer
