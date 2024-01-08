import React from 'react'

// scss import
import styles from './WorkContent.module.scss';

// components import
import SubPageSecTitle from '@/components/atoms/SubPageSecTitle';
import SubPageMainText from '@/components/molecules/SubPageMainText';


const WorkContent = () => {
    return (
        <div className={styles.work}>
            <SubPageSecTitle
                id={1}
                subTitle={'In this section you will find our track record of work.'}
                mainTitle="Our Past Performance"
            />
            <SubPageMainText id={1} text='過去の実績などをご覧いただけます。' />
            <SubPageMainText id={2} text='Coming Soon.....' />
        </div>
    )
}

export default WorkContent