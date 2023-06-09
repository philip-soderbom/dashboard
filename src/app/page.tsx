import CalendarContainer from "@/components/calendarContainer/CalendarContainer";
import ImageContainer from "@/components/imageContainer/ImageContainer";
import Card from "@/src/components/card/Card";
import { Calendar } from "@/src/components/ui/calendar";

import imgurl from '../assets/imgs/vinijr.png'

const cardTitles = ['Todo List', 'Notes', 'Logs', 'Philip']

export default function Home() {
  return (
    <div className="grid-main">
      <h1 className="text-center text-6xl my-8">Philip's Dashboard</h1>
      <div className="cards grid grid-cols-3">
        {cardTitles.map((cardTitle, i) => (
          <Card key={i} text={cardTitle}></Card>
        ))}
        <CalendarContainer />
        <ImageContainer />
      </div>

    </div >
  )
}