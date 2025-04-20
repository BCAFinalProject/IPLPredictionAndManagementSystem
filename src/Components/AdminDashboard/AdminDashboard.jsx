import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css';
import iplLogo from '../Images/ipl1.jpg';
import bannerImage from '../Images/bg1.jpg';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  // Decode JWT token properly
  const token = localStorage.getItem('adminToken');
  let admin = null;
  if (token) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      admin = JSON.parse(jsonPayload);
    } catch (err) {
      console.error('Invalid token:', err);
      admin = null;
    }
  }

  // Fetch users & comments from backend
  useEffect(() => {
    fetchUsers();
    fetchComments();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/get-users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:3000/get-comments');
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  // Remove a user
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/delete-user/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Remove an inappropriate comment
  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:3000/delete-comment/${commentId}`);
      setComments(comments.filter(comment => comment.id !== commentId));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <header className="admin-header">
        <div className="admin-header-left">
          <img src={iplLogo} alt="IPL Logo" className="admin-ipl-logo" />
          <h2 className="admin-welcome-msg">Welcome, {admin?.username || 'Admin'}!</h2>
        </div>
      </header>

      {/* Banner */}
      <div className="admin-banner">
        <img src={bannerImage} alt="Banner" className="admin-banner-img" />
      </div>

      {/* Dashboard Content */}
      <div className="admin-dashboard-content">
        <h2>Admin Dashboard</h2>
        <p>Here you can manage users and comments.</p>

        {/* User Management Section */}
        <div className="admin-section">
          <h3>Manage Users</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="admin-delete-btn" onClick={() => handleDeleteUser(user.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Comment Moderation Section */}
        <div className="admin-section">
          <h3>Manage Comments</h3>
          <ul className="admin-comments-list">
            {comments.map(comment => (
              <li key={comment.id}>
                <strong>{comment.username}:</strong> {comment.content}
                <button className="admin-delete-btn" onClick={() => handleDeleteComment(comment.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;