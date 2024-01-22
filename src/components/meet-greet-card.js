import React from 'react'

import PropTypes from 'prop-types'

import './meet-greet-card.css'

const MeetGreetCard = (props) => {
  return (
    <div className={`meet-greet-card-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        loading="lazy"
        className="meet-greet-card-image"
      />
      <div className="meet-greet-card-container">
        <h2 className="meet-greet-card-text">{props.title}</h2>
        <span className="meet-greet-card-text1">Specialisaties:</span>
        <span className="meet-greet-card-text2">{props.description}</span>
      </div>
    </div>
  )
}

MeetGreetCard.defaultProps = {
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&w=1500',
  description: 'Lorem ipsum dolor sit amet',
  title: 'Project Title',
  rootClassName: '',
}

MeetGreetCard.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default MeetGreetCard
