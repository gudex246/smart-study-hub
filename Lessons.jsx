import React, { useEffect, useState } from 'react'
import { collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase'


export default function Lessons(){
const [lessons,setLessons]=useState([])
useEffect(()=>{ load(); },[])
async function load(){
const snap = await getDocs(query(collection(db,'lessons'), orderBy('createdAt','desc')))
setLessons(snap.docs.map(d=>({id:d.id,...d.data()})))
}
async function add(){
const title = prompt('Lesson title')
if(!title) return
await addDoc(collection(db,'lessons'), {title, summary:'', createdAt: new Date()})
load()
}
return (
<div>
<div className="flex justify-between items-center mb-4"><h2 className="text-lg font-semibold">Lessons</h2><button className="px-3 py-1 bg-green-600 text-white rounded" onClick={add}>Add</button></div>
<div className="space-y-2">
{lessons.map(l=> (
<div key={l.id} className="card">
<strong>{l.title}</strong>
<p className="text-sm text-gray-600">{l.summary}</p>
</div>
))}
</div>
</div>
)
}
