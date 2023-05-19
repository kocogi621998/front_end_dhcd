import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks1 = (props) => {
  return (
    <>
      <nav className={`navigation-links1-nav ${props.rootClassName} `}>
        <span className="navigation-links1-text">{props.text1}</span>
        <span className="navigation-links1-text1">{props.text11}</span>
        <span className="navigation-links1-text2">{props.text111}</span>
        <span className="navigation-links1-text3">{props.text1111}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links1-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links1-text1 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links1-text2 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links1-text3 {
            margin-left: var(--dl-space-space-twounits);
          }

          @media (max-width: 767px) {
            .navigation-links1-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links1-text {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links1-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks1.defaultProps = {
  text: 'Hướng dẫn',
  text11: 'Bầu BKS',
  rootClassName: '',
  text111: 'Biểu Quyết',
  text1: 'Bầu HĐQT',
  text1111: 'Kết Quả',
}

NavigationLinks1.propTypes = {
  text: PropTypes.string,
  text11: PropTypes.string,
  rootClassName: PropTypes.string,
  text111: PropTypes.string,
  text1: PropTypes.string,
  text1111: PropTypes.string,
}

export default NavigationLinks1
