import React from 'react';
import '../Styles/studioCard.scss';


const studioCardUI = ( props ) => {
  
  const starsInnerStyle = {
  width: props.roundedRating
};

  return (
      <article className="studioCard">
        <header className="cardCover">
          <img src={props.image} alt="Group Yoga in studio" className="studioImg"/>
          <h4 className="studioName">{props.name}</h4>
          <div className="studioFee">
            {props.fee} 
            <div className="dropInText">drop in</div>
          </div>
        </header>
        <main className="studioInfo">
          <address className="contactInfo">
            <p className="address">{props.address}</p>
            <a className="phoneNum" href="tel:3034162958">{props.phone}</a>      
          </address>
          <div className="missionContainer">
            <h4 className="missionHeading">Mission:</h4>
            <p className="studioMission">{props.mission}</p>
          </div>
          <div className="inline">
            <div className="starsOuter">
            <div className="starsInner" style={starsInnerStyle}>
            </div>
          </div>
          <p className="studioRating">{props.rating}</p>
          </div>
          <a href={props.link} className="studioLink" target="_blank">
          learn more
          {/* {props.name} Website */}
            </a>
        </main>
      </article>
  )
}

export default studioCardUI;