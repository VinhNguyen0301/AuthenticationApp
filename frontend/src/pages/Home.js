import React from "react";

import PageContent from "../components/PageContent";

import "./Home.css";
import ListMovie from "../components/MUI/ListMovie";
import CardDetail from "../components/MUI/CardDetail";

function HomePage() {
  return (
    <PageContent>
      {/* <ListMovie /> */}
      <CardDetail />
    </PageContent>
  );
}

export default HomePage;
