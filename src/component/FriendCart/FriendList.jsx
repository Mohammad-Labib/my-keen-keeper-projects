// "use client";
// import React, { useState } from 'react';

// const FriendList = ({ friends }) => {
//     const [show, setShow] = useState(false);

//     return (
//         <div>
//             <button onClick={() => setShow(!show)}>
//                 {show ? "Hide Friends" : "Show Friends"}
//             </button>

//             {
//                 show && friends.map((friend) => (
//                     <div key={friend.id}>
//                         <p>Name: {friend.name}</p>
//                     </div>
//                 ))
//             }
//         </div>
//     );
// };

// export default FriendList;