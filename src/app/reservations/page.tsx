//Custom Components
import FormQuote from "@/components/shared/forms/FormQuote";
import LimoImageMenu from "@/components/shared/ui-common/LimoImageMenu";

const Reservations = () => {
  return (
    <section id="book-now" className="bg-black">
      <LimoImageMenu />
      <div className="py-16 w-11/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-6/12 mx-auto">
        <FormQuote />
      </div>
    </section>
  );
};

export default Reservations;
