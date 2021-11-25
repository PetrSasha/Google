import React from 'react'
import Head from 'next/head'
import SearchHeader from '../components/SearchHeader'
import {API_KEY, CONTEXT_KEY} from '../keys'
import Response from '../Response'
import {useRouter} from 'next/router'
import SearchResult from '../components/SearchResult'
function Search({results }) {
    console.log(results)
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
            </Head>
            <SearchHeader/>
            <SearchResult results={results}/>
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData  = false 
    const startIndex = context.query.start || '0'

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
    .then((response) => response.json())

    //after ssr render .. pass  the result to client side
    return {
        props: {
            results : data 
        }
    }
}
