import FinalFriendCart from "@/component/FriendCart/FinalFriendCart";
import Link from "next/link";

const DataPage = async () => {

    const res = await fetch('https://my-keen-keeper-projects.vercel.app/friendData.json', {
        cache: "no-store"
    });

    const data = await res.json();

    const friendCartData = data; 

    // console.log("hello data", friendCartData);

    return (
        <div>
            <h2 className="text-2xl font-bold">Your Friends: {friendCartData.length}</h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {
                friendCartData.map(friendCards => <FinalFriendCart friendCards={friendCards} key={friendCards.id}></FinalFriendCart>)
                }
            </div>
            <div className="flex justify-center items-center mt-4">
                <Link href={'/'}><button className='btn btn-success'>Back to Home</button></Link>
            </div>
        </div>
    );
};

export default DataPage;

