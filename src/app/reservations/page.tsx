import FormQuote from "@/components/my-components/form/FormQuote";
import LimoImageMenu from "@/components/my-components/global-components/LimoImageMenu";

const Reservations = () => {
  return (
    <section id="book-now" className="w-full">
      <LimoImageMenu />
      <div className="-mt-44 flex justify-center">
        <FormQuote />
      </div>
    </section>
  );
};

export default Reservations;
