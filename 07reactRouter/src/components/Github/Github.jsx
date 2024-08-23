import React, { useEffect, useState } from 'react'

function Github() {

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
         
    //     .then (function (response) {
    //         return response.json()
    //     }) //  .then(response => response.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    return (
        <div className='text-center text-2xl font-medium text-white bg-slate-800 p-2'>
            Github Followers: {data.followers}
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
