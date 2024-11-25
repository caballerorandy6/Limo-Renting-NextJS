interface Heading4Props {
  children: string;
}

const Heading4 = ({ children }: Heading4Props) => {
  return (
    <span className="font-mono font-bold text-xl text-white uppercase text-center">
      {children}
    </span>
  );
};

export default Heading4;
