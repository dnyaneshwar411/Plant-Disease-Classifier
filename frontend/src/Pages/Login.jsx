import { useContext, useLayoutEffect } from "react"
import { UserContext } from "../Contexts/UserContext"
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()
  const { user, registerWithGoogle } = useContext(UserContext);

  useLayoutEffect(function () {
    if (user) navigate("/");
  }, [user]);

  return <div className="flex mt-40 justify-center">
    <button onClick={registerWithGoogle}>Login With Google</button>
  </div>
}