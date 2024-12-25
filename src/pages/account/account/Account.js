
import React from "react";
import "../../styles/account/Account.css";
import cardSections from "../account/AccountcardData.js";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();

  const handleCardClick = (url) => {
    navigate(url);
  };

  return (
    <div className="account-page">
      <h1 className="accountpage-title">
        <span>My Account</span>
      </h1>
      <hr />
      <div className="account-container">
        {cardSections.map((section, index) => (
          <section key={index} className="account-section">
            <h2 className="account-section-title">{section.title}</h2>
            <div className="account-card-container">
              {section.cards.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="account-card"
                  onClick={() => handleCardClick(card.link)}
                >
                  {card.icon}
                  <p className="account-card-text">{card.text}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
