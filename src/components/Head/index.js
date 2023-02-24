import React, { useState } from 'react';
import css from './head.module.css'
import { Modal  } from 'antd';
import Link from '@docusaurus/Link';


export default function (props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {ele=null,cd=null} = props
 
    function Btn(){
        return (
            <>

            </>
        )
    }
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
        <div style={{display:`${cd?'none':'block'}`}}>
            {
                ele==='home'?<div className={css.login} onClick={showModal}><p>Online  shop</p></div>:<div className={css.buy} onClick={showModal}><div className={css.buyText}>BUY</div>
                <div className={css.right} style={{display: "block", width: '2.89vw', height: '2.89vw'}} ></div></div>
            }
        </div>
            {
                cd==='on3'?<div onClick={showModal} style={{textDecoration:'none',color: '#fff',width:'100%',height:'100%', cursor: 'pointer'}}>Buy</div>:null
            }
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
                    <div className={css.right_text}>&gt;&gt;</div>
                </div>
                <div className={css.other}>
                    <div className={css.img}></div>
                    <div className={css.text}>Other countries and regions</div>
                    <div className={css.right_text}>&gt;&gt;</div>
                </div>
            </Modal>
        </>
    );
}