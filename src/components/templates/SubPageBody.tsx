import React from 'react';


// scss import
import styles from './styles/SubPageBody.module.scss';
import Contact from '../organisms/Contact';
import Footer from '../organisms/Footer';

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
        <>
            <div className={styles.body} key={id}>
                <div className={styles.container}>
                    {children}
                </div>
            </div>
            {/* subPageContact Componentsを挿入する */}
            {/* <Contact /> */}
            <Footer />
        </>

    )
}

export default SubPageBody