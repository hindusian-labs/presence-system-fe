import React from "react";
import LogActivity from "../components/Logactivity";
import Layout from "./Layout";

const Log = () => {
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
      <LogActivity />
    </Layout>
  );
};

export default Log;
