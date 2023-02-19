import React from "react";
import add from "../images/addAvatar.png";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth, db, storage } from "../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc } from "firebase/firestore";
// import { useNavigate, Link } from "react-router-dom";

function Register() {
  //   const [err, setErr] = useState(false);
  //   const [loading, setLoading] = useState(false);
  //   const navigate = useNavigate();

  //   const handleSubmit = async (e) => {
  //     setLoading(true);
  //     e.preventDefault();
  //     const Fullname = e.target[0].value;
  //     const email = e.target[1].value;
  //     const password = e.target[2].value;
  //     const file = e.target[3].files[0];

  //     try {
  //       //Create user
  //       const res = await createUserWithEmailAndPassword(auth, email, password);

  //       //Create a unique image name
  //       const date = new Date().getTime();
  //       const storageRef = ref(storage, `${Fullname + date}`);

  //       await uploadBytesResumable(storageRef, file).then(() => {
  //         getDownloadURL(storageRef).then(async (downloadURL) => {
  //           try {
  //             //Update profile
  //             await updateProfile(res.user, {
  //               Fullname,
  //               photoURL: downloadURL,
  //             });
  //             //create user on firestore
  //             await setDoc(doc(db, "users", res.user.uid), {
  //               uid: res.user.uid,
  //               Fullname,
  //               email,
  //               photoURL: downloadURL,
  //             });

  //             //create empty user chats on firestore
  //             await setDoc(doc(db, "userChats", res.user.uid), {});
  //             navigate("/");
  //           } catch (err) {
  //             console.log(err);
  //             setErr(true);
  //             setLoading(false);
  //           }
  //         });
  //       });
  //     } catch (err) {
  //       setErr(true);
  //       setLoading(false);
  //     }
  //   };

  // -----------------------------------------------------
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">sharma chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Fullname" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" style={{ display: "none" }} id="file" />
          <label htmlFor="file">
            <img src={add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {/* {err && <span>Something went wrong</span>} */}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;
