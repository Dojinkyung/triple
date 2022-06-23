import styles from './app.module.scss'
import Awards from './component/Awards'
import ContentLogo from './component/ContentLogo'
import Metrics from './component/Metrics'

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
