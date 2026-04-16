import Link from "next/link";

export default function Home() {
    return (
        <div className="flex justify-center items-center ">
            
            <Link href="/dataStor">
                <button className="btn btn-primary">
                    Go to Data Page
                </button>
            </Link>

        </div>
    );
}