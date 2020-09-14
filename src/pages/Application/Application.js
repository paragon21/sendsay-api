import React, {useEffect} from 'react'
import './Application.css'

import Connector from '../../_services/connector'
import { func } from 'prop-types'

const Application = () => {

  const sendsay = new Connector()

  // useEffect( () => {
  //   async function getLogin() {
  //     const result = await sendsay.login("vdovinkr@gmail.com", "thochu5Xae")
  //     console.log(result)
  //   }
  //   getLogin()
  // }, [])

    return (
        <>
          <h1>Private zone</h1>
        </>
    )
}

export default Application