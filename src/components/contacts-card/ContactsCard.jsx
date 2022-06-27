import React from "react";
import BlueBtn from "../ui/blu-btn/BluBtn";
import "./ContactsCard.scss";

const ContactsCard = () => {
  return (
    <div className="contacts wrapper">
      <div
        className="contacts-card"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/Contacts.png"
          })`,
        }}
      >
        <div className="contacts-card__content">
          <span className="green-span">Cвязаться с нами</span>
          <h2 className="black-h2">У вас eсть какие-нибудь вопросы?</h2>
          <BlueBtn props={"Контакты"} link={"/contacts"} />
        </div>
      </div>
    </div>
  );
};

export default ContactsCard;
