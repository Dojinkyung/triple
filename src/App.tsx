import Awards from './component/award/Awards'
import ContentLogo from './component/contentLogo/ContentLogo'
import Metrics from './component/metrics/Metrics'
import styles from './app.module.scss'

const App = () => {
  return (
    <main className={styles.app}>
      <ContentLogo />
      <div>
        <Metrics />
        <Awards />
      </div>
    </main>
  )
}

export default App
