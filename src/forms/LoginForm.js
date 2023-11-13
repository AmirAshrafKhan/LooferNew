import React, { useState,useEffect } from "react";
import * as Yup from "yup";
// import { Formik,  Field } from 'formik';
import { useFormik } from "formik";
import { Grid, Box, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, userLogin, userRegistration } from "../reducers/action";
import cookie from 'react-cookies'

 var baseUrl= "https://loofer.bellazza.in/api"
//  var baseUrl= "http://127.0.0.1:8000/api"
// var baseUrl= "http://api.loofer.in/api"




const initialValues = {
  name: "",
  lastname: "",
  email: "",
  mobile: "",
  password: "",
  gender: "",
};
const SignInSchema = Yup.object().shape({
  name: Yup.string().required("name Required"),
  lastname: Yup.string().required("Last name Required"),
  email: Yup.string().required("email Required"),
  mobile: Yup.string()
    .min(10, "enter valid 10 digit Mobile number")
    .required("mobile Required"),
  password: Yup.string()
    .min(6, "password minimum  6 length")
    .required("Password Required"),
  gender: Yup.string().required("gender Required"),
  username: Yup.string().required("Username Required"),
});
const token = localStorage.getItem("token");
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { userInfo, status, error } = useSelector((state) => state.userLogin);

  const [step, setStep] = useState("one");
  const [resMsg, setresMsg] = useState("");
  const [loginResponse, setLoginResponse] = useState("");
  

  const { values, errors, touched, handleBlur, handleChange} =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignInSchema,
      onSubmit: (values) => {
        console.log(values, "values");
      },
    });

    useEffect(() => {
     
    
    }, [])
    
    
    const handleSubmit = (e)=>{
      console.log("hi",e);
    }
    

  // const handleRegistration=async()=>{

  // 	dispatch(userRegistration(values));

  // 		try {
  // 		  const response = await axios.post("https://loofer.bellazza.in/api/user/register",values,);
  // 		 console.log(response,'response')
  // 		  setresMsg(response.data.message);
  // 		} catch (error) {
  // 		  if(error.response && error.response.data && error.response.data.errors.email){
  // 			  console.log(error.response.data.errors.email[0],'enter');
  // 		  		setresMsg(error.response.data.errors.email[0])
  // 				  setStep("one")

  // 			}else{
  // 				setresMsg("");

  // 			}
  // 		}
  // 	  }

  // const handleRegistration = async () => {
  //   // dispatch(userRegistration(values));
  //   // navigate("/");
  
  //   const expires = new Date()
  //  expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14)
 
  // //  {
          
       
  //         // headers: {
           
  //         //   "Content-Type": "application/x-www-form-urlencoded",
  //         //   "cache-control": "no-cache",
  //         // },
  // // }

  
  // console.log("cookie.load", cookie.load("csrftoken"));
  //   try {
  //     const response = await axios
  //       .post(`${baseUrl}/user/register`, values ,  {  headers: {
        
  //         'Content-Type': 'application/json',
  //       }})
  //       .then((response) => {
  //         console.log(response, "response");
  //       });

  //     console.log(response, "response");

  //     // Check if the registration was successful based on the response status code
  //     if (response.status === 200) {
  //       // Registration successful, you can redirect or show a success message
  //       console.log(response, "response");
  //       setresMsg("Registration successful");
  //     } else {
  //       // Handle other types of errors
  //       setresMsg("An error occurred during registration");
  //       setStep("one");
  //     }
  //   } catch (error) {
  //     // Handle network errors or unexpected errors
  //     console.error(error);

  //     if (error.response && error.response.data && error.response.data.errors) {
  //       // Check if there are errors related to the "email" field
  //       if (error.response.data.errors.email) {
  //         console.log(error.response.data.errors.email[0], "email error");
  //         setresMsg(error.response.data.errors.email[0]);
  //         setStep("one");
  //       } else {
  //         // Handle other errors
  //         setresMsg("An error occurred during registration");
  //         setStep("one");
  //       }
  //     } else {
  //       // Handle unexpected errors
  //       setresMsg("An error occurred during registration");
  //       setStep("one");
  //     }
  //   }
  // };

  const handleRegistration = async () => {
    const expires = new Date();
    expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);
  
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
   
  
    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(values),
    };
  
    try {
      const response = await fetch(`${baseUrl}/user/register`, requestOptions);
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData, "response");
        setresMsg("Registration successful");
      } else {
        console.error("Error occurred during registration");
        setresMsg("An error occurred during registration");
        setStep("one");
      }
    } catch (error) {
      console.error(error);
      setresMsg("An error occurred during registration");
      setStep("one");
    }
  };

  // const handleLogin = async () => {
  //   setLoginResponse("");
  //   try {
      
  
  //     // const loginResponse = await dispatch(loginUser({ login: values.mobile, password: values.password }));
  
  //     // if (loginResponse.error) {
  //     //   console.log("Login Error:", loginResponse.error);
  //     //   setLoginResponse("Login failed. Please check your credentials.");
  //     //   return;
  //     // }
  //     // console.log("what???",loginResponse?.payload.token)
  //     // const token = loginResponse?.payload.token;
  
  //     const axiosConfig = {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         "cache-control": "no-cache",
  //       },
  //     };
  
  //     const response = await axios.post(`${baseUrl}/login`, {
  //       login: values.mobile,
  //       password: values.password,
  //     }, axiosConfig);
  
  //     console.log("Response:", response);
  
  //     if (response.status === 200) {
  //       const userData = response.data.user;
  
  //       localStorage.setItem("token", token);
  //       localStorage.setItem("user_id", userData.id);
  //       localStorage.setItem("user_name", userData.name);
  //       localStorage.setItem("user_email", userData.email);
  
  //       navigate("/");
  //       setLoginResponse(response.data.message);
  //     } else {
  //       setLoginResponse("Login failed. Please try again later.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  
  //     if (error.response) {
  //       const { data } = error.response;
  //       if (data && data.errors && data.errors.login) {
  //         setLoginResponse(data.errors.login[0]);
  //       } else if (data && data.message) {
  //         setLoginResponse(data.message);
  //       } else {
  //         setLoginResponse("An error occurred during login. Please try again later.");
  //       }
  //     } else {
  //       setLoginResponse("An error occurred during login. Please try again later.");
  //     }
  //   }
  // };
  const handleLogin = async () => {
    setLoginResponse("");
    try {
      const axiosConfig = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'cache-control': 'no-cache',
        },
        body: new URLSearchParams({
          login: values.mobile,
          password: values.password,
        }),
      };
  
      const response = await fetch(`${baseUrl}/login`, axiosConfig);
  
      if (response.ok) {
        const responseData = await response.json();
        console.log("Response:", responseData);
  
        const userData = responseData.user;
  
        localStorage.setItem("token", responseData.token);
        localStorage.setItem("user_id", userData.id);
        localStorage.setItem("user_name", userData.name);
        localStorage.setItem("user_email", userData.email);
  
        navigate("/");
        setLoginResponse(responseData.message);
      } else {
        setLoginResponse("Login failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
  
      if (error.response) {
        const { data } = error.response;
        if (data && data.errors && data.errors.login) {
          setLoginResponse(data.errors.login[0]);
        } else if (data && data.message) {
          setLoginResponse(data.message);
        } else {
          setLoginResponse("An error occurred during login. Please try again later.");
        }
      } else {
        setLoginResponse("An error occurred during login. Please try again later.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "white",
        marginTop: 40,
        padding: 20,
        marginBottom: 40,
      }}
    >
      <h3 style={{ textAlign: "center", fontSize: 16 }}>
        Login with The Souled Store
      </h3>
      <Box
        style={{
          display: "flex",
          marginLeft: 30,
          marginRight: 30,
          border: "1px solid grey",
        }}
      >
        <Box
          onClick={() => setStep("one")}
          style={{
            background: step === "one" ? "rgb(51 65 127)" : "",
            textAlign: "center",
            color: step === "one" ? "white" : "black",
            width: "100%",
            padding: 12,
            cursor: "pointer",
          }}
        >
          Login
        </Box>
        <Box
          onClick={() => setStep("two")}
          style={{
            width: "100%",
            padding: 12,
            textAlign: "center",
            background: step === "two" ? "rgb(51 65 127)" : "",
            color: step === "two" ? "white" : "black",
            cursor: "pointer",
          }}
        >
          Register
        </Box>
      </Box>
      <Box
        style={{
          background: "#e6e7e8",
          padding: 20,
          marginTop: 20,
          border: "1px solid lightgrey",
          marginLeft: 30,
          marginRight: 30,
        }}
      >
        <Box
          style={{
            display: "flex",
            marginLeft: 30,
            marginBottom: 20,
            marginRight: 30,
          }}
        >
          <Box
            style={{
              background: "white",
              textAlign: "center",
              color: "black",
              width: "90%",
              padding: 8,
              border: "1px solid grey",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0VCQzcwQjAxQjgxMTFFNzg3RTU4QkVEMzg3QjYxRkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0VCQzcwQjExQjgxMTFFNzg3RTU4QkVEMzg3QjYxRkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRUJDNzBBRTFCODExMUU3ODdFNThCRUQzODdCNjFGRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRUJDNzBBRjFCODExMUU3ODdFNThCRUQzODdCNjFGRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkkvD78AAASwSURBVHjalFddaxxVGH7O2dndmc1Omt0YqavpUiMFFas3ihetCJWKQi8qgiAIFbxqoVDvBFHQW2/8C96LQqlYrAGFiohFkKbdNigkaZM2bUKSdT9mdmeO75md2T3nzGzSnLCbmfPxPu/n855lQoi7f/y55F5fWIVdKoBBHfJNIHska8mJcftGq16nh7mnZ/DasbmmdfX3f2vvfHkRTi+Al88NNjEGJkT8bMDRNKP1cAg0UIDFr4M1gMtZkiFlDc4JWEEYfb6+8KZrNW6vNwnUnZ1xNZ2FFBYL1iHkfDInNPtHO6DtYfEqp3+ra9tYuHWvaTl2PrI02qx4LdrMVCulBQOLhgEQyh76C8iaVj+AH4QRnEVIeVqfKFhD2RKr5BRgMZYRDCNs2h6h2EnzOfrqixCLW22ULI76pAOXjJFrHY/CFwQIpcakJGMj71hJTAcSWWYOCVUhRTEZxy5ZuLTTxbsvzuLUiWdx9PkapqZK0XqHkmmn2cHZLy5ihRSrOPmhWCsJvBGskVkJUOxVVTe5dGe7jfMnX8AnF95I6ewQULVaQpE84YdCyyGeqhADTCseobifPkvbHZw48kQmqDqkq7kuLrY4didTYiqEroxQSzdWTPh9vHX8SCZYu9WNBPUo0eR+zvRKj4BDRZuhEiq4UFwdr7Wp7g9WJvDqy3UN8OHD//D5V5dxe20LdiEXZXeTYj1Fbk9ZzEc1keYfBTyJr1SoTUk1VynjyVpF237ll0XM/7aIoFpGng8OVGT5cB4RSspi1dVDF5uMqdSzjFlAD12vh3y+ONzS7frYKjt4ZqKoVYGMczrGQqRLSBjgsmYJdbPjk7UhvG4P60QGYaif7QcCByi+q+RmqZwkkZmoBzCoeW1pCc3SlqlzkpEOk3sdEtqiuD02aYNzvfanKyXUZquYISKRIZReud/sIghDba+lNQJhhFaxVpBlKy0Pn354DG+ffG5s6Zw+dTT6JONG4z4++Ow78hZg85xex8woHabGVnmWyVHI57CfsbHZwgMKi5Xjw+aTJhA1szNasWwQPpXRfsbynU30qAJ40h6TTqW6lguFIEQavEdxqsY8/Khjp+mhSMlopIKeXKECxCOqUzsTw1NUIt98ew0//HwTntfHpGvj47OvR5ycjF+v/oPvL/2NctmOhDaWN1A54GhNTwMWamYbZJHEfZL66uVba2j7AVwqK04ZfO6j4xrwQuMerszfwAaxWkiHHqdSmp4okLtDDdky+rlGx2aW90iLWnlAFpudPOpkielCl9YfTJcxN+VEOSEPRnyNDK5mwkhgM6szaJRl3hLibjTmbpjpatWtmRdMgX0Otutquh+zPY6zpOTYHsBCE8AFxl8EWAZa0vxNj/JHNVwoFTPuvBjnsYzMEyM6293hTM+hFPBufTgr/kzj1/ExFgY/DJOr3elHt3vZ8rRuZDYOZnSwzIwcH+rBhZ5FWB3J3YcPVVz5cpdu+H7yE2aPipLzbttHox/AaMdEkV0cXN/BMq3Ja7Nqi8Qp0j2tPlt1mfzRdunHBff6zTXYTmHPXE2GTwIkLZ55/xXY9qgqr/21gp/mG3CIXk1Z8vJwqD6N906/1PxfgAEAt4r6useorj0AAAAASUVORK5CYII="
              style={{ height: 25, marginLeft: 10 }}
            />
            <span style={{ marginLeft: 10 }}>Facebook</span>
          </Box>
          <Box
            style={{
              background: "white",
              textAlign: "center",
              color: "black",
              width: "90%",
              padding: 8,
              marginLeft: 10,
              border: "1px solid grey",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTYxODZEODgyOEIzMTFFNzk2QjBFN0VENkVBMzE0MkEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTYxODZEODkyOEIzMTFFNzk2QjBFN0VENkVBMzE0MkEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNjE4NkQ4NjI4QjMxMUU3OTZCMEU3RUQ2RUEzMTQyQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNjE4NkQ4NzI4QjMxMUU3OTZCMEU3RUQ2RUEzMTQyQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg9nrdMAAAWzSURBVHjaxFdrbBRlFD3fvHa2u92W3ZZ2Q0tbKQr0IfhqqRJKCEGiBomQGCERjaKJr0BiSEB+EDUaCRLAxEcNSoTGRENEkooQLYZAeERCywIiKaVQau222310t52dnRnvzC5UoO1uDeokzabffDPn3nPPd+4dZhhGFwAn/ttrgBGwkelureca9Mvnkei8AiMaoIUEmNMNflIJ+NLp4L2TM0Y2gcP0mz3WJuXQdxj8qQnqCR8Bh2EMaWYYqbscmMSDK3FBfGA65PmLIC9Ylg43Miaw2noMkY83Id7ko/8McHk2sGwJ4BnhMTNuQNcpBgPGQBy6X7GekxZWIPu1tRCrascPHG3cjujGz6APKeDLXYDAE0iaqjAzEA3axTCFxMO5fgUcL65Lrt8CLIxY+Yb3MPDOF+A8EvgyN2WkJ0HNF6ga1VeBEVCtrJlLIBZsgEiBmXLhBfAlTmgdUWj9gcxrPLjnc4RWfwDOmwWWIyep5DgqtAqtPWJlwlXmgS8qSArumh+az0+giSQzcR3alQHKdiWcq9ZlRrV6/jQCTyynLCiTfGcSVOBgdEagh3XIz9Qha8Ei8BW14AuKbihdPXcSQwf2YWj3YWvNuf5ZAl2fubj6ViyBevgs+Eq3FbkJqreFiEoZrnfXQn706bEP587NMIJBZL/x9jhUHT6I0EcvQfmGQKNUtymkVH8MhsLgbmwghdbcSQMZFpd2aRcc8/sgTTUQ/coN7TSDweLI2f7WnQYdFpeh9GSrR2bCIHqFwiDV04nQFg+YvQqexm//DctMZmyEWqErZBCCAc2fA841BOcLEQhFC0d3M0VD07E/EKNfkQzl1qNqpE7f9d8ouV1ZoQNz75to3beAWewSKZhZRkQcQAvawTlUCBW1owPHNXyy/wI6o3FMIMtMd/1O+54s89wMbKgkIgv4b85k0NlV3akdI5kUw0S7aKXkFIWUa49+ySzpbEQQbPyor81QIBZJzLLtdC2Oo83mHs1qhiwFLDrAOFowUllT6AJRiVg3YJ804ovMbtpDjeFqLA63yt9W33xiw0Y2miCrNZPVaVGkCGWeDVONrLvAeD31EIOoJxBXJfj7W1HsuX9EYJ7M5eFpExGOqZBF/iYWRLp3+c8I/BGFaE0WQKEAHGb7TIkwKa6cauqpnNUARLJJRRCxKlKFznOn0Vw+MnUOu4ANz1WPSu0rHx5HNB6FzS5ZolWodRZ6soapt4Bt+RByF4Ab4NDG5WNp6CHsMlw41N+O73/bN+7aH2nxo6UrhFxZTHFvVpFhRmnuzcDW5V2GvSjB3f3T0KTaMUfQ4aLnFp9qwJnuMxmDhmMJbN17nlRMfSzFazSeQJFLRk1l/u3AWsHj2GajcxvTUM+rGKS1alGy+nB18wb8cOFAWtBzV3vx5uaj6A5EkeeQLJGZar5GOnjknny4XeLI/djXexFV+9fARoHOkmxI0JMSie2oOmQpfo13Fh4rrccMbyUKHUkj6I0F0B64hOaOX7Dt6kkIHXNQH5gKlXq4ahMRHFQtIe5YXQdvnjz66LPn7B48dfxLlNAeL2VsglOvwiApvcU8/cRRnd2BcjmPsuFwRQng58EgkOAwwabB42Qo7JmN4rbZNDbFcYr8f9PSaiyeW5R+5vr0RANe9pGoJB21ImV+3YeJOhU6ujQVfmvIZLBzOkrpFDjMaZP+DE5F0K4hHihGn+9BvH9vDV5dXpH5sNfY8jWW+3bDRJ1p4yBxPPQx6muOZEIqwBOUKT2ArWVL8HrNyvGPty3drdjy6w7s7G2zsssVNBRRdjbKLGmTzHIw1dARNjRcVmFpYY4jFxtnPY95U+r/2Vx9/WpuO4wf2w/hYL+PahZLdrIb6ZuTJTBVEDAvpwxzJ9VhacUSSDyfdvTJ+BOmJ9qL9r52dA50UR+mAZA+YWTZCa+jAKUTSjE5t3hcE8j/8tH2lwADAC5PeWrcOaH4AAAAAElFTkSuQmCC"
              style={{ height: 25, marginLeft: 10 }}
            />
            <span style={{ marginLeft: 10 }}>Google</span>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            marginLeft: 30,
            marginBottom: 20,
            marginRight: 30,
            justifyContent: "center",
          }}
        >
          <span>-OR-</span>
        </Box>
        {step === "one" ? (
          <Grid
            container
            style={{ marginLeft: 30, marginBottom: 20, marginRight: 30 }}
          >
            <Grid item xs={12}>
              <input
                style={{
                  border: errors.mobile ? "1px solid red" : "1px solid blue",
                  padding: "10px",
                  width: "80%",
                  borderRadius: 8,
                  marginTop: 20,
                }}
                type="number"
                placeholder="Mobile"
                value={values.mobile}
                name="mobile"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.mobile && touched.mobile ? (
                <div style={{ color: "red" }}>{errors.mobile}</div>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <input
                style={{
                  border: errors.password ? "1px solid red" : "1px solid blue",
                  padding: "10px",
                  width: "80%",
                  borderRadius: 8,
                  marginTop: 20,
                }}
                type="password"
                placeholder="password"
                value={values.password}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <div style={{ color: "red" }}>{errors.password}</div>
              ) : null}
            </Grid>
            <div style={{ color: "red" }}>{resMsg}</div>
            <Grid item xs={12}>
              <Button
                style={{
                  background: "rgb(51 65 127)",
                  width: "85%",
                  color: "white",
                  padding: 8,
                  borderRadius: 15,
                  marginTop: 20,
                }}
                onClick={handleLogin}
              >
                {/*   */}
                PROCEED
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid
            container
            style={{ marginLeft: 30, marginBottom: 20, marginRight: 30 }}
          >
            <Grid item xs={6}>
              <input
                style={{
                  border: errors.name ? "1px solid red" : "1px solid blue",
                  padding: "10px",
                  width: "70%",
                  borderRadius: 8,
                }}
                type="text"
                placeholder="First Name"
                value={values.name}
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <div style={{ color: "red" }}>{errors.name}</div>
              ) : null}
            </Grid>
            <Grid item xs={6}>
              <input
                style={{
                  border: errors.lastname ? "1px solid red" : "1px solid blue",
                  padding: "10px",
                  width: "60%",
                  borderRadius: 8,
                }}
                type="text"
                placeholder="Last Name"
                value={values.lastname}
                name="lastname"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastname && touched.lastname ? (
                <div style={{ color: "red" }}>{errors.lastname}</div>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <input
                style={{
                  border: errors.email ? "1px solid red" : "1px solid blue",
                  padding: "10px",
                  width: "80%",
                  borderRadius: 8,
                  marginTop: 20,
                }}
                type="email"
                placeholder="Email"
                value={values.email}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <div style={{ color: "red" }}>{errors.email}</div>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <input
                style={{
                  border: errors.mobile ? "1px solid red" : "1px solid blue",
                  padding: "10px",
                  width: "80%",
                  borderRadius: 8,
                  marginTop: 20,
                }}
                type="number"
                placeholder="Mobile"
                value={values.mobile}
                name="mobile"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.mobile && touched.mobile ? (
                <div style={{ color: "red" }}>{errors.mobile}</div>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <input
                style={{
                  border: errors.password ? "1px solid red" : "1px solid blue",
                  padding: "10px",
                  width: "80%",
                  borderRadius: 8,
                  marginTop: 20,
                }}
                type="password"
                placeholder="password"
                value={values.password}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <div style={{ color: "red" }}>{errors.password}</div>
              ) : null}
            </Grid>

            <FormControl style={{ marginTop: 10 }}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{ color: "black" }}
              >
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  name="gender"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  name="gender"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  name="gender"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </RadioGroup>
              {errors.gender && touched.gender ? (
                <div style={{ color: "red" }}>{errors.gender}</div>
              ) : null}
            </FormControl>
            <div style={{ color: "red" }}>{resMsg}</div>
            <Grid item xs={12}>
              <Button
                style={{
                  background: "rgb(51 65 127)",
                  width: "85%",
                  color: "white",
                  padding: 8,
                  borderRadius: 15,
                  marginTop: 20,
                }}
                onClick={handleRegistration}
              >
                PROCEED
              </Button>
            </Grid>
          </Grid>
        )}
        <Box
          style={{
            display: "flex",
            marginLeft: 30,
            marginBottom: 20,
            marginRight: 30,
            justifyContent: "center",
          }}
        >
          <span>
            New User?{" "}
            <span style={{ color: "red" }}>
              <button style={{ color: "red" }}>Create Account</button>
            </span>
          </span>
        </Box>
      </Box>
    </form>
  );
};

export default LoginForm;
