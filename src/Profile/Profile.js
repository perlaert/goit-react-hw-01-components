import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from './default-avatar.svg'
import styles from './Profile.module.css'

const Profile = ({src, name, tag, location, stats}) => (
<div className={styles.profile}>
  <div className="description">
    <img
      src={src}
      alt="Аватар пользователя"
      className={styles.avatar}
    />
    <p className={styles.name}>{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={styles.stats}>
    <li className={styles.item}>
      <span className="label">Followers</span>
      <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li className={styles.item}>
      <span className="label">Views</span>
      <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li className={styles.item}>
      <span className="label">Likes</span>
      <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
)

Profile.defaultProps = {
    src: defaultImage
}

Profile.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
}

export default Profile