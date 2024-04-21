import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {} from './registrationSlice';
import styles from './LoginPlace.module.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { incrementAsyncLogin, selectAccess } from './loginSlice';
import { selectStatus } from '../LoginPlace/loginSlice';
export function LoginPlace(){
    const moveBack = useSelector(selectStatus);
    const access = useSelector(selectAccess);
    // useEffect(()=>{
    //     console.log("it is moveBack:"+moveBack);
    //     if(moveBack=="good"){
    //         Navigate("/menu");
    //     }
    // },[moveBack]);
    const [k, SetK] = useState(0);
    useEffect(()=>{
        console.log("it is access:"+access);
        if(access){
            Navigate("/menu");
        }
    },[access]);
    
    const [name, SetName] = useState();
    const [password, SetPassword] = useState();
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    return(
        <>
        <div className={styles.maxCenter}>
            <div className={styles.center}>
                <p>Login</p>
                <div className={styles.left}>
                    <p>Name:</p>
                    <input onChange={(e)=>{
                        SetName(e.target.value);
                    }}
                     className={styles.inputColor} type='text'></input>
                    <p>Password:</p>
                    <input onChange={(e)=>{
                        SetPassword(e.target.value);
                    }}className={styles.inputColor} type='text'></input>
                </div>
                <button className={styles.buttonType1} onClick={
                    ()=>{
                        dispatch(incrementAsyncLogin({name, password}));
                        SetK(k+1);
                    }
                }>Login</button>
                <p>If you haven't account, then:</p>
                <button className={styles.buttonType1} onClick={
                    ()=>{
                        Navigate(`/reg`);
                    }
                }>Registrate</button>
            </div>
        </div>
        </>
    );
}