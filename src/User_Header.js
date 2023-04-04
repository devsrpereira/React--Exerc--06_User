import React from 'react'

export default function User_Header(props){

    return(
        <div className='user_hdr'>
            <p>Current user: {props.usuario}</p>
        </div>
    )


}