import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from './default-avatar.svg'
import styles from './FriendListItem.module.css'


const FriendListItem = ({isOnline, avatar, name}) => (
    <li className={styles.item}>
        <span className={isOnline ? styles.online : styles.offline}></span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
    </li>
)

FriendListItem.defaultProps = {
    isOnline: false,
    avatar: defaultImage
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired
}


export default FriendListItem