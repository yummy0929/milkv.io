import React, { useState } from 'react';
import css from './head.module.css'
import { Modal  } from 'antd';
import Link from '@docusaurus/Link';


export default function (props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {color,is=true} = props;

 
    const showModal = () => {
        setIsModalOpen(true);
    }
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const toApp = () =>{
        window.open('https://app6hodqg6k9861.h5xiaoeknow.com')
    }
    return (
        <>
            <div style={{backgroundColor:color,opacity:`${is?'1':'0'}`,transition:'.7s'}} className={css.box} >
                <div alt='milkV' className={css.headerLogo}>
                <Link to="/" style={{textDecoration:'none' ,width:'4.69vw',height:'2.777vh',display:'block'}}>               
                </Link> 
                </div>
                <div className={css.select1} >
                    <select className={css.sele1} style={{backgroundColor:color}}  >
                        <option value="product">product</option>
                        <option value="product2">###</option>
                    </select>
                </div>
                <div className={css.select2} >
                    <select className={css.sele}  style={{backgroundColor:color}}>
                        <option value="product">Community</option>
                        <option value="product2">####</option>
                    </select>
                </div>
                <div style={{position:"absolute",top:'1.5vh',left:'75vw'}}>
                    <div className={css.btn} onClick={showModal}>Online  shop</div>
                </div>
                <Modal 
                    footer={null}
                    closeIcon={<div className={css.close}></div>}
                    width={'46.37vw'}
                    bodyStyle={{height:'28.92vw',position:'relative'}}
                    open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <div className={css.Logo}></div>
                    <div className={css.chian} onClick={()=>toApp()}>
                        <div className={css.img}></div>
                        <div className={css.text}>China's mainland</div>
                        <div className={css.right}>&gt;&gt;</div>
                    </div>
                    <div className={css.other}>
                        <div className={css.img}></div>
                        <div className={css.text}>Other countries and regions</div>
                        <div className={css.right}>&gt;&gt;</div>
                    </div>
                </Modal>
            </div>
        </>
    );
}