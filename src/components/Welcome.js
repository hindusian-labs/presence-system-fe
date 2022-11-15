import { Client } from "paho-mqtt";
import axios from "axios";
import { React, useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const broker = process.env.REACT_APP_MQTT_BROKER_HOSTNAME || "";
  const topic = process.env.REACT_APP_MQTT_TOPIC || "";
  const webSocketPort = Number(process.env.REACT_APP_MQTT_WEB_SOCKET_PORT) || 0;
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || "";
  const apiKey = process.env.REACT_APP_API_KEY || "";

  const client = new Client(broker, webSocketPort, `client_${nanoid(4)}`);

  const navigate = useNavigate();
  client.connect({
    onSuccess: () => {
      console.log("Connection succeed.");
      client.subscribe(topic);
    },
  });
  axios.defaults.baseURL = apiBaseUrl;
  axios.defaults.headers.common["X-Api-key"] = apiKey;
  axios.defaults.timeout = 10000;
  client.onMessageArrived = (message) => {
    axios
      .get(`/user/${message.payloadString}`)
      .then((res) => {
        console.log("User found");
        axios
          .post(`/check/${res.data["data"]["id"]}`)
          .then((resp) => {
            if (resp.data["data"]["out"] === null) {
              return setMessage(message.payloadString + " Check In");
            } else {
              return setMessage(message.payloadString + " Check Out");
            }
          })
          .catch((e) => {
            window.alert("User Already Checked Out");
          });
      })
      .catch((e) => {
        console.log(setMessage);
        console.log("User not found.");
        const register = window.confirm("Register User?");
        if (register) {
          navigate("/adduser");
        }
      });
  };
  const [message, setMessage] = useState("");

  const text = message === "" ? <p>Menunggu Presensi.</p> : <p>{message}</p>;
  return (
    <section>
      <div className="columns is-centered">
        <div className="card-content">
          <div
            className="media-content"
            style={{ width: "500px", marginTop: "100px" }}
          >
            <div
              className="card"
              style={{
                textAlign: "center",
                height: "100px",
                fontSize: "40px",
                paddingTop: "10px",
              }}
            >
              {text}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
