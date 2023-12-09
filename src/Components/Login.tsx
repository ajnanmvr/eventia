"use client";
import Axios from "@/utils/Axios";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  return (
    <div>
      <GoogleLogin
        onSuccess={(response: any) => {
          const loggedUser = jwtDecode(response.credential)
          console.log(jwtDecode(response.credential));
          localStorage.setItem('user',JSON.stringify(jwtDecode(response.credential)))
          
            Axios.post('/signup' , {
              ...loggedUser
            }).then((res)=>{
              location.reload()
              console.log(res)
              const id = res.data._id
            }).catch((err)=>{
              console.log(err)
            })
        
        }}
        onError={() => {
          console.log("error");
        }}
      />
    </div>
  );
}
