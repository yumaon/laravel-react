import React from "react";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const VideoCreate = ({}) => {
  const [formData, setFormData] = useState({
    'title': '',
    'text': '',
    'status': '',
    'youtube_url': ''
  })
  
  const handleBack = () => {
    window.history.back();
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.post('/videos/store', formData);
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          
          <input 
            type="text" 
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="タイトル"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          />

          <input 
            type="text" 
            id="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            placeholder="テキスト"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          />

          <input 
            type="text" 
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            placeholder="ステータス"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          />

          <input 
            type="text" 
            id="youtube_url"
            name="youtube_url"
            value={formData.youtube_url}
            onChange={handleChange}
            placeholder="YouTube URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          />
        
        </div>

        <button 
          type="submit" 
          className="mt-6 w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          保存する
        </button>
      </form>

      <div className="flex justify-between items-center mt-4">
        <div onClick={handleBack} className="text-blue-500 hover:underline dark:text-blue-400 cursor-pointer">
          戻る
        </div>
      </div>
    </div>
  )
};

export default VideoCreate