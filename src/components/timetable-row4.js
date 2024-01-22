import React from 'react'

import PropTypes from 'prop-types'

import './timetable-row4.css'

const TimetableRow4 = (props) => {
  return (
    <div className={`timetable-row4-row timetable-row ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        loading="lazy"
        className="timetable-row4-image timetable-image"
      />
      <div className="timetable-row4-container">
        <span className="timetable-time">{props.time}</span>
        <div className="timetable-row4-container1">
          <h4 className="timetable-title">{props.title}</h4>
          <div className="timetable-row4-container2">
            <a
              href={props.linkUrl1}
              target="_blank"
              rel="noreferrer noopener"
              className="timetable-row4-link timetable-button"
            >
              <span className="">{props.linkText1}</span>
            </a>
            <a
              href={props.linkUrl2}
              target="_blank"
              rel="noreferrer noopener"
              className="timetable-row4-link1 timetable-button"
            >
              <span className="">{props.linkText2}</span>
            </a>
            <a
              href={props.linkUrl3}
              target="_blank"
              rel="noreferrer noopener"
              className="timetable-row4-link2 timetable-button"
            >
              <span className="">{props.linkText3}</span>
            </a>
            <a
              href={props.linkUrl4}
              target="_blank"
              rel="noreferrer noopener"
              className="timetable-row4-link3 timetable-button"
            >
              <span className="">{props.linkText4}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

TimetableRow4.defaultProps = {
  linkText2: 'Link',
  linkText4: 'Link',
  linkUrl4: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  title: '100 Meter',
  imageAlt: 'onderdeel icon',
  linkUrl1: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  linkUrl2: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  linkUrl3: 'https://www.atletiek.nu/wedstrijd/chronoloog/38027/',
  rootClassName: '',
  linkText3: 'Link',
  linkText1: 'Link',
  imageSrc: '/events/sprint.svg',
  time: 'Time',
}

TimetableRow4.propTypes = {
  linkText2: PropTypes.string,
  linkText4: PropTypes.string,
  linkUrl4: PropTypes.string,
  title: PropTypes.string,
  imageAlt: PropTypes.string,
  linkUrl1: PropTypes.string,
  linkUrl2: PropTypes.string,
  linkUrl3: PropTypes.string,
  rootClassName: PropTypes.string,
  linkText3: PropTypes.string,
  linkText1: PropTypes.string,
  imageSrc: PropTypes.string,
  time: PropTypes.string,
}

export default TimetableRow4
