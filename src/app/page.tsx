import Card from "@/components/card/Card";
import Link from "next/link";

const cardTitles = ['Todo List', 'Notes', 'Logs', 'Philip']

export default function Home() {
  return (
    <div className="grid-main">
      <h1 className="text-center text-6xl my-8">Philip's Dashboard</h1>
      <div className="cards grid grid-cols-2">
        {cardTitles.map((cardTitle, i) => (
          <Card key={i} text={cardTitle}></Card>
        ))}
      </div>
    </div>
  )
}