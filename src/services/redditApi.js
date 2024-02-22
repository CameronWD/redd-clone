import axios from 'axios';

const API_BASE = 'https://www.reddit.com';

export const fetchHotPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE}/hot.json`);
    return response.data.data.children.map(child => ({
      id: child.data.id,
      title: child.data.title
    }));
  } catch (error) {
    console.error('Error fetching hot posts:', error);
    return [];
  }
};

export const fetchPostDetails = async (postId) => {
    try {
      const response = await axios.get(`${API_BASE}/comments/${postId}.json`);
      const postDetails = response.data[0].data.children.map(child => child.data)[0];
      const comments = response.data[1].data.children.map(child => child.data);
      return {
        postDetails,
        comments
      };
    } catch (error) {
      console.error('Error fetching post details:', error);
      return { postDetails: null, comments: [] };
    }
  };
