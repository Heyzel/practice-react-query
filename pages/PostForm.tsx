import React from 'react';
import Post from '../components/Posts';
import { useMutation, useQueryClient } from 'react-query';

async function createPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers:{
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title:'practica de react-query',
            body:'estoy subiendo un post a través de un query',
            userId:1,
        }),
    });
    
    return response.json();

}

function PostForm(){

    const queryClient = useQueryClient(); 
    const mutation = useMutation(createPost, {
        onSettled: () => {
            console.log('Termine de resolver el query.');
        },
        // This function should update the data in the query POSTS but it doesn't work.
        /*onSuccess: function(response:any) {
            queryClient.setQueryData('POSTS', function(oldData:any){
                return {
                    ...oldData,
                    data: [
                        {
                            title: response.title,
                            body: response.body,
                            userId: response.userId,
                            id: response.id,
                        },
                        ...oldData
                    ]
                }
            })
        },*/
        onSuccess: () => {
            console.log('Resolvi el query exitosamente.');
        },
        onError: () => {
            console.log('Error al resolver el query.');
        }
    });

    function handleOnClick(){
        mutation.mutate();
    }

    return (
        <div>
            <Post/>
            <button onClick={handleOnClick}>Postear</button>
        </div>
    );
}

export default PostForm;