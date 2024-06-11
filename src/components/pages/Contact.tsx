import IconTitle from "@/components/modules/IconTitle";
import EmailComponent from "../modules/EmailComponent";

const Contact = () => {
  return (
    <>
      <IconTitle variant="Contact" />
      <h1 className="heading">
        Let's work <span className="colorize">together</span>
      </h1>
      <p className="subheading lighten ySpace">
        {process.env.NEXT_PUBLIC_MAIL}
      </p>
      <div className="email_container">
        <EmailComponent />
      </div>
    </>
  );
};

export default Contact;
