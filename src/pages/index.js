import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';
import Link from '@docusaurus/Link';

import styles from './index.module.css';
import Footer from "../components/Footer"
import Head from "../components/Head"


function HomepageHeader() {
  const bannerBox = useRef(null)

  const [bool,setBool]= useState(0)
  const [flag,setFlag]= useState(true)
  
  
  // 模块样式
  const contentStyle = {
    width: `100vw`,
    height: `100vh`,
    backgroundColor: "#000",
    position: "relative",
    overflow: "hidden"
  };
  // bananer样式
  const bananerStyle = {
    width: "50vw",
    height: "45vh",
    margin: "3vh auto 0vh",
    overflow: "hidden",
  }
  // 高亮样式
  const toLi = {
    backgroundColor:"#fff",
    height:'8vh'
  }

  const onPrev = () => {
    setBool(0)
  };
  const onNext = () => {
    setBool(-50)
  };
function toScroll(e) {
    let gao = e.deltaY
    if(gao>0){
      bannerBox.current.next()
    }else{
      bannerBox.current.prev()
    }
  }


  return ( 
    <>
      <Head color='#fff' is={flag}  />

    <div onWheel={e=>toScroll(e)} className={styles.center}>
      <Carousel  ref={bannerBox} dotPosition='left'
      beforeChange={(f,t)=>{
        setFlag(false)
      }} 
      afterChange={(c)=>{
        setFlag(true)
      }}
      >
        <div>
        <div style={contentStyle}>
          <div className={styles.on1}>
            <div className={styles.topLeft}></div>
            <div className={styles.rightB}></div>
          </div>
          <div className={styles.on1_p}>
            <span>“As many</span> RISC-V <span>as the</span> stars <span>in the</span> Milky Way<span>”</span></div>
        </div>
        </div>
        <div>
        <div style={contentStyle}>
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
        <div style={contentStyle}>
          <div style={{
            width: "70vw", height: "65vh",
            margin: "0 auto", backgroundColor: '#000',
            marginTop: "15.81vh", position: "relative",
          }}>
            <div className={styles.on3_shadow1}></div>
            <div className={styles.on3_shadow2}></div>
            <div className={styles.on3_shadow3}></div>
            <div className={styles.on3_text}>
              <div style={{ borderRadius: "5px" }}>Starting from $5</div>
            </div>
            <div className={styles.on3_img}> </div>
            <h1 className={styles.on3_h1}>World Debut</h1>
            <span style={{
              fontSize: "3.47vw", color: "#fff",
              position: "absolute", top: 0, left: '20vw'
            }}>
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
              <Link to="/" style={{ color: "#fff",textDecoration:'none' }}>Buy</Link>
            </div>
            <div className={styles.on3_bottom_right}>
              <Link to="/details" style={{ color: "#fff",textDecoration:'none' }}>Learn more&gt;&gt;</Link>
            </div>
          </div>
        </div>
        </div>
        <div>
        <div style={contentStyle}>
          <div className={styles.on4_box}>
            <h1 style={{
              fontSize: "2.7vw",
              textAlign: "center",
              color: "#FFF"
            }}>Milk-V's Blog</h1>
            <p style={{
              fontSize: "1.4vw",
              textAlign: "center",
              color: "#FFF"
            }}>Embracing the Future of RISC-V</p>
            <div className={styles.on4_bottom}>
              <div className={styles.prev} style={{ marginRight: "2vw" }} onClick={()=>onPrev()}></div>
              <div className={styles.next} onClick={()=>onNext()}></div>
            </div>
            <div className={styles.bannermin} style={{transform:`translateX(${bool}vw)`,transition:'.5s'}}>
                <div className={styles.text01}>
                  <div style={bananerStyle}>
                    <p style={{
                      textAlign: "left",
                      fontSize: "1.2vw",
                      width: "38vw",
                      height: "20vh",
                      display: "block",
                      fontWeight: 400,
                      fontFamily: 'Inter',
                      fontStyle: 'normal',
                      wordSpacing: '15px',
                      color: "#FFF",
                      textIndent: '50px',
                    }}>
                      The RISC-V architecture is low power, low cost, open source, modularizable, simple, small area, and fast, which fits well with the fragmented and customizable nature of IoT scenario requirements. Milk-V is proud to stand with the future by making it our goal to drive RISC-V to grow.
                    </p>
                    <div style={{
                      width: "15vw",
                      height: "2.5vh",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin:'10vh 0 0 11.5vw'
                    }}>
                      <p className={styles.on4_p}>2022-12-12</p>
                      <div className={styles.miniLogo}></div>
                    </div>
                  </div>
                </div>
                <div className={styles.text02}> 
                  <div style={bananerStyle}>
                    <p style={{
                    textAlign: "left",
                    fontSize: "1.2vw",
                    width: "38vw",
                    height: "20vh",
                    display: "block",
                    fontWeight: 400,
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    wordSpacing: '15px',
                    color: "#FFF",
                    textIndent: '50px',
                    }}>
                      The RISC-V architecture is low power, low cost, open source, modularizable, simple, small area, and fast, which fits well with the fragmented and customizable nature of IoT scenario requirements. Milk-V is proud to stand with the future by making it our goal to drive RISC-V to grow.
                    </p>
                    <div style={{
                      width: "15vw",
                      height: "2.5vh",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin:'10vh 0 0 11.5vw'
                    }}>
                      <p className={styles.on4_p}>2022-12-12</p>
                    <div className={styles.miniLogo}></div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        </div>
        <div>
        <div style={contentStyle}>
          <div className={styles.on5_box}>
            <ul>
              <li>
                <h1 className={styles.on5_box_h1}>Chat room</h1>
                <p className={styles.on5_box_p}>Join the Milk-V Matrix Chat channel to share your ideas with the developers all around the world.</p>
                <div className={styles.on5_bottom}>
                  <Link to="/" style={{ color: "#fff",textDecoration:'none' }}>Get In Touch</Link>
                </div>
              </li>
              <li>
                    <h1 className={styles.on5_box_h1}>Wechat</h1>
                  <div className={styles.on5_img}></div>
                    <div className={styles.on5_bottom}>
                      <Link to="/" style={{color:"#fff",textDecoration:'none'}}>Scan QR code</Link>
                    </div>
              </li>
            </ul>
            <div style={{marginLeft:'-25vw'}}>
              <Footer color="#000"/> 
            </div>
          </div>
        </div>
        </div>
      </Carousel>
      </div>
      </>
  );
}

export default function Home() {
  return (
    <>
      <HomepageHeader />
    </>
  );
}

