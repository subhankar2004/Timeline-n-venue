import React from "react";
// Import SVGs using ?react query
import WorkIcon from "./work.svg?react";
import SchoolIcon from "./school.svg?react";
import timelineElements from "./TimeLineElements";
import "./App.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  const workIconStyles = { background: "#FE2A06" };
  const schoolIconStyles = { background: "#FE2A06" };

  return (
    <div>
      {" "}
      <div className="event">
        <span className="span1 ">Event</span>
        <span className="span2">Schedule</span>
      </div>
      <VerticalTimeline>
        {" "}
        {timelineElements.map((element) => {
          const isWorkIcon = element.icon === "work";
          const showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              {" "}
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>{" "}
              <h4 className="vertical-timeline-element-subtitle">
                {element.location}
              </h4>{" "}
              <p id="description">{element.description}</p>{" "}
              {showButton && (
                <a
                  className={`button-49 ${element.buttonText ? "show" : "hide"}`}
                  href="/"
                >
                  {" "}
                  {element.buttonText}{" "}
                </a>
              )}{" "}
            </VerticalTimelineElement>

          );
        })}{" "}
      </VerticalTimeline  >{" "}
    </div>
  );
};

export default Timeline;
