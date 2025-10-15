import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import '../firebase'


const auth = getAuth()


export default function AuthForm(){
const [email,setEmail]=useState('')
const [pass,setPass]=useState('')
const navigate = useNavigate()


const signup = async ()=>{
try{
await createUserWithEmailAndPassword(auth,email,pass)
navigate('/')
}catch(e){alert(e.message)}
}
const login = async ()=>{
try{ await signInWithEmailAndPassword(auth,email,pass); navigate('/') }catch(e){alert(e.message)}
}


return (
<div className="max-w-md mx-auto card">
<h2 className="text-lg font-semibold mb-4">Sign up / Login</h2>
<input className="w-full p-2 border rounded mb-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
<input className="w-full p-2 border rounded mb-4" placeholder="Password" type="password" value={pass} onChange={e=>setPass(e.target.value)} />
<div className="flex gap-2">
<button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={login}>Login</button>
<button className="px-4 py-2 bg-green-600 text-white rounded" onClick={signup}>Sign up</button>
</div>
</div>
)
}
