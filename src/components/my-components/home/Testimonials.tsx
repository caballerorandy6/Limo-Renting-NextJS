import ReviewsButton from "../buttons/ReviewsButton";
import Heading from "../global-components/Heading";
import Heading3 from "../global-components/Heading3";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="w-8/12 mx-auto py-16">
        <div className="w-6/12">
          <Heading>Testimonials</Heading>
          <Heading3>What Customers Are Saying</Heading3>
          <div className="flex justify-around items-center gap-10">
            <ReviewsButton>dbwhcbbvcefbh</ReviewsButton>
            <ReviewsButton>Leave a Review</ReviewsButton>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Testimonials;
