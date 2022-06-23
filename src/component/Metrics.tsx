import styles from './metrics.module.scss'

const Metrics = () => {
  return (
    <ul className={styles.metrics}>
      <li className={styles.metric}>
        <strong>700만 명</strong>의 여행자
      </li>
      <li className={styles.metric}>
        <strong>100만 개</strong>의 여행 리뷰
      </li>
      <li className={styles.metric}>
        <strong>470만 개</strong>의 여행 일정
      </li>
    </ul>
  )
}
export default Metrics
