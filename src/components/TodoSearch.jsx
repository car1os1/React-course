import React from 'react'

const TodoSearch = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <input type="text" placeholder='Ingresa una tarea' style={{ background: '#F4F4F4', borderRadius: '20PX', textAlign: 'center', height: '30px', }} />
        </div>
    )
}

export { TodoSearch }
