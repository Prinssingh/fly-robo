import React from "react";
import "../../styles/account/Account.css";
import cardSections from '../account/AccountcardData.js'; 

export default class Account extends React.Component {
    render() {
        return (
            <div className="account-page">
                <h1 className="accountpage-title">
                    <span>My Account</span>
                </h1>
                <hr />
                <div className='account-container'>
                    {cardSections.map((section, index) => (
                        <section key={index} className="account-section">
                            <h2 className="account-section-title">{section.title}</h2>
                            <div className="account-card-container">
                                {section.cards.map((card, cardIndex) => (
                                    <div className="card" key={cardIndex}>
                                        {card.icon}
                                        <p>
                                            {card.isLink ? (
                                                <a href="#">{card.text}</a>
                                            ) : (
                                                card.text
                                            )}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        );
    }
}

