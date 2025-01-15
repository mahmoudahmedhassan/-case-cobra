"use client";
import { useState, useCallback } from "react";
import Field from "./Field";

export default function ParentsCom() {
    const [name,setName] = useState<string>("")
    const [age,setAge] = useState<number>(0)
  
    return (
        <div>
            <h1>ParentsCom</h1>
            <Field type="text" setValue={setName} placeholder="name" />
            <Field type="number" setValue={setAge}  placeholder="age" />
        </div>
    );
}