import React from "react";
import gondal from "../../assete/gondal.jpg";
import gondal2 from "../../assete/gondal2.jpg";
import "./Gondal.css"
const Gondal = () => {
    return(
        <div>
            <div className="marketyardImage">
                <img src={gondal} height="100px" />
                <img src={gondal2} height="100px" />
            </div>
            <div className="marketyardTitle">
                <h3>APMC Gondal</h3>
                <div className="marketyardPara">
                    <p>
                        APMC Gondal is an enterprise focused on bringing the vegetable market closer to your home while keeping the essence of great range & fabulous quality alive.
                    </p>
                    <p>
                        This website is another one of the many ways in which we offer door-step delivery of fresh fruits & vegetables.
                        Ordering here is a simple 3 step process which you can begin by logging in. Choose your needed commodities, browse tnrough our offers and mention the correct address & phone number. We will pick your products as per your need and deliver it on the time promised.
                    </p>
                    <p>
                        Enjoy shopping online or visit on of our APMC Gondal online website.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Gondal;