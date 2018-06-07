import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../../components/LeftNav'
import Highlight from 'react-highlight'
import '../../../node_modules/highlight.js/styles/dracula.css'
import FooterMessage from '../../components/FooterMessage';
import { DSInputSearch } from 'oskrhq-design-system'


const InputSearchPage = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Input Search</h1>

        <h3 className="subheading">
          Search Inputs allow users to search data matching a value.
        </h3>

        <DSInputSearch placeholder="Search Users" autoFocus />

        <div className="ds-col-container">
          <div className="ds-col-6">
            <DSInputSearch value="John Doe" />
          </div>
        </div>

        <h4 className="ds-usage-title">Usage</h4>

        <p className="ds-subheading-text-style">
          Input Search is a Presentational React Component that you can use by
          simply instantiating a <code>DSInputSearch</code> tag and passing an
          optional attribute for placeholder <code>(string)</code>.
        </p>

        <Highlight className="html">
          {`<DSInputSearch 
  placeholder="Search List"
  onChange="doSomething"
/>`}
        </Highlight>
      </div>

      <FooterMessage />
    </div>
  </div>
);

export default InputSearchPage;