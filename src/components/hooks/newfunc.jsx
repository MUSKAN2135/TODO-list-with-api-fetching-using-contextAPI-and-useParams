import React from 'react'
import { useFetch } from './customhooks'

export default function Newfunc() {
    let [data,error,loading] = useFetch("https://jsonplaceholder.typicode.com/posts")
    if(loading){
        return <>loading...</>
    }
    if(error){
        return <>error:{error}</>
    }
    console.log(data, "data")
    return (
        <div>

        </div>
    )
}
