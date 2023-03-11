// import libraries
import React from "react";

// import components
import ContactItem from "../ContactItem";

// import styles
import "./style.css";

function ContactDetails() {
  const contactDetails = {
    title: "CONTACT DETAILS",
    items: [
      {
        linkUrl: "mailto:ming13148888@gmail.com",
        linkName: "ming13148888@gmail.com"
      }
    ]
  };

  const info = {
    title: "INFO",
    items: [
      {
        linkUrl: "https://github.com/Mingzhao91",
        linkName: "GitHub"
      },
      {
        linkUrl:
          "https://drive.google.com/file/d/16IHelLmFDAhynPlWMb9gI_qjga9x-JG8/view?usp=sharing",
        linkName: "CV"
      }
    ]
  };

  const socials = {
    title: "SOCIALS",
    items: [
      {
        linkUrl: "https://www.linkedin.com/in/mingzhao-zhou-76981b23b/",
        linkName: "LinkedIn"
      }
    ]
  };

  return (
    <section className="contact-details">
      <ContactItem
        title={contactDetails.title}
        items={[...contactDetails.items]}
      />
      <ContactItem title={info.title} items={[...info.items]} />
      <ContactItem title={socials.title} items={[...socials.items]} />
    </section>
  );
}

export default ContactDetails;
