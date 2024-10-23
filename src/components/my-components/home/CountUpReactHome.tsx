import CountUp from "react-countup";

const CountUpReactHome = () => {
  return (
    <CountUp
      start={1}
      end={1000}
      duration={3}
      separator=""
      decimals={0}
      decimal=","
      suffix="+"
    >
      {({ countUpRef }) => (
        <div>
          <span
            ref={countUpRef}
            className="relative text-4xl text-red-500 font-sans font-bold"
          ></span>
        </div>
      )}
    </CountUp>
  );
};

export default CountUpReactHome;
