import React, { useState, useEffect } from 'react';

function Error(props){
    const [ name, setName ] = useState('error-container')

    useEffect(() => {
        if(props.errorArr.length === 0){
            setName('error-container none');
        }
        else{
            setName('error-container');
        }
    }, [props])

    return(
        <div className={name}>
            {props.errorArr.map(error=>{
                return <p>{error}</p>
            })}
        </div>
    )
}

export default Error;