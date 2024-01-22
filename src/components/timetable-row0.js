import React from 'react'

import PropTypes from 'prop-types'

import './timetable-row0.css'

const TimetableRow0 = (props) => {
  return (
    <div className={`timetable-row0-row timetable-row ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        loading="lazy"
        className="timetable-row0-image timetable-image"
      />
      <div className="timetable-row0-container">
        <span className="timetable-time">{props.time}</span>
        <div className="timetable-row0-container1">
          <h4 className="timetable-title">{props.title}</h4>
        </div>
      </div>
    </div>
  )
}

TimetableRow0.defaultProps = {
  title: '100 Meter',
  imageSrc: '/events/sprint.svg',
  time: 'Time',
  imageAlt: 'onderdeel icon',
  rootClassName: '',
}

TimetableRow0.propTypes = {
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  time: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default TimetableRow0
