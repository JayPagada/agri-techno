import React from "react";
import "./Marketyard.css";
import marketyard from "../../assete/marketyard.jpg";
import marketyard2 from "../../assete/marketyardgondal.jpg";

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
        4) Licensing norms relaxed. <br/>
        5) Single market fee. <br/> 
        6) APMC revenue to be used for improving market infrastructure.<br/>
      </div>
      <div className="marketyardTitle">
        <h2>MarketYards</h2>
      </div>
      <div className="twobutton">        
            <button><b>Rajkot</b></button>
            <button><b>Gondal</b></button>
      </div>
        <div className="marketyardImage">
            <img src={marketyard} height="100px" />
            <img src={marketyard2} height="100px" />
        </div>
        <div className="marketyardTitle">
            <h3>શ્રી સરદાર વલ્લભભાઇ પટેલ માર્કેટયાર્ડ</h3>
            <div className="marketyardPara">
            <p>
                શ્રી કમિશ્નર સાહેબ, રાજકોટ વિભાગ, ગુજરાત રાજ્ય, રાજકોટના જાહેરનામા નંબરઃ એમ.કે.ટી./૩. જો ડબલ્યુ/ એસ.૧૭૯/ તા.૭.૨.૧૯૬૪ થી રાજકોટ જીલ્લાના રજકોટ તાલુકાને બજાર વિસ્તાર તરીકે જાહેર કરવામાં આવેલ,ત્યાર બાદ ડાયરેક્ટર ઓફ એગ્રીકલ્ચર માર્કેટીંગ એન્ડ રૂરલ ફાયનાન્સ,ગુજરાત રાજ્ય, અમદાવાદના જાહેરનામા નંબરઃ બનણ/૩૪/ડી તા.૧૨.૧૨.૧૯૬૬ થી ઉપરોક્ત બજારવિસ્તારમાં રાજકોટ જીલ્લાના પડધરી તથા લોધીકા તાલુકાઓનો સમાવેશ કરી બજાર વિસ્તારને વિસ્તારવામાં આવેલ,
            </p>
            <p>
                નાયબ સચિવશ્રી, કૃષિ અને સહકાર વિભાગ ,સચિવાલય, ગાંધીનગર તરફથી તેઓશ્રીના જાહેરનામાં નાં. જીએચકેએચ /૩૯/૨૦૦૬/ એપીએમ/૧૦૯૯/૨૭૮/ગ તા.૨૪મી જુલાઇ ૨૦૦૬ થી ગુજરાત ખેત ઉત્પન્ન બજાર અધિનિયમ,૧૯૬૩ ની કલમ પર અને કલમ ૫ હેઠળ શ્રી ખેતીવાડી ઉત્પન્ન બજાર સમિતિ,રાજકોટના બજાર વિસ્તારને બે જુદા જુદા વિસ્તારઃ-(૧) રાજકોટ-લોધીકા તાલુકાના બનેલા બજાર વિસ્તાર અને (૨) પડધરી તાલુકાના બનેલા બજાર વિસ્તારમાં વિભાજીત કરેલ કોઇ રાજકોટ જીલ્લાના પડધરી તાલુકાને શ્રી ખેતીવાડી ઉત્પન્ન બજાર સમિતિ - રાજકોટના બજાર વિસ્તારમાંથી છુટો કરવામાં આવેલ છે. બજાર ધારાનો અમલ તા.૧.૧૦.૧૯૬૬ થી કરવામામ આવેલ છે.
            </p>
            </div>
        </div>

    </div>
  );
  
};  

export default Marketyard;
