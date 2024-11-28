import FormQuote from "@/components/my-components/form/FormQuote";
import LimoImageMenu from "@/components/my-components/global-components/LimoImageMenu";

const Reservations = () => {
  return (
    <section id="book-now" className="bg-black pb-2">
      <LimoImageMenu />
      <div className="-mt-44 w-11/12 mx-auto">
        <FormQuote />
      </div>
    </section>
  );
};

export default Reservations;
