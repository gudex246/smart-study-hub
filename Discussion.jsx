import React, { useEffect, useState } from 'react'
import { collection, addDoc, query, orderBy, getDocs } from 'firebase/firestore'
import { db } from '../firebase'


export default function Discussion(){
const [threads,setThreads]=useState([])
const [text,setText]=useState('')
useEffect(()=>{ load() },[])
async function load(){
const snap = await getDocs(query(collection(db,'threads'), orderBy('createdAt','desc')))
setThreads(snap.docs.map(d=>({id:d.id,...d.data()})))
}
async function post(){
if(!text) return
await addDoc(collection(db,'threads'), {text, author:'Anonymous', createdAt:new Date()})
setText('')
load()
}
return (
<div>
<h2 className="text-lg font-semibold mb-2">D
