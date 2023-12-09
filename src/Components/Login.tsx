"use client";
import Axios from "@/utils/Axios";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter()
  return (
    <div>
      <GoogleLogin
        onSuccess={(response: any) => {
          const loggedUser = jwtDecode(response.credential)
          console.log(jwtDecode(response.credential));
          
          Axios.post('/signup' , {
            ...loggedUser
          }).then((res)=>{
              localStorage.setItem('user',JSON.stringify(res?.data?.data))
              // location.reload()
              router.refresh()
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
