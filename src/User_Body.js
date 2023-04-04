import React from 'react'

export default function User_Body(props){

    return(
        <div className='user_body'>
            <h1>Welcome back, {props.usuario}!</h1>
        </div>
    )

}