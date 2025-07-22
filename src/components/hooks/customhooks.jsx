import { useEffect, useState } from 'react'
import axios from 'axios'

export function useFetch(url) {
    const [data, setdata] = useState()
    const [error, seterror] = useState()
    const [loading, setloading] = useState(false)

    useEffect(() => {
        if (!url) return;

        async function fetchdata() {
            try {
                setloading(true)
                seterror(null)

                const apires = await axios.get(url)
                console.log(apires)

                if (apires.status === 200) {
                    setdata(apires.data) // ✅ Axios already parsed it!
                } else {
                    console.log("API didn't return data")
                }

            } catch (err) {
                seterror(err.message)
            } finally {
                setloading(false)
            }
        }

        fetchdata()
    }, [url])

    console.log(data, "data")
    return [data, error, loading]
}