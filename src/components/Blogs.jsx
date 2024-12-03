import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from "../config/supabase";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Using navigate for redirection

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')  // Fetch data from 'blogs' table
        .select('id, title, author, posted_on, description, image'); // Select required fields

      if (error) {
        console.error('Error fetching posts:', error);
        setError(error);
        return;
      }

      setPosts(data); // Set fetched data to posts state
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err);
    } finally {
      setLoading(false); // Stop loading after fetch
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts when the component mounts
  }, []);

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`); // Redirect to blog detail page
  };

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error.message}</p>;

  return (
 
      <section>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-2">
                  {new Date(post.posted_on).toLocaleDateString()} by {post.author}
                </p>
                <p className="text-gray-700 mb-4">
                  {post.description.substring(0, 100)}...
                </p>
                <button
                  onClick={() => handleReadMore(post.id)}
                  className="block text-blue-600 hover:text-blue-800 font-bold"
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

  );
};

export default BlogPage;
