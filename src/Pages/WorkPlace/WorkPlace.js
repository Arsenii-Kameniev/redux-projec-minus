import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Delete, Put, incrementAsyncWorkPlace, selectArr } from './workPlaceSlice';
// import {} from './registrationSlice';
import styles from './WorkPlace.module.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { incrementAsync } from '../../features/counter/counterSlice';
export function WorkPlace() {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const [hide, Sethide] = useState(false);
    const [needToDelete, SetNeedToDelete] = useState();
    const [needToUpdate, SetNeedToUpdate] = useState();
    const [valueName, SetValueName] = useState([]);
    const [valueCategoryName, SetValueCategoryName] = useState([]);
    const [valueFullPrice, SetValueFullPrice] = useState([]);
    const [valueCompany, SetValueCompany] = useState([]);
    const [attempt, SetAttempt] = useState(false);
    const products = useSelector(selectArr);
    useEffect(() => {
        dispatch(incrementAsyncWorkPlace());
        products.map((item, index) => {
            SetValueName([...valueName, item.name]);
            SetValueCompany([...valueCompany, item.company]);
            SetValueCategoryName([...valueCategoryName, item.category.name]);
            SetValueFullPrice([...valueFullPrice, item.fullPrice]);
        });
        console.log(valueName);
        console.log(valueCompany);
        console.log(valueCategoryName);
        console.log(valueFullPrice);
    }, []);
    // useEffect(() => {
    //     Sethide([]);
    //     console.log("-------");
    //     for(let i=0; i<products.length; i++){
    //         console.log(i);
    //         Sethide([hide, false]);
    //         console.log(hide);
    //     }
    //     console.log("-------");        
    // }, [products]);
    return (
        <div className={styles.main}>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want delete this product?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={
                                () => {
                                    dispatch(Delete(needToDelete))
                                    SetAttempt(attempt + 1);
                                }
                            }>Yes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want change this product?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={
                                () => {
                                    // dispatch(Update(needToUpdate))
                                }
                            }>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* start */}
            <div className={styles.row}>
                <div className={styles.smallDiv}>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item" >
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Dashboard
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Analytics</li>
                                        <li>eCommerce</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Layouts
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>IDK 1</li>
                                        <li>IDK 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Menu
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li onClick={
                                            () => {
                                                Navigate(`/allProducts`);
                                            }
                                        }>All Products</li>
                                        <li onClick={
                                            () => {
                                                Navigate(`/reg`);
                                            }
                                        }>Registrate</li>
                                        <li onClick={
                                            () => {
                                                Navigate(`/card`);
                                            }
                                        }>Card</li>
                                        <li onClick={
                                            () => {
                                                Navigate(`/product`);
                                            }
                                        }>Product</li>
                                        <li onClick={
                                            () => {
                                                Navigate(`/order`);
                                            }
                                        }>Order</li>
                                        <li onClick={
                                            () => {
                                                Navigate(`/category`);
                                            }
                                        }>Add Category</li>
                                        <li onClick={
                                            () => {
                                                Navigate(`/orderStat`);
                                            }
                                        }>Add Order status</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bigDiv}>
                    <div className={styles.row}>
                        <input className={styles.inputType1}></input>
                        <div className={styles.smallBlocky}></div>
                        <div className={styles.smallBlocky}></div>
                        <div className={styles.smallBlocky}></div>
                        <div className={styles.smallBlocky}></div>
                        <div className={styles.smallBlocky}></div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <div className={styles.NormRectangle1}>
                                <div className={styles.column}>
                                    <p>Finance Summary</p>
                                    <p>Check out each column for more details</p>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.column1}>
                                        <p>Annual Companies Taxes</p>
                                        <p>$500,00</p>
                                    </div>
                                    <div className={styles.column1}>
                                        <p>Next Tax Review Date</p>
                                        <p>July 24,2021</p>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.column1}>
                                        <p>Average Product Price</p>
                                        <p>$89.90</p>
                                    </div>
                                    <div className={styles.column1}>
                                        <p>Satisfaction Rate</p>
                                        <div className={styles.rowCenter}>
                                            <div className={styles.rowPer}>
                                                <div className={styles.PerPink}></div>
                                                <div className={styles.PerGrey}></div>
                                            </div>
                                            <p className={styles.noMargin}>75%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.row}>
                                    <div className={styles.smallDarkBlocky}></div>
                                    <div className={styles.smallDarkBlocky}></div>
                                    <div className={styles.smallDarkBlocky}></div>
                                    <div className={styles.smallDarkBlocky}></div>
                                    <div className={styles.smallDarkBlocky}></div>
                                    <b className={styles.Days}>5 DAYS AGO</b>
                                </div>
                            </div>
                            <p></p>
                            {/* second */}
                            {/* <div className={styles.NormRectangle3}>
                                <div className={styles.specialColumn}>
                                    <p>ID</p>
                                </div>
                                <div className={styles.specialColumn}>
                                    <p>PRODUCT</p>
                                </div>
                                <div className={styles.specialColumn}>
                                    <p>COMPANY</p>
                                </div>
                                <div className={styles.specialColumn}>
                                    <p>CATEGORY</p>
                                </div>
                                <div className={styles.specialColumn}>
                                    <p>PAYMENT</p>
                                </div>
                                <div className={styles.specialColumn}>
                                    <p>ACTIONS</p>
                                </div>
                            </div> */}
                            <div className={styles.NormRectangle2}>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <p className="accordion-header">
                                            <div className={styles.rowCenter}>
                                                <div className={styles.specialColumn}>
                                                    <p>ID</p>
                                                </div>
                                                <div className={styles.specialColumn}>
                                                    <p>PRODUCT</p>
                                                </div>
                                                <div className={styles.specialColumn}>
                                                    <p>COMPANY</p>
                                                </div>
                                                <div className={styles.specialColumn}>
                                                    <p>CATEGORY</p>
                                                </div>
                                                <div className={styles.specialColumn}>
                                                    <p>PAYMENT</p>
                                                </div>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                <div className="accordion" id="accordionExample">
                                    {
                                        products.map((item, index) => {
                                            let s = `collapse${item.id}`;
                                            let k = `#collapse${item.id}`;

                                            return <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={k} aria-expanded="false" aria-controls={s}>
                                                        <div className={styles.specialRow}>
                                                            <div className={styles.specialColumn}>
                                                                <p>{item.id}</p>
                                                            </div>
                                                            <div className={styles.specialColumn}>
                                                                <p>{item.name}</p>
                                                            </div>
                                                            <div className={styles.specialColumn}>
                                                                <p>{item.company}</p>
                                                            </div>
                                                            <div className={styles.specialColumn}>
                                                                <p>{item.category.name}</p>
                                                            </div>
                                                            <div className={styles.specialColumn}>
                                                                <p>{item.partlyPrice}/{item.fullPrice}</p>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id={s} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <div className={styles.specialRow}>
                                                            <div className={styles.specialColumn}>
                                                                <p>{item.id}</p>
                                                            </div>
                                                            <div className={styles.specialColumn}>
                                                                <input className={styles.showButton} value={valueName[index]} onChange={
                                                                    (e) => {
                                                                        let temp = valueName.slice();
                                                                        temp[index] = e.target.value;
                                                                        SetValueName(temp);
                                                                    }
                                                                }></input>
                                                            </div>
                                                            <div className={styles.specialColumn}>
                                                                <input className={styles.showButton} value={valueCompany[index]} onChange={
                                                                    (e) => {
                                                                        let temp = valueCompany.slice();
                                                                        temp[index] = e.target.value;
                                                                        SetValueCompany(temp);
                                                                    }
                                                                }></input>
                                                            </div>
                                                            <div className={styles.specialColumn}>
                                                                <input className={styles.showButton} value={valueCategoryName[index]} onChange={
                                                                    (e) => {
                                                                        let temp = valueCategoryName.slice();
                                                                        temp[index] = e.target.value;
                                                                        SetValueCategoryName(temp);
                                                                    }
                                                                }></input>
                                                            </div>
                                                            <div className={styles.specialColumn}>
                                                                <input className={styles.showButton} value={valueFullPrice[index]} onChange={
                                                                    (e) => {
                                                                        let temp = valueFullPrice.slice();
                                                                        temp[index] = e.target.value;
                                                                        SetValueFullPrice(temp);
                                                                    }
                                                                }></input>
                                                            </div>
                                                        </div>
                                                        <div className={styles.specialColumn}>
                                                            <div onClick={
                                                                () => {
                                                                    if (hide == false) {
                                                                        Sethide(true);
                                                                    }
                                                                    else {
                                                                        Sethide(false);
                                                                    }
                                                                }
                                                            }>
                                                                <img onClick={
                                                                    () => {
                                                                        SetNeedToUpdate();
                                                                    }
                                                                } className={styles.icon} src='./images/pencil.png' data-bs-toggle="modal" data-bs-target="#exampleModal2" />
                                                            </div>
                                                            <img onClick={
                                                                () => {
                                                                    SetNeedToDelete(item.id);
                                                                }
                                                            } className={styles.icon} src='./images/delete.png' data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={styles.column}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}