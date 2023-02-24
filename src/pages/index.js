import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'antd';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';


import styles from './index.module.css';
// import Footer from "../components/Footer"
import Head from "../components/Head"


function HomepageHeader() {
  const bannerBox = useRef(null)
  const [bool,setBool]= useState(0)
  const [flag1,setFlag1]= useState(true)
  const [flag2,setFlag2]= useState(true)
  const [count,setCount]= useState(0)

  const onPrev = () => {
    setBool(0)
  };
  const onNext = () => {
    setBool(-50)
  };
function toScroll(e) {
  let gao = e.deltaY
  if(gao>0){
    if(flag1){
      bannerBox.current.next()
    }
  }else{
    if(flag2){
      bannerBox.current.prev()
    }
  }
}


useEffect(() => {
  document.querySelector('.footer').style.display="none";
  if(count === 3) {
    document.querySelector('.footer').style.display="block";
  }
}, [count]);

const which = (c) =>{
  setCount(c)
  if(c===3){
    setFlag1(false)
  }else{
    setFlag1(true)
  }
  if(c===0){
    setFlag2(false)
  }else{
    setFlag2(true)
  }
}

  return ( 
    <>
      <div onWheel={e=>toScroll(e)} className={styles.center}>
        <Carousel  ref={bannerBox} dotPosition='left' afterChange={(c)=>which(c)}> 
          <div>
          <div  className={styles.contentStyle}>
            <div className={styles.on1}>
              <div className={styles.topLeft}></div>
              <div className={styles.rightB}></div>
            </div>
            <div className={styles.on1_p}>
              <span>“As many</span> RISC-V <span>as the</span> stars <span>in the</span> Milky Way<span>”</span></div>
          </div>
          </div>
          <div>
          <div  className={styles.contentStyle}>
            <h1 className={styles.on2_h}>
              Why choose RISC-V？
            </h1>
            <p className={styles.on2_p}>
              Milk-V is committed to providing high quality RISC-V products to developers, enterprises and consumers, and to promoting the development of the RISC-V hardware and software ecosystem. Milk-V will firmly support open source, and hopes that through its own efforts and those of the community, future RISC-V products will be as numerous and bright as the stars in the Milky Way.
            </p>
            <div className={styles.on2_shadow}></div>
            <div className={styles.on2_list}>
              <div className={styles.on2_item}>
                <div>
                  <div className={styles.icon1}></div>
                  <p>Low power</p>
                </div>
              </div>
              <div className={styles.on2_item}>
                <div>
                    <div className={styles.icon2}></div>
                  <p>Low cost</p>
                </div>
              </div>
              <div className={styles.on2_item}>
                <div>
                    <div className={styles.icon3}></div>
                  <p>Open Source</p>
                </div>
              </div>
              <div className={styles.on2_item}>
                <div>
                    <div className={styles.icon4}></div>
                  <p>Modularizable</p>
                </div>
              </div>
              <div className={styles.on2_item}>
                <div>
                    <div className={styles.icon5}></div>
                  <p>Simple</p>
                </div>
              </div>
              <div className={styles.on2_item}>
                <div>
                    <div className={styles.icon6}></div>
                  <p>Small area</p>
                </div>
              </div>
              <div className={styles.on2_item}>
                <div>
                    <div className={styles.icon7}></div>
                  <p>Fast</p>
                </div>
              </div>
              <div className={styles.on2_item}>
                <div>
                    <div className={styles.icon8}></div>
                  <p>high performance</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div>
          <div  className={styles.contentStyle}>
            <div className={styles.on3_change}>
              <div className={styles.on3_shadow1}></div>
              <div className={styles.on3_shadow2}></div>
              <div className={styles.on3_shadow3}></div>
              <div className={styles.on3_text}>
                <div className={styles.on3_change_text}>Starting from $5</div>
              </div>
              <div className={styles.on3_img}> </div>
              <h1 className={styles.on3_h1}>World Debut</h1>
              <span className={styles.on3_change_text_span}>
                This is
              </span>
              <p className={styles.on3_p}>RISC-V MPU</p>
              <div className={styles.on3_box}>
                <ul className={styles.box_list}>
                  <li>
                    <div>
                        <div className={styles.icon2}></div>
                    </div>
                  </li>
                  <li>
                    <div>
                        <div className={styles.icon1}></div>
                    </div>
                  </li>
                  <li>
                    <div>
                        <div className={styles.icon8}></div>
                    </div>
                  </li>
                </ul>
                <p className={styles.p1}>Dual cores up to 1Ghz</p>
                <p className={styles.p2}>Rich IO for UART, I2C, SPI, SDIO, ADC and more</p>
                <p className={styles.p3}>Running Linux or RTOS or both simultaneously</p>
              </div>
              <div className={styles.on3_bottom_left}>
                  <Head cd='on3'></Head>
              </div>
              <div className={styles.on3_bottom_right}>
                <Link to="/details" style={{textDecoration:'none',color: '#fff',width:'100%',height:'100%',display:'block'}}>Learn more&gt;&gt;</Link>
              </div>
            </div>
          </div>
          </div>
          {/* <div>
          <div  className={styles.contentStyle}>
            <div className={styles.on4_box}>
              <h1 className={styles.box4_change}>Milk-V's Blog</h1>
              <p className={styles.change_text_box4}>Embracing the Future of RISC-V</p>
              <div className={styles.on4_bottom}>
                <div className={styles.prev} onClick={()=>onPrev()}></div>
                <div className={styles.next} onClick={()=>onNext()}></div>
              </div>
              <div className={styles.bannermin} style={{transform:`translateX(${bool}vw)`,transition:'.5s'}}>
                  <div className={styles.text01}>
                    <div className={styles.bananerStyle}>
                      <p className={styles.change_text_p}>
                        The RISC-V architecture is low power, low cost, open source, modularizable, simple, small area, and fast, which fits well with the fragmented and customizable nature of IoT scenario requirements. Milk-V is proud to stand with the future by making it our goal to drive RISC-V to grow.
                      </p>
                      <div className={styles.change_on4}>
                        <p className={styles.on4_p}>2022-12-12</p>
                        <div className={styles.miniLogo}></div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.text02}> 
                    <div className={styles.bananerStyle}>
                      <p className={styles.change_text_p}>
                        The RISC-V architecture is low power, low cost, open source, modularizable, simple, small area, and fast, which fits well with the fragmented and customizable nature of IoT scenario requirements. Milk-V is proud to stand with the future by making it our goal to drive RISC-V to grow.
                      </p>
                      <div className={styles.change_on4}>
                        <p className={styles.on4_p}>2022-12-12</p>
                        <div className={styles.miniLogo}></div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          </div> */}
          <div>
          <div  className={styles.contentStyle}>
            <div className={styles.on5_box}>
              <ul>
                <li className={styles.li}> 
                  <h1 className={styles.on5_box_h1}>Communiy</h1>
                  <p className={styles.on5_box_p}>Join the Milk-V Matrix Chat channel to share your ideas with the developers all around the world.</p>
                  <div className={styles.on5_bottom}>
                    <Link to="/" style={{textDecoration:'none',color: '#fff'}}>Get In Touch</Link>
                  </div>
                </li>
                <li className={styles.li}>
                      <h1 className={styles.on5_box_h1}>Wechat</h1>
                    <div className={styles.on5_img}></div>
                      <div className={styles.on5_bottom}>
                        <Link to="/" style={{textDecoration:'none',color: '#fff'}}>Scan QR code</Link>
                      </div>
                </li>
                <li className={styles.li}>
                    <h1 className={styles.on5_box_h1}>QQ Group</h1>
                    <div className={styles.on5_img_QQ}></div>
                      <div className={styles.on5_bottom}>
                        <Link to="/" style={{textDecoration:'none',color: '#fff'}}>Scan QR code</Link>
                        {/* Join Group */}
                        {/* https://qm.qq.com/cgi-bin/qm/qr?k=ZFCR14q78e6na-y4RH1KltBaC0UHqiiY&authKey=/HuSnCtvghVjBdHMhj1uZyhbHtLWTEq8AKt85nHQVEDTpYvYw5b0NWc1D1/yAav2&noverify=0 */}
                      </div>
                </li>
              </ul>
              {/* <div style={{marginLeft:'-25vw'}}> */}
                {/* <Footer color="#000"/>  */}
              {/* </div> */}
            </div>
          </div>
          </div>
        </Carousel>
      </div>
      
      <Head ele='home'></Head>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Layout>
        <HomepageHeader />
      </Layout>
    </>
  );
}

