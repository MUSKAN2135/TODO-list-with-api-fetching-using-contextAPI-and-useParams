import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import AOS from 'aos';
import { PostsContext, ThemeContext, UsersContext } from './context';
import Users from './pages/users';
import Postdetails from './pages/postdetails';
import Post from './pages/posts';
import Userdetails from './pages/userdetails';
import Tasks from './pages/todotasks';
import Todo from './pages/todo';
import { ToastContainer } from 'react-toastify';
AOS.init({
  duration: 800, // Animation duration in milliseconds
  easing: 'ease-in-out', // Easing function
  once: true, // Whether animation should happen only once
});
export default function App() {
  const [post, setpost] = useState()
  const [user, setusers] = useState()
  const [theme, settheme] = useState(false);

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <ThemeContext.Provider value={{ theme, settheme }}>
        <PostsContext.Provider value={{ post, setpost }}>
          <UsersContext.Provider value={{ user, setusers }}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path='/users' element={<Users />} />
              <Route path="/user/:id" element={<Userdetails />} />
              <Route path='/post' element={<Post />} />
              <Route path="/post/:id" element={<Postdetails />} />
              <Route path='/todolist' element={<Todo />} />
              <Route path='/todotasks' element={<Tasks />} />
            </Routes>
          </UsersContext.Provider>
        </PostsContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}