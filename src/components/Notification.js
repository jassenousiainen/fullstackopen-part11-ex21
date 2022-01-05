import React from 'react'
import { connect } from 'react-redux'
import '../css/Notification.css'

const Notification = ({ msg }) => {
  return (
    <div className={`notification ${msg.length > 0 ? 'open' : 'closed'}`}>
      <div className='message-container'>
        <p>
          {msg}
        </p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    msg: state.notification,
  }
}
const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification