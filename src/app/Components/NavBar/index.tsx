import { FC } from 'react'
import styles from './navbar.module.css'

export const Navbar: FC<any> = () => {
   return (
      <nav className={styles.stickTop}>
         <div className={styles.navContent}>testing</div>
      </nav>
   )
}
