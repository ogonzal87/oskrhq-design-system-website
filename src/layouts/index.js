import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet';
// Utility SCSS
import '../scss/_styles.scss';
// Component Classes 
import '../components/_components.scss'

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet
      title="OSKRHQ Design System"
    />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
