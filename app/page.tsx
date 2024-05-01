"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App() {
  return (
    <>
      <h1>Hello World from Demo Next App using Amplify Gen 2 👋</h1>
    </>
  );
}

export default withAuthenticator(App);