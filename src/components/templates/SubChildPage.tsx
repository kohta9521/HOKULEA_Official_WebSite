import React from 'react';


// scss ipmort
import styles from './styles/SubChildpage.module.scss'


// props type
export type SubChildPageProps = {
    id: number
    children: React.ReactNode
}



const SubChildPage = ({
    id,
    children
}: SubChildPageProps) => {
    return (
        <div className={styles.subChildpage} key={id}>
            {children}
        </div>
    )
}

export default SubChildPage;