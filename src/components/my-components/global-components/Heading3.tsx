interface Heading3Props {
  children: string;
}

const Heading3 = ({ children }: Heading3Props) => {
  return (
    <h1 className="text-3xl lg:text-4xl font-sans font-bold my-2 w-full">
      {children}
    </h1>
  );
};

export default Heading3;
