//import libraries
import React from "react";

// import style
import "./style.css";

function ContactItem(props) {
  return (
    <div className="contact-item-wrapper mb-3">
      <p className="contact-details-title">{props.title}</p>
      <div className="contact-details-list">
        <ul className="contact-details-list">
          {props.items
            ? props.items.map((item) => {
                return (
                  <li key={item.linkUrl} className="contact-item mb-1">
                    <a
                      className="text-light contact-link"
                      href={item.linkUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {item.linkName}
                    </a>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
    </div>
  );
}

export default ContactItem;
