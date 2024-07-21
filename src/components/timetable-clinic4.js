import React from 'react'

import PropTypes from 'prop-types'

import './timetable-clinic4.css'

const TimetableClinic4 = (props) => {
  return (
    <div
      className={`timetable-clinic4-row timetable-row ${props.rootClassName} `}
    >
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        loading="lazy"
        className="timetable-clinic4-image timetable-image"
      />
      <div className="timetable-clinic4-container">
        <span className="timetable-time">{props.time}</span>
        <h4 className="timetable-title">{props.title}</h4>
        <div className="timetable-clinic4-container1">
          <a
            href={props.url1}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic4-link timetable-button"
          >
            <span>{props.name1}</span>
          </a>
          <h4 className="timetable-clinic4-title1 timetable-title">
            {props.by1}
          </h4>
        </div>
        <div className="timetable-clinic4-container2">
          <a
            href={props.url2}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic4-link1 timetable-button"
          >
            <span>{props.name2}</span>
          </a>
          <h4 className="timetable-clinic4-title2 timetable-title">
            {props.by2}
          </h4>
        </div>
        <div className="timetable-clinic4-container3">
          <a
            href={props.url3}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic4-link2 timetable-button"
          >
            <span>{props.name3}</span>
          </a>
          <h4 className="timetable-clinic4-title3 timetable-title">
            {props.by3}
          </h4>
        </div>
        <div className="timetable-clinic4-container4">
          <a
            href={props.url4}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic4-link3 timetable-button"
          >
            <span>{props.name4}</span>
          </a>
          <h4 className="timetable-clinic4-title4 timetable-title">
            {props.by4}
          </h4>
        </div>
      </div>
    </div>
  )
}

TimetableClinic4.defaultProps = {
  url2: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  by1: 'Trainer',
  imageSrc: '/events/sprint.svg',
  by2: 'Trainer',
  imageAlt: 'Clinic icoon',
  name3: 'Clinic',
  rootClassName: '',
  url4: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  name4: 'Clinic',
  by4: 'Trainer',
  title: '100 Meter',
  by3: 'Trainer',
  url3: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  time: 'Time',
  name1: 'Clinic',
  name2: 'Clinic',
  url1: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
}

TimetableClinic4.propTypes = {
  url2: PropTypes.string,
  by1: PropTypes.string,
  imageSrc: PropTypes.string,
  by2: PropTypes.string,
  imageAlt: PropTypes.string,
  name3: PropTypes.string,
  rootClassName: PropTypes.string,
  url4: PropTypes.string,
  name4: PropTypes.string,
  by4: PropTypes.string,
  title: PropTypes.string,
  by3: PropTypes.string,
  url3: PropTypes.string,
  time: PropTypes.string,
  name1: PropTypes.string,
  name2: PropTypes.string,
  url1: PropTypes.string,
}

export default TimetableClinic4
