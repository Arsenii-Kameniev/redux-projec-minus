import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {} from './registrationSlice';
import styles from './Card.module.css';
import { incrementAsyncCard } from './cardSlice';
import { Navigate, useNavigate } from 'react-router-dom';
export function Card(){
    const[number, SetNumber] = useState();
    const[name, SetName] = useState();
    const[surname, SetSurname] = useState();
    const[company, SetCompany] = useState();
    const[data, SetData] = useState();
    const[cvv, SetCvv] = useState();
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    return(
        <>
        <div className={styles.maxCenter}>
            <div className={styles.center}>
                <p>New Card</p>
                <input onChange={ (e)=>{
                    SetNumber(e.target.value);
                }} className={styles.inputColor} placeholder='Number of card' type='text'></input>
                <input onChange={ (e)=>{
                    SetName(e.target.value);
                }} className={styles.inputColor} placeholder='Name' type='text'></input>
                <input onChange={ (e)=>{
                    SetSurname(e.target.value);
                }} className={styles.inputColor} placeholder='Surname' type='text'></input>
                <input onChange={ (e)=>{
                    SetCompany(e.target.value);
                }} className={styles.inputColor} placeholder='Company' type='text'></input>
                <input onChange={ (e)=>{
                    SetData(e.target.value);
                }} className={styles.inputColor} placeholder='Data' type='text'></input>
                <input onChange={ (e)=>{
                    SetCvv(e.target.value);
                }} className={styles.inputColor} placeholder='CVV' type='number'></input>
                <button onClick={
                    ()=>{
                    
                        dispatch(incrementAsyncCard({number:number, name: name, surname: surname, company: company, data: data, cvv: cvv}));
                    }
                    
                } className={styles.buttonType1}>Add card</button>
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