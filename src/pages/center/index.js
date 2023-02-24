import React, { useState,useEffect } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import cCss from "./center.module.css"

function  Center(){
    return(
        <div className={cCss.centerBox}>
            <div className={cCss.startbox}>Center Page</div>
        </div>
    )
}


export default function () {
    return (
      <>
        <Layout>
          <Center></Center>
        </Layout>
      </>
    )
  }