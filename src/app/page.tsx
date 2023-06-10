import Card from '../components/card/Card'
import React from "react";

const cardTitles = ['Todo List', 'Notes', 'Profile', 'Other']

export default function Home() {
  return (
    <div className="grid-main">
      <h1 className="text-center text-6xl mt-20">Philip's Dashboard</h1>
      <div className="cards grid grid-cols-3">
        {cardTitles.map((cardTitle, i) => (
          <Card key={i} text={cardTitle}></Card>
        ))}
      </div>
    </div>
  )
}