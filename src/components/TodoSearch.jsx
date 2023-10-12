import React from 'react'
import { useState } from 'react'

const TodoSearch = ({ changes, setChanges }) => {



    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <input value={changes} type="text" placeholder='Ingresa una tarea' style={{ background: '#F4F4F4', borderRadius: '20PX', textAlign: 'center', height: '30px', }} onChange={(event) => { setChanges(event.target.value) }} />
        </div>
    )
}

export { TodoSearch }
