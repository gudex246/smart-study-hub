import React, { useEffect, useState } from 'react'
import { collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase'


export default function Dashboard(){
const [tasks,setTasks]=useState([])
const [lessons,setLessons]=useState([])
useEffect(()=>{ load(); },[])


async function load(){
const l = await getDocs(query(collection(db,'lessons'), orderBy('createdAt','desc')))
setLessons(l.docs.map(d=>({id:d.id,...d.data()})))
const t = await getDocs(query(collection(db,'tasks'), orderBy('createdAt','desc')))
setTasks(t.docs.map(d=>({id:d.id,...d.data()})))
}


async function addTask(){
const text = prompt('Task description')
if(!text) return
await addDoc(collection(db,'tasks'), {text, done:false, createdAt: new Date()})
load()
}


return (
<div className="space-y-4">
<div className="card">
<div className="flex justify-between items-center">
<h2 className="text-lg font-semibold">Welcome</h2>
<button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={addTask}>Add Task</button>
</div>
<p className="mt-2">Motivation: Start small, be consistent.</p>
</div>


<div className="card">
<h3 className="font-semibold mb-2">Today’s Tasks</h3>
<ul className="list-disc ml-5">
{tasks.map(t=> <li key={t.id}>{t.text} {t.done? '✅': ''}</li>)}
</ul>
</div>


<div className="card">
<h3 className="font-semibold mb-2">Lessons</h3>
<ul className="list-decimal ml-5">
{lessons.map(l=> <li key={l.id}>{l.title}</li>)}
</ul>
</div>
</div>
)
}
