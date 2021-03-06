import React from 'react'
import Stream from '../components/Stream'
import Top from '../components/Top'
import Nameplates from '../components/Nameplates'
import Lowerthird from '../components/Lowerthird'
import Message from '../components/Message'

const Standby = props => (
  <Stream>
    <Top
      onnow={props.onnow}
      height={2}
      title={props.title}
    />
    <Message />
    <Lowerthird
      title={props.lowerThirdTitle}
      text={props.lowerThirdText}
      visible={props.lowerThirdVisible}
    />
    <Nameplates
      host1={props.host1}
      host2={props.host2}
      guest1={props.guest1}
      guest2={props.guest2}
      guest3={props.guest3}
      people={props.people}
      visible={props.namesVisible}
    />
  </Stream>
)

export default Standby
