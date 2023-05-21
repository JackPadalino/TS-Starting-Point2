// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { resetUser } from "../../store/userSlice";
// import { RootState } from "../../store";

// const Home = () => {
//   const { user } = useSelector((state: RootState) => state.user);
//   const dispatch = useDispatch();

//   const logout = () => {
//     window.localStorage.removeItem("token");
//     dispatch(resetUser());
//   };

//   return (
//     <div>
//       <h1>Home</h1>
//       <div>
//         <p>Welcome {user.username}!!</p>
//         <button onClick={logout}>Logout</button>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";

const Home = () => {
  return (
    <div>
      <h1>This is the home page.</h1>
    </div>
  );
};

export default Home;
