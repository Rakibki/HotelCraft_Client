import { Grid } from "@mui/material";
import { useContext, useState } from "react";
import { authContext } from "../../providers/AuthProvaider";
import uploadeImage from "../../utils/uploadeImage";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import useAxiosLocal from "../../hooks/useAxiosLocal";

const Register = () => {
  const { createUser } = useContext(authContext);
  const [error, setError] = useState("");
  const axiosLocal = useAxiosLocal();

  console.log(error);

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const file = e.target.file.files[0];
    const image = await uploadeImage(file);
    const role = "Guest";

    if (password.length < 6) {
      return setError("It should be at least 6 characters long.");
    }

    if (!/[A-Z]/.test(password)) {
      return setError("It should contain at least one uppercase letter.");
    }

    if (!/[A-Z]/.test(password)) {
      return setError("It should contain at least one uppercase letter.");
    }

    if (!/[!@#$%^&*]/.test(password)) {
      return setError("It should contain at least one special character");
    }

    await createUser(email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });

    await axiosLocal.post("/api/v1/users", {
      name,
      email,
      image,
      role,
    });

    axiosLocal.post("/api/v1/createToken", { email, role });
  };

  return (
    <Grid paddingY={"200px"}>
      <form onSubmit={handleRegister}>
        <input name="name" type="text" />
        <input name="email" type="text" />
        <input name="password" type="text" />
        <input name="file" type="file" />
        <button type="submit">Register</button>
      </form>
    </Grid>
  );
};

export default Register;
