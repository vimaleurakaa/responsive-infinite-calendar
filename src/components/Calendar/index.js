import { useEffect, useState } from "react";
import { formatDate } from "../Store/helper";
import { activeMonth, setEventsData } from "../Store/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import demoData from "../Store/test.json";
import HairDairyCalendar from "../../lib/calendar";
import "../../lib/calendar/styles.css";
import "./calendar.scss";
import ModalContainer from "../Modal";
import EventCard from "../EventCard";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import LoadingContainer from "../Loader";

const Calendar = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [swiper, setSwiper] = useState(null);
  const [posts, setPosts] = useState();
  const eventsData = useSelector((state) => state.app.eventsData);

  const today = new Date();
  let currentMonth = null;

  useEffect(() => {
    const __node = document.querySelector(".Cal__Container__root");
    window.addEventListener("resize", () => {
      if (__node) __node.style.width = window.innerWidth + "px";
    });
  });

  useEffect(() => {
    const fetchData = () => {
      const body = {
        requestobjects: [
          {
            posts: {
              operationtype: "read",
              id: {
                return: true,
              },
              userid: {
                searchvalues: ["adbef521-7cf6-4344-af48-a9480df46549"],
                return: true,
              },
              iscalendarentry: {
                searchvalues: ["true"],
                return: true,
              },
              media: {
                return: true,
              },
              rating: {
                return: true,
              },
              text: {
                return: true,
              },
              privacy: {
                searchvalues: [18],
                return: true,
              },
              typeofday: {
                return: true,
              },
              calendardatetime: {
                return: true,
                sort: "descending",
              },
              maxitemcount: "20",
              continuationtoken: null,
            },
          },
        ],
      };

      const requestObj = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };

      fetch("https://api.quinn.care/graph", requestObj)
        .then((res) => res.json())
        .then((data) => {
          // let tempData = {};
          // res.responseobjects[0].posts.map((item) => {
          //   const newDate = dayjs(item.calendardatetime);
          //   tempData[
          //     `${newDate.format("D")}-${newDate.format("M")}-${newDate.format(
          //       "YY"
          //     )}`
          //   ] = item;
          // });
          console.log(data.responseobjects);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    dispatch(setEventsData(demoData));
    //fetchData();
  }, []);

  useEffect(() => {
    const __data = {};
    demoData.at()?.posts.map((post) => {
      const { calendardatetime } = post;
      __data[formatDate(calendardatetime)] = post;
    });
    setTimeout(() => {
      setPosts(__data);
    }, 2000);
  }, []);

  const getCurrentMonth = () => {
    const getRootNode = document.querySelectorAll(
      ".Cal__Month__rows.calendar__month"
    )[2];
    const scrollIntoView = getRootNode.dataset?.month;
    if (currentMonth !== scrollIntoView) {
      currentMonth = scrollIntoView;
      dispatch(activeMonth(currentMonth));
    }
  };

  const modalOuterFocused = (e) => {
    e.target.classList.contains("show__modal") && setActive(!active);
  };

  const expandContent = (selected) => {
    const slideTo = (index) => swiper.slideTo(index, 0);

    Object.entries(posts).map(([key, _], i) => {
      if (key === selected) {
        swiper && slideTo(i);
        setActive(true);
      }
    });

    console.log(selected);
  };

  return (
    <div className="Calendar__root_container">
      {posts && (
        <HairDairyCalendar
          selected={today}
          width={window.innerWidth}
          height={window.innerHeight}
          rowHeight={160}
          onScroll={() => getCurrentMonth()}
          onSelect={(e) => expandContent(e.dataset.date)}
          displayOptions={{
            showOverlay: false,
            showHeader: false,
            showTodayHelper: true,
          }}
          theme={{
            selectionColor: "rgb(146, 118, 255)",
            textColor: {
              default: "#333",
              active: "#FFF",
            },
            weekdayColor: "#fff",
            headerColor: "rgb(127, 95, 251)",
            floatingNav: {
              background: "rgba(81, 67, 138, 0.96)",
              color: "#FFF",
              chevron: "#FFA726",
            },
          }}
        />
      )}
      {posts && (
        <ModalContainer state={active} close={modalOuterFocused}>
          <Swiper
            onSwiper={setSwiper}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
          >
            {Object.entries(posts).map(([key, value]) => (
              <SwiperSlide key={key}>
                <EventCard postData={value} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ModalContainer>
      )}
      {!posts && <LoadingContainer />}
    </div>
  );
};
export default Calendar;
