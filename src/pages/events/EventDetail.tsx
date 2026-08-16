import { useParams } from "react-router-dom";
import Events from "../../data/events/events.json";
import { H1 } from "../../components/header-and-footer/H1";
import "./EventDetail.css";
import { useEffect, useState } from "react";

export function EventDetail() {
  const { slug } = useParams();
  const eventData = Events.find((ev) => ev.slug === slug || ev.id === slug);
  const formattedDate = eventData?.date
    ? new Date(eventData.date).toLocaleDateString([], {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const [Content, setContent] = useState<React.ComponentType | null>(null);
  useEffect(() => {
      import(`../../data/events/${eventData?.slug}.mdx`).then((module) => {
        setContent(() => module.default);
      });

  }, [eventData]);
  

  return (
    <main id="main-content" className="event-detail">
      <H1>{eventData?.title}</H1>
      <p>
        {formattedDate}
        {formattedDate ? ", at " : ""}
        {eventData?.place}
      </p>

      <p>{eventData?.description}</p>

      {Content && (
        <div style={{ marginTop: "2rem" }}>
          <Content />
        </div>
      )}
    </main>
  );
}
