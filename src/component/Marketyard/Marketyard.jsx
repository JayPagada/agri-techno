import React from "react";
import "./Marketyard.css";
const Marketyard = () => {
  return (
    <div className="marketYard">
      <div className="marketyardTitle">
        <h2>Agricultural produce market committee</h2>
      </div>
      <div className="para1">
        <p>
          Each state which operates APMC markets geographically divide the
          state. Markets (mandis) are established at different places within the
          state. Farmers are required to sell their produce via auction at the
          mandi in their region. Traders require a license to operate within a
          mandi. Wholesale and retail traders (e.g. shopping mall owners) and
          food processing companies cannot buy produce directly from a farmer.
        </p>
      </div>
      <div className="para2">
        <b>Some of the salient features of the APMC Model Act 2003 are as follows.</b><br/><br/> 
        1) Facilitates contract farming model.<br/> 
        2) Special market for
        perishables. <br/> 
        3) Farmers, private persons can set up own market.<br/>  
        4)Licensing norms relaxed. <br/> 
        5) Single market fee. <br/> 
        6) APMC revenue to be kham je hoo
        used for improving market infrastructure.<br/> 
      </div>
      <div className="marketyardTitle">
        <h2>MarketYards</h2>
      </div>
      <div className="twobutton">        
            <button>Rajkot</button>       
            <button>Gondal</button>
      </div>
    </div>
  );
  
};  

export default Marketyard;
