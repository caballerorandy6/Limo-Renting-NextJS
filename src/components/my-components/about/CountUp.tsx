import CountUp from "react-countup";

const CountUpReact = () => {
  return (
    <CountUp
      start={0}
      end={30}
      duration={2.75}
      separator=" "
      decimals={0}
      decimal=","
      suffix="+"
    >
      {({ countUpRef }) => (
        <div>
          <span ref={countUpRef} className="text-5xl text-red-600"></span>
        </div>
      )}
    </CountUp>
  );
};

export default CountUpReact;
