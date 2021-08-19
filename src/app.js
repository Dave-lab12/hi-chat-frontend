import React from "react";
import Notifications from "./components/notifications";
import Options from "./components/options";
import VideoPlayer from "./components/videoPlayer";

function App() {
  return (
    <div>
      video chat app
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
