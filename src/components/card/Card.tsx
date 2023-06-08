import Link from "next/link";
import './style.scss';

type Props = {
    //children: React.ReactNode;
    text: String;
}

function fixString(str: String) {
    return str.toLowerCase().replace(" ", "-");
}

export default function Card(props: Props) {
    return (
        <Link href={`${fixString(props.text)}`} className="card m-4 p-6 bg-white rounded-2xl hover:shadow-lg">
            <div>
                <h2 className="text-2xl text-emerald-500">{props.text}</h2>
                <p>Additional text</p>
            </div>
        </Link>
    )
}