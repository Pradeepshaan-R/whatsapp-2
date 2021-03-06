import { Circle } from "better-react-spinkit";
import Image from "next/image";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <Image
          src="https://www.freepnglogos.com/uploads/whatsapp-logo-app-png-4.png"
          alt="Loading"
          height={200}
          style={{ marginBottom: "10" }}
        />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
}

export default Loading;
