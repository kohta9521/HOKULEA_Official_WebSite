import React from 'react';


// scss import
import styles from './styles/SubPageBody.module.scss';

// props
export type SubPageBodyProps = {
    id: number
    children: React.ReactNode
}


const SubPageBody = ({
    id,
    children,
}: SubPageBodyProps ) => {
    return (
        <div className={styles.body} key={id}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}

export default SubPageBody