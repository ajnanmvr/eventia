import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";

export default function OAuthProvider({ children }: { children: React.ReactNode}) {
    return <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}  >{children as React.ReactNode}</GoogleOAuthProvider>
}