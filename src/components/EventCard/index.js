import React from "react";
import { EventCardType } from "../Store/helper";
import Expanded from "./Expanded";
import Thumbnail from "./Thumbnail";
import "./event_card.scss";
import { useSelector } from "react-redux";

const EventCard = ({ date, type, postData }) => {
  const eventsData = useSelector((state) => state.app.eventsData);
  if (type === EventCardType) {
    return eventsData?.at()?.posts?.map((__it) => {
      if (__it.calendardatetime.split("T").at() === date) {
        return <Thumbnail data={__it} key={date} date={date} />;
      }
    });
  } else {
    return <Expanded data={postData} />;
  }
};
export default EventCard;
