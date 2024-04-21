import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {} from './registrationSlice';
import styles from './Category.module.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { incrementAsyncCategory } from './categorySlice';
export function Category(){
    const [pId, SetPId] = useState();
    const [idea, SetIdea] = useState();
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    return(
        <>
        <div className={styles.maxCenter}>
            <div className={styles.center}>
                <p>Category</p>
                <input onChange={ (e)=>{
                    SetPId(e.target.value);
                }} className={styles.inputColor} placeholder='Please, enter your Id' type='number'></input>
                <input onChange={ (e)=>{
                    SetIdea(e.target.value);
                }} className={styles.inputColor} placeholder='Status' type='text'></input>
                <button onClick={
                    ()=>{
                        dispatch(incrementAsyncCategory({pId: pId, idea: idea}));
                    }
                    
                }  className={styles.buttonType1}>Add new category</button>
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