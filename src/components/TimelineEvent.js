import "./TimelineEvent.css";
import Timestamp from "./Timestamp";

const TimelineEvent = (props) => {
  return (
    <section className="timeline-event">
      <h3 className="event-person">{props.eventData.person}</h3>
      <p className="event-status">{props.eventData.status}</p>
      <Timestamp className="event-time" time={props.eventData.timestamp} />
    </section>
  );
};

export default TimelineEvent;
