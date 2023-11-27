import React, { useState, useEffect } from "react";
import Header from "../components/resuableComponents/Header";
import Footer from "../components/resuableComponents/Footer";
import {
  Box,
  Container,
  Divider,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import FooterMedia from "../components/resuableComponents/FooterMedia";
import Table from "react-bootstrap/Table";

const FAQ = () => {
  // const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [tab, setTab] = useState("");
  const [tabList, setTabList] = useState([
    {
      id: 13,
      question: "About the new",
      answer: "sdfgsdfsdvsdfbsdfbghchgjh",
      created_at: "2023-10-18T09:59:43.000000Z",
      updated_at: "2023-10-18T20:21:01.000000Z",
    },
  ]);

  const handleChange = (val) => {
    setTab(val);
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    window.scrollTo(0, 0);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    fetch("https://loofer.bellazza.in/api/faq", config)
      .then((response) => response.json())
      .then((res) => {
        console.log(" frequently asked questions", res);
        let category = [];
        if (res) {
          setTabList(res.data);
        } else {
          console.log("failed to resolve");
        }

        console.log({ res });
      })
      .catch((err) => {
        console.error(err);
        var data = [
          {
            id: 13,
            question: "About the new",
            answer: "sdfgsdfsdvsdfbsdfbghchgjh",
            created_at: "2023-10-18T09:59:43.000000Z",
            updated_at: "2023-10-18T20:21:01.000000Z",
          },
        ];
        setTabList(data);
      });

    if (tabList.length == 0) {
      var data = [
        {
          id: 13,
          question: "About the new",
          answer: "sdfgsdfsdvsdfbsdfbghchgjh",
          created_at: "2023-10-18T09:59:43.000000Z",
          updated_at: "2023-10-18T20:21:01.000000Z",
        },
      ];
      setTabList(data);
    }
  }, []);
  return (
    <>
      <Header />
      <Box>
        <h1 style={{ textAlign: "center" }}>FAQs</h1>
      </Box>
      <Container>
        <Divider style={{ marginTop: 20, marginBottom: 20 }} />
        <Grid container>
          {/* <Grid item xs={12} lg={3}>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 10,
                alignItems: "center",
              }}
            >
              <span style={{ color: "#58595b", fontSize: 14 }}>
                ORDERS & PAYMENT
              </span>
              <img
                src="https://www.svgrepo.com/download/27797/right-arrow.svg"
                style={{ height: 10 }}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 10,
                alignItems: "center",
              }}
            >
              <span style={{ color: "#58595b", fontSize: 14 }}>
                ORDERS & PAYMENT
              </span>
              <img
                src="https://www.svgrepo.com/download/27797/right-arrow.svg"
                style={{ height: 10 }}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 10,
                alignItems: "center",
              }}
            >
              <span style={{ color: "#58595b", fontSize: 14 }}>
                ORDERS & PAYMENT
              </span>
              <img
                src="https://www.svgrepo.com/download/27797/right-arrow.svg"
                style={{ height: 10 }}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 10,
                alignItems: "center",
              }}
            >
              <span style={{ color: "#58595b", fontSize: 14 }}>
                ORDERS & PAYMENT
              </span>
              <img
                src="https://www.svgrepo.com/download/27797/right-arrow.svg"
                style={{ height: 10 }}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 10,
                alignItems: "center",
              }}
            >
              <span style={{ color: "#58595b", fontSize: 14 }}>
                ORDERS & PAYMENT
              </span>
              <img
                src="https://www.svgrepo.com/download/27797/right-arrow.svg"
                style={{ height: 10 }}
              />
            </Box>
          </Grid> */}
          <Grid item xs={1} lg={1}>
            {matches ? (
              ""
            ) : (
              <div
                style={{
                  borderLeft: "1px solid grey",
                  height: "500px",
                }}
              ></div>
            )}
          </Grid>
          {tabList.map((map) => {
            return (
              <>
                <Grid item xs={12} lg={8}>
                  <Box
                    onClick={() =>
                      tab === map.id ? handleChange("") : handleChange(map.id)
                    }
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: 10,
                      alignItems: "center",
                    }}
                  >
                    <span style={{ color: "#58595b", fontSize: 14 }}>
                      {map.question}
                    </span>
                    <DownOutlined style={{ fontSize: 12 }} />
                  </Box>
                  {tab === map.id ? (
                    <>
                      <Box>{map.answer}</Box>
                    </>
                  ) : (
                    ""
                  )}
                  <Divider style={{ marginTop: 10 }} />
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
      {matches ? <FooterMedia /> : <Footer />}
    </>
  );
};

export default FAQ;
