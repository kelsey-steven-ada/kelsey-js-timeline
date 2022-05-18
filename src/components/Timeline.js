import "./Timeline.css";
import TimelineEvent from "./TimelineEvent";

const Timeline = (props) => {
  const eventData = props.data.events;
  const events = [];
  for (var i = 0; i < eventData.length; i++) {
    events.push(<TimelineEvent eventData={eventData[i]} />);
  }

  return <section>{events}</section>;
};

export default Timeline;
