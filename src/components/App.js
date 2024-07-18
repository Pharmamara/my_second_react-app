import React from "react";
import "./App.css";
import GiftCard from "./Card";

function App() {
  const data = [
    {
      imgSrc: "https://source.unsplash.com/200x200/?gift",
      name: "Gift 1",
      description: "Some description",
      price: 22.95,
    },
    {
      imgSrc: "https://source.unsplash.com/201x200/?gift",
      name: "Gift 2",
      description: "Some description",
      price: 19.35,
    },
    {
      imgSrc: "https://source.unsplash.com/202x200/?gift",
      name: "Gift 3",
      description: "Some description",
      price: 20.75,
    },
    {
      imgSrc: "https://source.unsplash.com/203x200/?gift",
      name: "Gift 4",
      description: "Some description",
      price: 10.75,
    },
    {
      imgSrc: "https://source.unsplash.com/204x200/?gift",
      name: "Gift 5",
      description: "Some description",
      price: 11.75,
    },
    {
      imgSrc: "https://source.unsplash.com/205x200/?gift",
      name: "Gift 6",
      description: "Some description",
      price: 9.75,
    },
    {
      imgSrc: "https://source.unsplash.com/205x201/?gift",
      name: "Gift 7",
      description: "Some description",
      price: 9.75,
    },
    {
      imgSrc: "https://source.unsplash.com/205x202/?gift",
      name: "Gift 8",
      description: "Some description",
      price: 9.75,
    },
    {
      imgSrc: "https://source.unsplash.com/205x203/?gift",
      name: "Gift 9",
      description: "Some description",
      price: 9.75,
    },
  ];

  return (
    <div className="App">
      <h1>Gift Cards Collection</h1>
      {data.map((entry, index) => (
        <GiftCard {...entry} key={index} />
      ))}
    </div>
  );
}

export default App;
