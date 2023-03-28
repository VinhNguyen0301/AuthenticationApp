import React from "react";
import PageContent from "../components/PageContent";
import { useRouteLoaderData } from "react-router-dom";

function HomePage() {
  const token = useRouteLoaderData("root");

  return <PageContent>{token && "Login Success"}</PageContent>;
}

export default HomePage;
