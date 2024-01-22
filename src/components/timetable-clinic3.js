import React from 'react'

import PropTypes from 'prop-types'

import './timetable-clinic3.css'

const TimetableClinic3 = (props) => {
  return (
    <div
      className={`timetable-clinic3-row timetable-row ${props.rootClassName} `}
    >
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        loading="lazy"
        className="timetable-clinic3-image timetable-image"
      />
      <div className="timetable-clinic3-container">
        <span className="timetable-time">{props.time}</span>
        <h4 className="timetable-title">{props.title}</h4>
        <div className="timetable-clinic3-container1">
          <a
            href={props.url1}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic3-link timetable-button"
          >
            <span className="">{props.name1}</span>
          </a>
          <h4 className="timetable-clinic3-title1 timetable-title">
            {props.by1}
          </h4>
        </div>
        <div className="timetable-clinic3-container2">
          <a
            href={props.url2}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic3-link1 timetable-button"
          >
            <span className="">{props.name2}</span>
          </a>
          <h4 className="timetable-clinic3-title2 timetable-title">
            {props.by2}
          </h4>
        </div>
        <div className="timetable-clinic3-container3">
          <a
            href={props.url3}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic3-link2 timetable-button"
          >
            <span className="">{props.name3}</span>
          </a>
          <h4 className="timetable-clinic3-title3 timetable-title">
            {props.by3}
          </h4>
        </div>
      </div>
    </div>
  )
}

TimetableClinic3.defaultProps = {
  url2: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  name1: 'Clinic',
  title: '100 Meter',
  name3: 'Clinic',
  time: 'Time',
  imageSrc: '/events/sprint.svg',
  rootClassName: '',
  by3: 'Trainer',
  name2: 'Clinic',
  url1: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  by2: 'Trainer',
  imageAlt: 'Clinic icoon',
  by1: 'Trainer',
  url3: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
}

TimetableClinic3.propTypes = {
  url2: PropTypes.string,
  name1: PropTypes.string,
  title: PropTypes.string,
  name3: PropTypes.string,
  time: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  by3: PropTypes.string,
  name2: PropTypes.string,
  url1: PropTypes.string,
  by2: PropTypes.string,
  imageAlt: PropTypes.string,
  by1: PropTypes.string,
  url3: PropTypes.string,
}

export default TimetableClinic3
