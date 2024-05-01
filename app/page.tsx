"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { getCurrentUser } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function App() {
  const router = useRouter();

  useEffect(() => {
    getAuthUser();
  },  []);
  async function getAuthUser() {
    try {
      const response = await getCurrentUser();
      console.log(response);
      router.replace("home")
    } catch (error) {
      console.log(error);
      router.replace(
        "https://test-okta-ryan.auth.ap-south-1.amazoncognito.com/login?client_id=5desfnc8kkb036i0lt7fpkl6gf&response_type=token&scope=email+openid&redirect_uri=https%3A%2F%2Fmain.dd0uraac8ucm7.amplifyapp.com%2F"
      );
    }
  }
  return (
    <>
      {/* <Authenticator></Authenticator> */}
      <button onClick={getAuthUser}>Click</button>
    </>
  );
}

export default App;
