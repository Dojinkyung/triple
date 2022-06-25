import useCountUp from '../hook/useCountUp'
import styles from './metrics.module.scss'

const Metrics = () => {
  const userCountUp = useCountUp(700)
  const reviewCountUp = useCountUp(100)
  const scaduleCountUp = useCountUp(470)

  return (
    <ul className={styles.metrics}>
      <li className={styles.metric}>
        <strong>{userCountUp}만 명</strong>의 여행자
      </li>
      <li className={styles.metric}>
        <strong>{reviewCountUp}만 개</strong>의 여행 리뷰
      </li>
      <li className={styles.metric}>
        <strong>{scaduleCountUp}만 개</strong>의 여행 일정
      </li>
    </ul>
  )
}
export default Metrics
