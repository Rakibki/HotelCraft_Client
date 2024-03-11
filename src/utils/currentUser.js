import axios from "axios";

const currentUser = async (userEmail) => {
  const res = await axios.get(
    `http://localhost:3002/api/v1/currentUser/${userEmail}`
  );
  const user = await res?.data;

  return user;
};

export default currentUser;