type EventData = {
  id?: string;
  title?: string;
  date?: string;
  place?: string;
  slug?: string;
  description?: string;
  image?: string;
};

type EventCardProps = {
 eventData: EventData;
};

import "./EventCard.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { resolveResourceImageUrl } from "../../utils/resolveResourceImageUrl";


export function EventCard({ eventData }: EventCardProps) {
  const path = `/events-and-resources/events/${eventData.slug ?? eventData.id ?? ""}`;
  const imageUrl = resolveResourceImageUrl(eventData.image);
  const year = new Date(eventData.date ?? "").getFullYear();
  const month = new Date(eventData.date ?? "").toLocaleString("default", { month: "long" });
  const day = new Date(eventData.date ?? "").getDate();
  //   const formattedDate = `${day} ${month} ${year}`;

  const navigate = useNavigate();
  const handleClick = (event) => {
    const target = event.target as HTMLElement | null;

    // Ignore clicks that happen on the link or anything inside it (icon, span, etc.)
    if (target?.closest("a")) return;

    navigate(path);
  };


  return (
    <li className="event-card">
      <article onClick={handleClick}>
        <div>
          <div className="info">
            <div>
              <h3>
                <NavLink to={path}>{eventData.title}</NavLink>
              </h3>
              <div>
                <p>{eventData.description}</p>
              </div>
            </div>
            <div>
              <div>
                <p>Place: {eventData.place}</p>
              </div>
            </div>
          </div>

          <div className="date">
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
          </div>
        </div>
        <div>{imageUrl ? <img src={imageUrl} alt="" /> : null}</div>
      </article>
    </li>
  );
}
