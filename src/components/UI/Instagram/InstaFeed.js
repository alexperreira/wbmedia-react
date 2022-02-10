import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react'

const InstaFeed = ({token, ...props}) => {
    const [feed, setFeedData] = useState([]);
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
            try{
                axios
                .get()
            }
        }
    })
  return (
    <div>InstaFeed</div>
  )
}

export default InstaFeed