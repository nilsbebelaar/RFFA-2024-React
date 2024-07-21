import React from 'react'

import PropTypes from 'prop-types'

import './timetable-clinic2.css'

const TimetableClinic2 = (props) => {
  return (
    <div
      className={`timetable-clinic2-row timetable-row ${props.rootClassName} `}
    >
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        loading="lazy"
        className="timetable-clinic2-image timetable-image"
      />
      <div className="timetable-clinic2-container">
        <span className="timetable-time">{props.time}</span>
        <h4 className="timetable-title">{props.title}</h4>
        <div className="timetable-clinic2-container1">
          <a
            href={props.url1}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic2-link timetable-button"
          >
            <span>{props.name1}</span>
          </a>
          <h4 className="timetable-clinic2-title1 timetable-title">
            {props.by1}
          </h4>
        </div>
        <div className="timetable-clinic2-container2">
          <a
            href={props.url2}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic2-link1 timetable-button"
          >
            <span>{props.name2}</span>
          </a>
          <h4 className="timetable-clinic2-title2 timetable-title">
            {props.by2}
          </h4>
        </div>
      </div>
    </div>
  )
}

TimetableClinic2.defaultProps = {
  imageSrc: '/events/sprint.svg',
  by1: 'Trainer',
  rootClassName: '',
  name1: 'Clinic',
  name2: 'Clinic',
  url2: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  time: 'Time',
  by2: 'Trainer',
  title: '100 Meter',
  url1: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  imageAlt: 'Clinic icoon',
}

TimetableClinic2.propTypes = {
  imageSrc: PropTypes.string,
  by1: PropTypes.string,
  rootClassName: PropTypes.string,
  name1: PropTypes.string,
  name2: PropTypes.string,
  url2: PropTypes.string,
  time: PropTypes.string,
  by2: PropTypes.string,
  title: PropTypes.string,
  url1: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default TimetableClinic2
