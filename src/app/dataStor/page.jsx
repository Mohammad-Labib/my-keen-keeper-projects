import FinalFriendCart from "@/component/FriendCart/FinalFriendCart";

const DataPage = async () => {

    const res = await fetch('http://localhost:3000/friendData.json', {
        cache: "no-store"
    });

    const data = await res.json();

    const friendCartData = data; 

    console.log("hello data", friendCartData);

    return (
        <div>
            <h2>hello Data: {friendCartData.length}</h2>

            <div className="grid grid-cols-4 gap-4 ">
                {
                friendCartData.map(friendCards => <FinalFriendCart friendCards={friendCards} key={friendCards.id}></FinalFriendCart>)
                }
            </div>
        </div>
    );
};

export default DataPage;

