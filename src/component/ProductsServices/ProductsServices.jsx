import React from "react";
import "./ProductsServices.css"
import Image1 from "../../assete/Fertilizers.png"
import Image2 from "../../assete/Equipment.png"
import Image3 from "../../assete/Pesticides.png"
import Image4 from "../../assete/Logistics.png"
const ProductsServices = () => {
    return (
        <div className="ProductsContainer">
            <p>
                In the Agri-techno we give the all type of information in the
                Agri-techno we give crop management,products&all type of Services.
                Agri-Techno is that type of web-site in this we provide a marketing yard
                crop prize list and other information we give a selling and buying
                options and give a equipment,seeds,pesticides,technology,etc..... also
                we give the weather forecasting in our web-site.
            </p>
            <div className="ProductsCard">
                <div className="serviceCard1">
                <div className="serviceCard">
                  <img src={Image1}/>
                    <   div className="discription">
                        <h1>Fertilizers</h1>
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                            I’m a great place for you to tell a story and let your users know a little more about you
                        </p>
                    </div>
                </div>
                <div className="serviceCard">
                  <img src={Image2}/>
                    <div className="discription">
                        <h1>Equipment</h1>
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                            I’m a great place for you to tell a story and let your users know a little more about you
                        </p>
                    </div>
                </div>
                </div>
                <div className="serviceCard2">
                <div className="serviceCard">
                  <img src={Image3}/>
                    <div className="discription">
                        <h1>Pesticides</h1>
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                            I’m a great place for you to tell a story and let your users know a little more about you
                        </p>
                    </div>
                </div>
                <div className="serviceCard">
                  <img src={Image4}/>
                    <div className="discription">
                        <h1>Logistics</h1>
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                            I’m a great place for you to tell a story and let your users know a little more about you
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsServices;
