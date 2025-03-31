import CountUp from "react-countup";
// import Image from "next/image"

const CountCard = (props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 px-2 w-full md:w-1/2 lg:w-full xl:w-2/3 py-4">
      {/* <div className="w-auto rounded-full bg-primary-orange flex items-center justify-center">
        <img width={160} height={160}
          src={props.countCard.image}
          alt="sig-pic"
          className="h-full aspect-square p-4"
        />
      </div> */}
      <CountUp
        end={props.countCard.count}
        suffix=" +"
        className="text-primary-orange text-2xl md:text-4xl font-extrabold text-white"
        duration={2}
        enableScrollSpy={true}
        scrollSpyDelay={10}
      />
      <h1 className="text-xl -my-4 md:-my-2 font-semibold md:text-4xl text-violet-400 font-Montserrat">{props.countCard.title}</h1>
    </div>
  );
};

export default CountCard;