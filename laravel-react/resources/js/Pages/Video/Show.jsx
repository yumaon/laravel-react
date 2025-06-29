import React from "react";
import { Link, router } from "@inertiajs/react";
import { route } from "ziggy-js";

const Video = ({video}) => {
  
  const handleBack = () => {
    window.history.back();
  }

  const destroyBtn = (id) => {
    if (window.confirm('本当に削除しますか？')) {
      router.delete(route('videos.destroy', id));
    }
  }

  return (
    <div>
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{video.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{video.status}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{video.text}</p>
      <div className="mb-6">
        <video controls className="w-full rounded-lg shadow-lg">
          <source src={video.youtube_url} type="video/mp4" />
          お使いのブラウザは動画タグをサポートしていません。
        </video>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">投稿日: {new Date(video.created_at).toLocaleDateString()}</span>
        <div>
          <div className="text-blue-500 hover:underline dark:text-blue-400 cursor-pointer">
            <Link href={`/videos/${video.id}/edit`}>編集</Link>
          </div>
          <div onClick={() => destroyBtn(video.id)} className="text-blue-500 hover:underline dark:text-blue-400 cursor-pointer">
            削除
          </div>
          <div onClick={handleBack} className="text-blue-500 hover:underline dark:text-blue-400 cursor-pointer">
            戻る
          </div>
        </div>
      </div>
    </div>
    </div>
  )
};

export default Video