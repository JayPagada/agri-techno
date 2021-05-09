import React from "react";
import "./BuyerSeller.css";
import image1 from "../../assete/agriculture1.jpg";
import image2 from "../../assete/agriculture2.jpg";
import image3 from "../../assete/agriculture3.jpg";
import { Card } from "antd";

const BuyerSeller = () => {
    return (
            <div className="buying">
                    <div className="card1 buyingCard">
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src={image1} />}
                        >

                            <div className="buyingTitle">Pesticides</div>
                            <div className="description">  I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                            </div>
                        </Card>
                    </div>

                    <div className="card2 buyingCard">
                        <Card
                            hoverable
                            style={{ width: 300}}
                            cover={<img alt="example" src={image2} />}
                        >
                            <div className="buyingTitle">Crop</div>
                            <div className="description">  I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                            </div>
                        </Card>
                    </div>
                    <div className="card3 buyingCard">
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src={image3} />}
                        >
                            <div className="buyingTitle">Equipment</div>
                            <div className="description">  I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                            </div>
                        </Card>
                    </div>
            </div>
    );
};

export default BuyerSeller;