import moment from "moment";
import { useState } from "react";

export default function DatePractice() {
  const now = moment();
  const start = moment("2024-12-07 13:30:00"); // Specific date and time
  const end = moment("2024-12-07 17:00:00");
  //    task-2.Convert seconds into HH:MM:SS format.
  const secondsToTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const second = seconds % 60;
    const time1 = [hours, minutes, second];
    const timeinhours = time1
      .map((item, ind) => item.toString().padStart(2, 0))
      .join(":");
    return timeinhours;
  };
  // task-3 Try count down timer based on available seconds.
  const [timer,setTimer]=useState(0)

  const startCountDown = (seconds) => {
    let remainingSeconds = seconds;
    const interval = setInterval(() => {
      remainingSeconds -= 1;
      if (remainingSeconds <= 0) {
        setTimer("Time up");
        clearInterval(interval);
      } else {
        setTimer(secondsToTime(remainingSeconds));
      }
    }, 1000);
  };

  return (
    <div>
      <h1>{now.format()}</h1>
      <h2>
        {"Hours-"}
        {end.diff(start, "hours")}
      </h2>{" "}
      {/* task-1.Learn how to find the number of hours difference between two dates. */}
      <h2>{secondsToTime(12550)}</h2>
      {/* task-4 */}
      <button type="button" className="btn btn-danger" onClick={() => startCountDown(10)}>Start Countdown</button>
      <p>{timer}</p>
    </div>
  );
}
