import React from "react";
import { Table, Tag, Space } from "antd";
import "./Weather.css"
const Weather = () => {
  const columns = [
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Temperature",
      dataIndex: "Temperature",
      key: "Temperature",
    },
    {
      title: "Humidity",
      dataIndex: "Humidity",
      key: "Humidity",
    },
    {
      title: "Weather",
      key: "Weather",
      dataIndex: "Weather",
    }
  ];

  const data = [
    {
      key: "1",
      city: "Surat",
      Temperature: "25°",
      Humidity: "10%",
      Weather: "hot",
    },
    {
      key: "2",
      city: "Ahemdabad",
      Temperature: "23°",
      Humidity: "10%",
      Weather: "hot",
    },
    {
      key: "3",
      city: "Rajkot",
      Temperature: "20°",
      Humidity: "10%",
      Weather: "cool",
    },
    {
        key: "4",
        city: "Junaghadh",
        Temperature: "19°",
        Humidity: "10%",
        Weather: "hot",
      },
      {
        key: "5",
        city: "Jamnagar",
        Temperature: "15°",
        Humidity: "10%",
        Weather: "cool",
      },
      {
        key: "6",
        city: "Morbi",
        Temperature: "22°",
        Humidity: "10%",
        Weather: "hot"
      },
      {
        key: "7",
        city: "Gandhinagar",
        Temperature: "25°",
        Humidity: "10%",
        Weather: "cool",
      },
  ];

  return (
    <div className="table">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Weather;
