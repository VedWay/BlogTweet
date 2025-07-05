import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';
import { useSelector } from 'react-redux';

function Home() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData);

  const isLoggedIn = !!userData?.$id;

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) setPosts(posts.documents);
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-16 px-4">
      <Container>
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl px-8 py-12 max-w-screen-xl mx-auto border border-white/10">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-wide">
                No Posts Yet
              </h1>
              <p className="text-lg text-white/70">🚀 Login to share something amazing.</p>
            </div>
          ) : (
            <>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-10 tracking-tight">
                🚀 Explore the Latest Posts
              </h1>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {posts.map((post, idx) => (
                  <PostCard
                    key={post.$id}
                    {...post}
                    blur={!isLoggedIn && idx >= 2}
                  />
                ))}
              </div>

              {!isLoggedIn && posts.length > 2 && (
                <div className="mt-12 text-center text-sm text-white/60">
                  <p>
                    <span className="font-semibold">Login</span> to unlock all posts 🔓
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Home;
