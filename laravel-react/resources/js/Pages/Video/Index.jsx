import { Link, router } from "@inertiajs/react";
import { route } from "ziggy-js";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";

const Videos = ({videos}) => {
  const destroyBtn = (id) => {
    if (window.confirm('本当に削除しますか？')) {
      router.delete(route('videos.destroy', id));
    }
  }

  return (
    <div>
      { videos.map((video, index) => (
        <div key={video.id}>
          {video.title} - <Link href={`/videos/${video.id}`}>詳細</Link>
          <DangerButton onClick={() => destroyBtn(video.id)} className="text-xs">削除</DangerButton>
        </div>
      ))}

      <PrimaryButton>
        <Link href={`/videos/create`}>新規作成</Link>
      </PrimaryButton>
    </div>
  )
};

export default Videos