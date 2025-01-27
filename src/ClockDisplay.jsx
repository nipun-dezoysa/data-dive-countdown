import React from "react";
import Countdown from "react-countdown";
const Completionist = () => (
  <>
    <div className="text-center text-9xl font-bold text-[#fad02c] font-teko">
      TIME IS OVER
    </div>
    <div className="font-semibold text-4xl font-caveat">
      Be prepared to present your ideas!
    </div>
  </>
);

function ClockDisplay() {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <>
          <div className="text-center text-3xl md:text-6xl font-bold  font-teko">
            The clock is ticking!
          </div>
          <div className="flex items-center gap-12">
            <div className="text-center">
              <div className="time">{formatTime(hours)}</div>
              <div className="time-sub">Hours</div>
            </div>
            <div className="text-center">
              <div className="time">{formatTime(minutes)}</div>
              <div className="time-sub">Minutes</div>
            </div>
            <div className="text-center">
              <div className="time">{formatTime(seconds)}</div>
              <div className="time-sub">Seconds</div>
            </div>
          </div>
        </>
      );
    }
  };
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  const sriLankanOffset = 5.5 * 60 * 60 * 1000;
  return (
    <div className="z-30 max-md:w-[90%] flex flex-col items-center gap-2 bg-white/5 backdrop-blur-sm p-10 rounded-3xl">
      <Countdown
        date={new Date("2026-01-22T12:10:00+05:30")}
        renderer={renderer}
      />
    </div>
  );
}

export default ClockDisplay;
