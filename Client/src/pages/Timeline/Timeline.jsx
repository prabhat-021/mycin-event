import { useState } from "react";
import "./Timeline.css";
import Navbar from "../../components/Navbar/Navbar"

function Timeline() {
  const data = [
    {
      heading: "Amazon",
      date: "2018-2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum odio sint fugiat, nulla architecto possimus eius sed officiis nemo totam perferendis pariatur, perspiciatis neque nobis. Eius, corrupti! Expedita, deserunt?",
    },
    {
      heading: "Amazon",
      date: "2018-2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum odio sint fugiat, nulla architecto possimus eius sed officiis nemo totam perferendis pariatur, perspiciatis neque nobis. Eius, corrupti! Expedita, deserunt?",
    },
    {
      heading: "Amazon",
      date: "2018-2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum odio sint fugiat, nulla architecto possimus eius sed officiis nemo totam perferendis pariatur, perspiciatis neque nobis. Eius, corrupti! Expedita, deserunt?",
    },
    {
      heading: "Amazon",
      date: "2018-2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum odio sint fugiat, nulla architecto possimus eius sed officiis nemo totam perferendis pariatur, perspiciatis neque nobis. Eius, corrupti! Expedita, deserunt?",
    },
    {
      heading: "Amazon",
      date: "2018-2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum odio sint fugiat, nulla architecto possimus eius sed officiis nemo totam perferendis pariatur, perspiciatis neque nobis. Eius, corrupti! Expedita, deserunt?",
    },
    {
      heading: "Amazon",
      date: "2018-2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum odio sint fugiat, nulla architecto possimus eius sed officiis nemo totam perferendis pariatur, perspiciatis neque nobis. Eius, corrupti! Expedita, deserunt?",
    },
    {
      heading: "Amazon",
      date: "2018-2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum odio sint fugiat, nulla architecto possimus eius sed officiis nemo totam perferendis pariatur, perspiciatis neque nobis. Eius, corrupti! Expedita, deserunt?",
    },
    {
      heading: "Amazon",
      date: "2018-2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum odio sint fugiat, nulla architecto possimus eius sed officiis nemo totam perferendis pariatur, perspiciatis neque nobis. Eius, corrupti! Expedita, deserunt?",
    },
  ];

  const [events, setEvents] = useState(data);

  return (
    <>
    <Navbar />
      <div className="timeline">
        {events.map((event) => (
          <div className="container-timeline">
            <div className="dot">.</div>
            <div className="text-box" key={event.heading}>
              <h2>{event.heading}</h2>
              <small>{event.date}</small>
              <p>{event.description}</p>
              <span className="container-arrow"></span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Timeline;
