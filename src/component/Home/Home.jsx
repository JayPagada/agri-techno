import React from "react";
import { Button, Layout, Menu, Switch } from "antd";
import "./Home.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MainRouteFile from "../MainRouteFile/MainRouteFile";
const Home = () => {
  return (
    <Layout>
      <Navbar />
      <MainRouteFile />
      <Footer />
    </Layout>
  );
};

export default Home;
