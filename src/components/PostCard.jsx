import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage, blur = false }) {
  const imageUrl = appwriteService.getFileView(featuredImage);

  return (
    <div className="relative group">
      <div
        className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-all duration-300 ${
          blur ? 'pointer-events-none' : ''
        }`}
      >
        {/* Image */}
        {imageUrl && (
          <div className="w-full h-48 overflow-hidden relative">
            <img
              src={imageUrl}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-300 ${
                blur ? 'blur-sm brightness-75' : 'group-hover:scale-105'
              }`}
            />
            {blur && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-sm font-medium backdrop-blur-sm">
                🔒 Login to view
              </div>
            )}
          </div>
        )}

        {/* Title */}
        <div className="p-4">
          <h2
            className={`text-lg font-semibold line-clamp-2 transition-colors ${
              blur ? 'text-gray-400' : 'text-gray-800 group-hover:text-blue-600'
            }`}
          >
            {title}
          </h2>
        </div>
      </div>

      {/* Clickable Link if not blurred */}
      {!blur && (
        <Link
          to={`/post/${$id}`}
          className="absolute inset-0 z-10"
        />
      )}
    </div>
  );
}

export default PostCard;
