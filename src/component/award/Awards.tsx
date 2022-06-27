import styles from './awards.module.scss'

const Awards = () => {
  return (
    <ul className={styles.awards}>
      <li className={styles.award}>
        <div className={styles.google} />
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </li>
      <li className={styles.award}>
        <div className={styles.apple} />
        2018 애플 앱스토어
        <br />
        오늘의 여행앱 선정
      </li>
    </ul>
  )
}
export default Awards
