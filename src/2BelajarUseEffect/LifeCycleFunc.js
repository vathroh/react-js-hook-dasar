import React, { useEffect, useState } from 'react'

function LifeCycleFunc() {

    const [name, setName] = useState("");
    const [isUpdate, setUpdate] = useState(false);

    //component did mount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => response.json())
            .then((json) => {
                setName(json.name)
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/users/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                name: setName
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setUpdate(true)
            });
    }

    //component did update
    useEffect( () => {
        if(isUpdate){
            alert("Nama Sukses diupdate")
            setUpdate(false)
        }
    }, [isUpdate])

    //component will unmount
    useEffect( ()=> {
        return () => {
            console.log('komponen dicopot!')
        }
    }, [])

    return (
        <div>
            <h3>Nama : {name}</h3>
            <hr />
            <h3>Update Name :</h3>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="text" name='name' placeholder='Ubah nama' onChange={(event) => setName(event.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )

}

export default LifeCycleFunc