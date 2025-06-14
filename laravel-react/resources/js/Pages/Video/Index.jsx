import React from "react";
import { Link } from "@inertiajs/react";

const Videos = ({videos}) => {
  return (
    <div>
      { videos.map((video, index) => (
        <div key={index}>{video.title} - <Link href={`/videos/${video.id}`}>詳細</Link></div>
      ))}
    </div>
  )
};

export default Videos