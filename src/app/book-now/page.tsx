import React from "react";

function page() {
  return (
    <div className="mt-28 w-full h-screen">
      <iframe
        src="https://book.mylimobiz.com/v4/chicagotrans"
        width="100%"
        height="100%" // This ensures the iframe takes up the entire height of the container
        frameBorder={0}
        scrolling="auto"
        allow="geolocation"
        className="ores4iframe"
        style={{
          width: "100%", // Full width of its parent container
          height: "100vh", // Full height of its parent container
          // Max height set to viewport height
          maxHeight: "100vh",
        }}
        id="iFrameResizer0"
      />
    </div>
  );
}

export default page;
