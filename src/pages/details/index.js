import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Head from "../../components/Head"

import Link from '@docusaurus/Link';

import cssList from "./details.module.css"

function DetailsPage() {
  const [num, setNum] = useState(0)

  const onPrve = () => {
    if (num == 0) return
    setNum((num) => num + 23.4)
  }
  const onNext = () => {
    if (num === -46.8) return
    setNum((num) => num - 23.4)
  }

  return (
    <>
      <div style={{
        position: "relative",
        width: '100%',
        height: '100%',
        overflow: "hidden",
        backgroundColor: '#000'
      }}>
        <div className={cssList.titleBox}>
          <p style={{ fontSize: "1.437vw", marginBottom: "0.42vh" }}>Meet</p>
          <h1 style={{
            fontSize: "5.98vw",
            marginBottom: '4.8vh'
          }}>Milk-V DUO</h1>
          <h2 className={cssList.textLine}>A 5$ RISC-V COMPUTER</h2>
          <p style={{ fontSize: "1.79vw" }}>Low cost, low power consumption, high performance</p>
          <Head />
          <p style={{ fontSize: "1.377vw" }}>*Tax or shipping is not included </p>
        </div>
        <div className={cssList.rotateImg}></div>
        <div className={cssList.title_line}></div>
        <div className={cssList.title2}>Specification</div>
        <div className={cssList.chartBox}>
          <h1 className={cssList.chartTitle}>More powerful than others</h1>
          <p className={cssList.chartTitle2}>Dual Core RISC-V CPU up to</p>
          <div className={cssList.largeText}>
            <p style={{ fontSize: "5.21vw", color: "#01F2AA", marginRight: "1vw" }}>1</p>
            <p>
              <span style={{ fontSize: "5.21vw", color: "#fff" }}>G</span>
              <span style={{ fontSize: "2.21vw", color: "#fff" }}>hz</span>
            </p>
          </div>
          <p style={{
            fontSize: "1vw", color: "#fff", marginRight: "1vw", position: "absolute", top: "26.52vh", left: "31vw"
          }}>Vector Acceleration</p>
          <div className={cssList.shadow3}></div>
          <div className={cssList.shadow4}></div>
          <div className={cssList.Ghzbox}> </div>
        </div>
        <div className={cssList.exhibits}>
          <div className={cssList.group2}>
            <div className={cssList.textList}>10/100Mbps Ethernet thru optional add-on board</div>
            <div className={cssList.exhibitsImg}></div>
          </div>
          <div className={cssList.micBox}>
            <div className={cssList.micList1}>
              <div className={cssList.frame1}></div>
              <p>MicroSD support</p>
              <div className={cssList.shadow6}></div>
            </div>
            <div className={cssList.micList2}>
              <div className={cssList.frame2}></div>
              <p>64MB RAM</p>
              <div className={cssList.shadow7}></div>
            </div>
          </div>
          <div className={cssList.footerText}><h1>40P GPIO</h1></div>
          <div className={cssList.bigExhibits}>
            <div className={cssList.head}>Incredible, it's a AMP computer！</div>
            <div className={cssList.support}>Support Asymmetric multiprocessing</div>
            <div className={cssList.btnBox}>
              <div className={cssList.btnTask}>
                <ul className={cssList.taskLeft} style={{ marginLeft: "-1.7vw" }}>
                  <li>...</li>
                  <li>Task</li>
                  <li>Task</li>
                </ul>
                <ul className={cssList.taskRight} style={{ marginRight: "-0.4vw" }}>
                  <li>Task</li>
                  <li>Task</li>
                  <li>...</li>
                </ul>
              </div>
              <div className={cssList.btnLinux}>
                <div className={cssList.btnLeft}>Linux</div>
                <div className={cssList.btnRight}>RTOS</div>
              </div>
              <div className={cssList.CBOx}>
                <div className={cssList.CUPBOx}>
                  <div className={cssList.cpu}>CPU1</div>
                  <div className={cssList.cpu}>CPU2</div>
                </div>
                <div className={cssList.CUPtext}>Sharing Memory</div>
              </div>
              <div className={cssList.shadow8}></div>
              <div className={cssList.shadow9}></div>
            </div>
          </div>
          <div className={cssList.lineChart}>
            <div className={cssList.shadow10}></div>
            <div className={cssList.shadow11}></div>
            <div className={cssList.lineBox}>
              <div className={cssList.line1}></div>
              <div className={cssList.line2}></div>
              <div className={cssList.line3}></div>
              <div className={cssList.line4}></div>
              <div className={cssList.lineGroup}></div>
              <div className={cssList.jj} ></div>
            </div>
          </div>
        </div>
        <div className={cssList.title3}>Small size, big potentials</div>
        <div className={cssList.bannerList} >
          <div style={{
            transform: `translateX(${num}vw)`,
            transition: '1s'
          }}>
            <div className={cssList.bannerimg} style={{ left: '0' }}>
              <div className={cssList.img1} ></div>
              <p>smart door lock</p>
            </div>
            <div className={cssList.bannerimg} style={{ left: '23.4vw' }}>
              <div className={cssList.img2} ></div>
              <p>Intelligent monitoring</p>
            </div>
            <div className={cssList.bannerimg} style={{ left: '46.8vw' }}>
              <div className={cssList.img3} ></div>
              <p>Smart Street Light </p>
            </div>
            <div className={cssList.bannerimg} style={{ left: '70.2vw' }}>
              <div className={cssList.img4} ></div>
              <p>Traffic Monitoring </p>
            </div>
            <div className={cssList.bannerimg} style={{ left: '93.6vw' }}>
              <div className={cssList.img5} ></div>
              <p>Pedestrian detection</p>
            </div>
          </div>
          <div className={cssList.prev} onClick={() => onPrve()}></div>
          <div className={cssList.next} onClick={() => onNext()}></div>
        </div>
        <div className={cssList.title4}>Tech specs</div>
        <div className={cssList.chartTech}>
          <div className={cssList.tech_text1}>
            <h1 className={cssList.tech_title}>Introduction</h1>
            <p className={cssList.tech_p}>Milk-V DUO is an MPU capable of running LINUX and RTOS based on the SOPHGO CV180xB chip.Milk-V DUO provides professionals, industrial OEMs, IoT enthusiasts, hobbyists, DIYers and creators with a reliable, low-cost and extremely capable platform for building and tinkering with their ideas to make them a reality.</p>
          </div>
          <div className={cssList.tech_text2}>
            <h1 className={cssList.tech_title}>Hardware </h1>
            <p className={cssList.tech_p_line}>- SOPHGO CV1800B Chip</p>
            <p className={cssList.tech_p_line}>- Dual-Core RISC-V CPU up to 1Ghz</p>
            <p className={cssList.tech_p_line}>- 64MB RAM</p>
            <p className={cssList.tech_p_line}>- Provides 10/100Mbps Ethernet via optional add-on board</p>
            <p className={cssList.tech_p_line}>- AMP technology supports running both LINUX and RTOS</p>
          </div>
          <h1 className={cssList.tech_title3}>Pin Out</h1>
          <div className={cssList.pinImg}></div>
          <div className={cssList.document}>
            <h1>Documents</h1>
            <ul>
              <li>
                <div className={cssList.down}></div>
                <a className={cssList.link_down} style={{ textDecoration: 'none' }} href="/DUOProductBriefv1.1.zip" download="DUOProductBriefv1.1.zip">DUO Product Brief V1.1.zip</a>
              </li>
              <li>

              </li>
            </ul>
          </div>
        </div>
        <div className={cssList.shadow1}></div>
        <div className={cssList.shadow2}></div>
        <div className={cssList.shadow5}></div>
        <div className={cssList.shadow12}></div>
        <div className={cssList.shadow13}></div>
        <div className={cssList.shadow14}></div>
        <div className={cssList.on5_box}>
          <ul>
            <li className={cssList.li}>
              <h1 className={cssList.on5_box_h1}>Communiy</h1>
              <p className={cssList.on5_box_p}>Join the Milk-V Matrix Chat channel to share your ideas with the developers all around the world.</p>
              <div className={cssList.on5_bottom}>
                <Link style={{ textDecoration: 'none', color: '#fff' }}>Get In Touch</Link>
              </div>
            </li>
            <li className={cssList.li}>
              <h1 className={cssList.on5_box_h1}>Wechat</h1>
              <div className={cssList.on5_img}></div>
              <div className={cssList.on5_bottom}>
                <Link style={{ textDecoration: 'none', color: '#fff' }}>Scan QR code</Link>
              </div>
            </li>
            <li className={cssList.li}>
              <h1 className={cssList.on5_box_h1}>QQ Group</h1>
              <div className={cssList.on5_img_QQ}></div>
              <div className={cssList.on5_bottom}>
                <Link style={{ textDecoration: 'none', color: '#fff' }}>Scan QR code</Link>
              </div>
            </li>
          </ul>
        </div>
        <div className={cssList.riscBg}>
          <h1 className={cssList.embrace}>Embrace the new era with DUO, </h1>
          <h1 className={cssList.risc_v}>Let's make RISC-V better together.</h1>
        </div>
      </div>
    </>
  )
}

export default function () {
  return (
    <>
      <Layout>
        <DetailsPage></DetailsPage>
      </Layout>
    </>
  )
}