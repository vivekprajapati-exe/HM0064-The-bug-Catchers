import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const AuthForm = ({ type }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Participant'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const endpoint = type === 'login' ? '/api/auth/login' : '/api/auth/signup';
      const { data } = await axios.post(endpoint, formData);
      
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md bg-neutral-800 rounded-2xl p-8 shadow-xl"
      >
        <div className="text-center mb-8">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl font-bold text-white mb-2"
          >
            {type === 'login' ? 'Welcome Back' : 'Get Started'}
          </motion.h1>
          <p className="text-neutral-400">
            {type === 'login' 
              ? 'Sign in to manage your events' 
              : 'Create your account to continue'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-3 bg-red-800/30 text-red-400 rounded-lg"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {type === 'signup' && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <label className="block text-neutral-300 mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full bg-neutral-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </motion.div>
          )}

          <motion.div variants={variants}>
            <label className="block text-neutral-300 mb-2">Email Address</label>
            <input
              type="email"
              required
              className="w-full bg-neutral-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </motion.div>

          <motion.div variants={variants}>
            <label className="block text-neutral-300 mb-2">Password</label>
            <input
              type="password"
              required
              minLength="6"
              className="w-full bg-neutral-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </motion.div>

          {type === 'signup' && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <label className="block text-neutral-300 mb-2">Role</label>
              <select
                className="w-full bg-neutral-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              >
                <option value="Participant">Participant</option>
                <option value="Organizer">Organizer</option>
                <option value="Admin">Admin</option>
              </select>
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white p-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Processing...' : type === 'login' ? 'Sign In' : 'Create Account'}
          </motion.button>
        </form>

        <motion.div 
          className="text-center mt-6 text-neutral-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {type === 'login' ? (
            <>
              Don't have an account?{' '}
              <Link to="/signup" className="text-indigo-400 hover:underline">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <Link to="/login" className="text-indigo-400 hover:underline">
                Sign in
              </Link>
            </>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthForm;