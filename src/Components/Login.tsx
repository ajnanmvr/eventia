"use client";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  return (
    <div>
      <GoogleLogin
        onSuccess={(response: any) => {
          console.log(jwtDecode(response.credential));
        }}
        onError={() => {
          console.log("error");
        }}
      />
    </div>
  );
}
