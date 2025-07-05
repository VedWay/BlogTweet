import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate } from 'react-router-dom';
import service from '../appwrite/config'; 
import { useSelector } from 'react-redux';

export default function AddPost() {
  const editorRef = useRef(null);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData); 

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    setSlug(
      value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
    );
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = editorRef.current.getContent();

    try {
      setIsSubmitting(true);

      let imageId = '';
      if (image) {
        const uploaded = await service.uploadFile(image);
        if (uploaded && uploaded.$id) {
          imageId = uploaded.$id;
        } else {
          throw new Error('Image upload failed');
        }
      }

      const postCreated = await service.createPost({
        title,
        slug,
        content,
        featuredImage: imageId,
        status: 'active', 
        userId: userData?.$id,
      });

      if (postCreated) {
        navigate('/');
      }
    } catch (error) {
      console.error('Post submission error:', error);
      alert('Failed to submit post');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-600">
      <h1 className="text-2xl font-bold mb-4">Add New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Slug</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Upload Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="mt-2 w-48 rounded border" />
          )}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Content</label>
          <Editor
            apiKey="00nqetufeg6sadvftjxrvwdnxshe3t15mz38zy60s3p0wkco"
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
              height: 400,
              menubar: true,
              plugins: ['advlist autolink lists link image code fullscreen'],
              toolbar:
                'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist | link image | code',
            }}
            initialValue="<p>Write your post here...</p>"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Post'}
        </button>
      </form>
    </div>
  );
}
