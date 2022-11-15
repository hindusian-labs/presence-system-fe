import React from "react";
import Welcome from "../components/Welcome";
import Layout from "./Layout";

const Dashboard = () => {
  return (
    <Layout>
      {(() => {
        if (window.localStorage) {
          if (!localStorage.getItem("reload")) {
            localStorage["reload"] = true;
            window.location.reload();
          } else {
            localStorage.removeItem("reload");
          }
        }
      })()}
      <Welcome />
    </Layout>
  );
};

export default Dashboard;
