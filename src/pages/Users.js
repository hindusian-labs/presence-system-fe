import React from "react";
import Userlist from "../components/Userlist";
import Layout from "./Layout";

const Users = () => {
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
      <Userlist />
    </Layout>
  );
};

export default Users;
