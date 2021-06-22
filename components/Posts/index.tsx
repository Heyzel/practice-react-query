import React from 'react';
import { useQuery } from 'react-query';

async function fetchPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!response.ok){
        throw new Error('Error al recibir los datos de Posts');
    }
    return response.json();
}

function Posts(){
    //Invoke query from useQuery (Key, function)
    const query = useQuery('POSTS', fetchPosts);

    if(query.isLoading){
        return <div>Cargando Posts...</div>
    };

    if(query.isError){
        return <div>Error al cargar Posts {query.error}</div>
    };


    // Getting only 3 elements
    var titles = [];
    for (let i = 0; i < 3; i++) {
        titles.push(query.data[i]);
    }

    return (
      <div>
          <ul>
              {titles.map((post:any) => {
                  return <li key={post.id}>{post.title}</li>;
              } )}
          </ul>
      </div>  
    );
}

export default Posts;