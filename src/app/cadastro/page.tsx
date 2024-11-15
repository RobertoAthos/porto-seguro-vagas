import AuthComponent from "@/components/auth";
import React from "react";

export default function SignUpPage() {
  return (
    <section>
      <AuthComponent isSignUp={true}/>
    </section>
  );
}
