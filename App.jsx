import React from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import AuthForm from './components/AuthForm'
import Dashboard from './components/Dashboard'
import Lessons from './components/Lessons'
import Discussion from './components/Discussion'
import Progress from './components/Progress'
import Profile from './components/Profile'


function App(){
return (
<div className="min-h-screen">
<header className="bg-blue-600 text-white p-4 flex justify-between items-center">
<h1 className="text-xl font-semibold">Smart Study Hub</h1>
<nav className="space-x-3">
<Link to="/">Home</Link>
<Link to="/lessons">Lessons</Link>
<Link to="/discussion">Discussion</Link>
<Link to="/progress">Progress</Link>
<Link to="/profile">Profile</Link>
</nav>
</header>


<main className="p-6 max-w-4xl mx-auto">
<Routes>
<Route path="/login" element={<AuthForm />} />
<Route path="/" element={<Dashboard />} />
<Route path="/lessons" element={<Lessons />} />
<Route path="/discussion" element={<Discussion />} />
<Route path="/progress" element={<Progress />} />
<Route path="/profile" element={<Profile />} />
<Route path="*" element={<Navigate to="/" replace />} />
</Routes>
</main>


<footer className="text-center p-4 text-sm text-gray-500">© {new Date().getFullYear()} Smart Study Hub</footer>
</div>
)
}


export default App
