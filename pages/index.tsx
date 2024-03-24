import Table from '@/components/table';
import styles from '../styles/index.module.css';

export default function Index() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Table/>
      </div>
    </div>
  )
}
