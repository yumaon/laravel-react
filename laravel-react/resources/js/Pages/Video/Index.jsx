import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

const Videos = ({videos}) => {
  return (
    <div>
      { videos.map((video, index) => (
        <div key={index}>{video.title} - <Link href={`/videos/${video.id}`}>詳細</Link></div>
      ))}

      <PrimaryButton>
        <Link href={`/videos/create`}>新規作成</Link>
      </PrimaryButton>
    </div>
  )
};

export default Videos