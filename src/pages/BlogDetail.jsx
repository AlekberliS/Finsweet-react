import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import supabase from "../config/supabase";

const BlogDetail = () => {
  const { id } = useParams();  // Get the blog ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('id, title, description, image, author, posted_on')
        .eq('id', id)
        .single();  // Fetch the blog post by ID

      if (error) {
        throw new Error(error.message);
      }

      setPost(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="container  mx-auto px-6 md:px-20 max-w-7xl gap-8 md:gap-16 mt-12 my-8">
      {post && (
        <div>
          <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-6" />
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-500 mb-2">By {post.author} | {new Date(post.posted_on).toLocaleDateString()}</p>
          <p className="text-gray-700 text-lg">{post.description}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
