import React from 'react'

import PropTypes from 'prop-types'

import './meedoen-card.css'

const MeedoenCard = (props) => {
  return (
    <div className={`meedoen-card-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        loading="lazy"
        className="meedoen-card-image"
      />
      <div className="meedoen-card-container">
        <h2 className="meedoen-card-text">{props.title}</h2>
        <span className="meedoen-card-text1">{props.description}</span>
        <a
          href="https://www.atletiek.nu/wedstrijd/inschrijven/38027/"
          target="_blank"
          rel="noreferrer noopener"
          className="meedoen-card-link"
        >
          <img
            alt="atletiek.nu"
            src="https://www.atletiek.nu/favicon.ico"
            loading="lazy"
            className="meedoen-card-image1"
          />
          <span>Inschrijven</span>
        </a>
      </div>
    </div>
  )
}

MeedoenCard.defaultProps = {
  imageAlt: 'image',
  rootClassName: '',
  description: 'Lorem ipsum dolor sit amet',
  imageSrc:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&w=1500',
  title: 'Project Title',
}

MeedoenCard.propTypes = {
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
}

export default MeedoenCard
