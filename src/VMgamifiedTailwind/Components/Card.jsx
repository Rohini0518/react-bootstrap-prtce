export default function Card({src,heading,text,label}) {
  return (
    <div className="relative isolate">
      <img
        className=" absoulte sm:w-full h-[600px] mt-4 hover:scale-95 rounded-4"
src={src}      />
      <div className="absolute flex flex-wrap flex-col text-white items-start top-[60%] left-20 font-semibold">
        <p className="text-2xl font-bold">{heading}</p>
        <p>{text}</p>
        <button className=" bg-green-500 p-2 hover:bg-green-200 rounded-2">{label}</button>
      </div>
    </div>
  );
}
