import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import Posts from '../components/Posts';
import PostForm from './PostForm';


// Creating the client
const client = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={client}>
      <div className={styles.container}>
        <h1>Practica de React-Query</h1>
        <PostForm/>
      </div>
    </QueryClientProvider> 
    
  )
}
