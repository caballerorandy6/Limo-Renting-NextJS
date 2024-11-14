const ContactIFrame = () => {
  return (
    <div className="w-full mt-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12421.81918736557!2d-80.31028094842132!3d25.802156613482968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b98a0881a333%3A0xba4c0c3bc1955235!2sAmerican%20Transportation%20%26%20Limo%20services!5e0!3m2!1sen!2sus!4v1731137175177!5m2!1sen!2sus"
        width="600"
        height="450"
        className="border w-8/12 mx-auto rounded shadow-md mb-16"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactIFrame;
