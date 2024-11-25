interface Heading3Props {
  children: string;
}

const Heading3 = ({ children }: Heading3Props) => {
  return <h1 className="text-5xl font-sans font-bold my-2">{children}</h1>;
};

export default Heading3;
