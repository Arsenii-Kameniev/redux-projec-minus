import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {} from './registrationSlice';
import styles from './Registration.module.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { incrementAsyncRegistration } from './registrationSlice';
export function Registration(){
    
    const [name, SetName] = useState();
    const [password, SetPassword] = useState();
    const [level, SetLevel] = useState();
    const [age, SetAge] = useState();
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    return(
        <>
        <div className={styles.maxCenter}>
            <div className={styles.center}>
                <p>Registration</p>
                <input onChange={ (e)=>{
                    SetLevel(e.target.value);
                }}className={styles.inputColor} placeholder='Level' type='number'></input>
                <input onChange={ (e)=>{
                    SetName(e.target.value);
                }} className={styles.inputColor} placeholder='Nickname' type='text'></input>
                <input onChange={ (e)=>{
                    SetPassword(e.target.value);
                }} className={styles.inputColor} placeholder='Password' type='text'></input>
                <input onChange={ (e)=>{
                    SetAge(e.target.value);
                }} className={styles.inputColor} placeholder='Age' type='number'></input>
                <button className={styles.buttonType1} onClick={
                    ()=>{
                    
                        dispatch(incrementAsyncRegistration({name: name, password: password, level: level, age: age}));
                    }
                    
                }>Registrate</button>
                <button className={styles.Menu}  onClick={
                    ()=>{
                        Navigate(`/menu`);
                    }
                }>Main Menu</button>
            </div>
        </div>
        </>
    );
}