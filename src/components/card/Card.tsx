import Link from "next/link";
import './style.css';

type Props = {
    //children: React.ReactNode;
    text: String;
}

export default function Card(props: Props) {
    return (
        <div className="card m-4 p-4 bg-white rounded-3xl">
            <h2>{props.text}</h2>
            <Link href="/new">Link to page</Link>
        </div>
    )
}