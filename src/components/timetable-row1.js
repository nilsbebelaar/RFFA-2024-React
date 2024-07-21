import React from 'react'

import PropTypes from 'prop-types'

import './timetable-row1.css'

const TimetableRow1 = (props) => {
  return (
    <div className={`timetable-row1-row timetable-row ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        loading="lazy"
        className="timetable-row1-image timetable-image"
      />
      <div className="timetable-row1-container">
        <span className="timetable-time">{props.time}</span>
        <div className="timetable-row1-container1">
          <h4 className="timetable-title">{props.title}</h4>
          <a
            href={props.linkUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-row1-link timetable-button"
          >
            <span>{props.linkText}</span>
          </a>
        </div>
      </div>
    </div>
  )
}

TimetableRow1.defaultProps = {
  linkUrl: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  imageSrc: '/events/sprint.svg',
  rootClassName: '',
  linkText: 'Link',
  imageAlt: 'onderdeel icon',
  title: '100 Meter',
  time: 'Time',
}

TimetableRow1.propTypes = {
  linkUrl: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  linkText: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
}

export default TimetableRow1
