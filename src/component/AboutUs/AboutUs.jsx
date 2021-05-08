import React from "react";
import "./AboutUs.css";
import image1 from "../../assete/agriculture1.jpg";
import image2 from "../../assete/agriculture2.jpg";
import image3 from "../../assete/agriculture3.jpg";
import image4 from "../../assete/agritechno2.jpg";
import { Card } from "antd";

const { Meta } = Card;
const AboutUs = () => {
  return (
    <div className="container">
      <h1>About Agri Techno</h1>
      <div className="para">
        In the Agri-techno we give the all type of information in the
        Agri-techno we give crop management,products&all type of Services.
        Agri-Techno is that type of web-site in this we provide a marketing yard
        crop prize list and other information we give a selling and buying
        options and give a equipment,seeds,pesticides,technology,etc..... also
        we give the weather forecasting in our web-site.
      </div>
      <div className="maincard">
        <div className="twocard1">
          <div className="card1">
            <Card
              hoverable
              style={{ width: 500, marginLeft: 50 }}
              cover={<img alt="example" src={image1} />}
            >
              <Meta
                title="Europe Street beat"
                description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
              />
            </Card>
          </div>

          <div className="card2">
            <Card
              hoverable
              style={{ width: 500, marginLeft: 50 }}
              cover={<img alt="example" src={image2} />}
            >
              <Meta
                title="Europe Street beat"
                description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
              />
            </Card>
          </div>
        </div>

        <div className="twocard2">
          <div className="card3">
            <Card
              hoverable
              style={{ width: 500, marginLeft: 50 }}
              cover={<img alt="example" src={image3} />}
            >
              <Meta
                title="Europe Street beat"
                description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
              />
            </Card>
          </div>

          <div className="card4">
            <Card
              hoverable
              style={{ width: 500, marginLeft: 50 }}
              cover={<img alt="example" src={image4} />}
            >
              <Meta
                title="Europe Street beat"
                description="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
