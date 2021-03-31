import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://www.logo.wine/a/logo/WhatsApp/WhatsApp-GreenSquare-Logo.wine.svg"
          alt=""
          height={200}
          style={{ marginBottom: 10 }}
        />
        <Circle color="white" size={60} />
      </div>
    </center>
  );
}

export default Loading;
