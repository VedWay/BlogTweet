import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) setPosts(posts.documents);
    });
  }, []);

  // Filter posts based on search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-16 px-4">
      <Container>
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-extrabold mb-4">📚 All Blog Posts</h1>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="🔍 Search by title..."
            className="w-full px-4 py-3 rounded-xl shadow-md border border-white/20 bg-white/10 backdrop-blur placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-semibold text-white mb-4">No matching posts</h2>
            <p className="text-white/70 text-lg">Try a different keyword or create a new post.</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredPosts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;
