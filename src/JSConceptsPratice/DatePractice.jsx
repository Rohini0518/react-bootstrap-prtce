import moment from "moment";

export default function DatePractice() {
  let date = new Date();
  // let date2=new Date(year, monthIndex, day, hours, minutes, seconds)

  console.log(date); // Sat Dec 07 2024 17:13:52 GMT+0530 (India Standard Time)
  console.log(new Date().getTime());
  console.log("getday::",date.getDay())
  console.log("getdate::",date.getDate())

  // console.log("hello::", Date.now()); //milliseconds
  // console.log("seconds::", Date.now() / 1000);
  const start = moment("2024-12-07 13:30:00"); // Specific date and time
const end = moment("2024-12-07 17:00:00");

  // const now = moment(); // Current date and time
  //  console.log(now); // Displays moment object
   
//    task-2.Convert seconds into HH:MM:SS format.
   const secondsToTime=(seconds)=>{
    const hours=Math.floor(seconds/3600);
    const minutes=Math.floor((seconds%3600)/60);
    const second=seconds%60
    const time1=[hours,minutes,second]
    const timeinhours=time1.map((item,ind)=>item.toString().padStart(2,0)).join(":")
     return timeinhours
   }
 
  return (<div>
    {/* <h2>{now.format()}</h2>
    <h3>{now.format("YYYY-MM-DD")}</h3>
    <h3>{now.format("HH:MM:SS")}</h3>
    <h3>{now.format("dddd")}</h3>
    <h3>{now.format("MMMM")}</h3>
    <h3>{now.year()}</h3>
    <h3>{now.date()}</h3>
    <h3>{now.format("Do")}</h3> */}
    <h1>{"seconds-"}{end.diff(start,"seconds")}</h1>
    <h2>{end.diff(start,"minutes")}</h2>
    <h2>{end.diff(start,"hours")}</h2>   {/* task-1.Learn how to find the number of hours difference between two dates. */}
    <h2>{secondsToTime(12550)}</h2>








  </div>
  );
}
