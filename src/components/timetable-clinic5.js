import React from 'react'

import PropTypes from 'prop-types'

import './timetable-clinic5.css'

const TimetableClinic5 = (props) => {
  return (
    <div
      className={`timetable-clinic5-row timetable-row ${props.rootClassName} `}
    >
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        loading="lazy"
        className="timetable-clinic5-image timetable-image"
      />
      <div className="timetable-clinic5-container">
        <span className="timetable-time">{props.time}</span>
        <h4 className="timetable-title">{props.title}</h4>
        <div className="timetable-clinic5-container1">
          <a
            href={props.url1}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic5-link timetable-button"
          >
            <span className="">{props.name1}</span>
          </a>
          <h4 className="timetable-clinic5-title1 timetable-title">
            {props.by1}
          </h4>
        </div>
        <div className="timetable-clinic5-container2">
          <a
            href={props.url2}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic5-link1 timetable-button"
          >
            <span className="">{props.name2}</span>
          </a>
          <h4 className="timetable-clinic5-title2 timetable-title">
            {props.by2}
          </h4>
        </div>
        <div className="timetable-clinic5-container3">
          <a
            href={props.url3}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic5-link2 timetable-button"
          >
            <span className="">{props.name3}</span>
          </a>
          <h4 className="timetable-clinic5-title3 timetable-title">
            {props.by3}
          </h4>
        </div>
        <div className="timetable-clinic5-container4">
          <a
            href={props.url4}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic5-link3 timetable-button"
          >
            <span className="">{props.name4}</span>
          </a>
          <h4 className="timetable-clinic5-title4 timetable-title">
            {props.by4}
          </h4>
        </div>
        <div className="timetable-clinic5-container5">
          <a
            href={props.url5}
            target="_blank"
            rel="noreferrer noopener"
            className="timetable-clinic5-link4 timetable-button"
          >
            <span className="">{props.name5}</span>
          </a>
          <h4 className="timetable-clinic5-title5 timetable-title">
            {props.by5}
          </h4>
        </div>
      </div>
    </div>
  )
}

TimetableClinic5.defaultProps = {
  name2: 'Clinic',
  by4: 'Trainer',
  url4: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  name3: 'Clinic',
  url5: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  imageSrc: '/events/sprint.svg',
  url3: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  rootClassName: '',
  name1: 'Clinic',
  by2: 'Trainer',
  by1: 'Trainer',
  url1: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  by3: 'Trainer',
  title: '100 Meter',
  by5: 'Trainer',
  url2: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  imageAlt: 'Clinic icoon',
  name5: 'Clinic',
  time: 'Time',
  name4: 'Clinic',
}

TimetableClinic5.propTypes = {
  name2: PropTypes.string,
  by4: PropTypes.string,
  url4: PropTypes.string,
  name3: PropTypes.string,
  url5: PropTypes.string,
  imageSrc: PropTypes.string,
  url3: PropTypes.string,
  rootClassName: PropTypes.string,
  name1: PropTypes.string,
  by2: PropTypes.string,
  by1: PropTypes.string,
  url1: PropTypes.string,
  by3: PropTypes.string,
  title: PropTypes.string,
  by5: PropTypes.string,
  url2: PropTypes.string,
  imageAlt: PropTypes.string,
  name5: PropTypes.string,
  time: PropTypes.string,
  name4: PropTypes.string,
}

export default TimetableClinic5
