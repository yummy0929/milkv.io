import React from 'react';
import css from './footer.module.css'

export default function(props){
    const color = props.color
    const pstyle = {
        height: "3vh",
        color: '#2D88C9',
        fontSize: "1.197vw",
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        flex: 'none',
        order: 2,
        flexGrow: 0,
        lineHeight: "2vh",
    }
   return (
    <>
        <footer style={{
            backgroundColor: `${color}`,
            width: "100%",
            height: "20.08vh",
            position: 'relative',
        }}>
            <div style={{
                width: "68.785vw",
                height: "10.897vh",
                position: "absolute",
                left: "15.63vw",
                top: '4.594vh',
            }}>
            <div style={{
             
                backgroundSize: "100%",
                width: "10.734vw",
                height: '6.41vh',
                margin:'1.09vw 0',
            }}
            className={css.footerLogo}
            ></div>
            <div style={{
                  width: "26.09vw",
                  height: "10.897vh",
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  display: 'flex',
                  flexDirection: "column",
                  alignContent: 'space-around',
            }}>
                <p style={pstyle}>Milk-V Machines</p>
                <p style={pstyle}>Baoan, Shenzhen, China</p>
                <p style={pstyle}>Email：support@milkv.io</p>
            </div>
            </div>
        </footer>
    </>
   )
}
