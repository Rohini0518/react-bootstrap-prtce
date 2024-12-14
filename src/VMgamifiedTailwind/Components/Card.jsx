export default function Card() {
  return (
    <div className="relative isolate">
      <img
        className=" absoulte sm:w-full h-[600px] mt-4 hover:scale-95 rounded-4"
        src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?t=st=1734167038~exp=1734170638~hmac=007c5a1419feb7a7e18a11caff4248ec59b8edcf965123dfb5bf200988ce3889&w=1480"
      />
      <div className="absolute flex flex-wrap flex-col text-white items-start top-[60%] left-20 font-semibold">
        <p className="text-2xl font-bold">Live Training</p>
        <p>Level up your skills with real world problems </p>
        <button className=" bg-green-500 p-2 hover:bg-green-200 rounded-2">Explore Live Training</button>
      </div>
    </div>
  );
}
