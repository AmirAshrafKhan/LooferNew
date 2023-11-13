import React, { useEffect } from 'react';
import Header from '../components/resuableComponents/Header';
import Footer from '../components/resuableComponents/Footer';
import { sha256 } from 'js-sha256';
import axios from 'axios';
// import  base64json   from 'base64json';
const base64json=require("base64json") 


const Payments=()=>{
    useEffect(() => {
        var JSONDataPayload = {
      
            "merchantId": "MERCHANTUAT",
            "merchantTransactionId": "MT"+ Math.floor(new Date()),
            "merchantUserId": "MUID123",
            "amount": 20*100,
            "redirectUrl": "https://webhook.site/redirect-url",
            "redirectMode": "REDIRECT",
            "callbackUrl": "http://localhost:8000/calback",
            "mobileNumber": "9999999999",
            "paymentInstrument": {
              "type": "PAY_PAGE"
            }
          }
              
              let encoded = base64json.stringify(JSONDataPayload, null, 2);
              var data = `${encoded}/pg/v1/pay`+'099eb0cd-02cf-4e2a-8aca-3e6c6aff0399'
          
              var sh = sha256(data);
          
              var fnal = `${sh}###1`
        
        const options = {
          method: 'POST',
          url: 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY': fnal
          },

          data: {

            request: encoded,
          },
        };
    
        axios
        .post(options.url,   options.data , {headers:options.headers})
        .then((response) => {
          console.log('Data created:aaaaaaa', response.data);
        })
        .catch((error) => {
          console.error('Error creating data:', error);
        });
      }, []);
    return (
        <p>Payment Page </p>
        
       
    )
}
export default Payments