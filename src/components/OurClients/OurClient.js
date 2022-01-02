import React from "react";
import "./OurClients.scss";
const clients = [
  "assets/clients/1.png",
  "assets/clients/2.png",
  "assets/clients/3.png",
  "assets/clients/4.png",
  "assets/clients/5.png",
];
function OurClients() {
  return (
    <div className="OurClients pt-6">
      {clients.map((img, i) => (
        <img src={img} alt="client" />
      ))}
    </div>
  );
}

export default OurClients;
