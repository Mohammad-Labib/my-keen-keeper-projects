import FinalFriendCart from "@/component/FriendCart/FinalFriendCart";

const DataPage = async () => {

    const res = await fetch('http://localhost:3000/friendData.json', {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">
                Total Friends: {data.length}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    data.map(friendCards => (
                        <FinalFriendCart 
                            key={friendCards.id}
                            friendCards={friendCards}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default DataPage;