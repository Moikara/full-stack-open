import { useState } from 'react'

const Button = ({ handler, children }) => <button onClick={handler}>{children}</button>

const StatisticLine = ({ title, statistic, percentage = false }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{statistic}{percentage && "%"}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positivePercentage = good / all * 100

  return (
    <div>
      <h1>Statistics</h1>
      {good > 0 || neutral > 0 || bad > 0
        ?
        <table>
          <tbody>
            <StatisticLine title={"good"} statistic={good} />
            <StatisticLine title={"neutral"} statistic={neutral} />
            <StatisticLine title={"bad"} statistic={bad} />
            <StatisticLine title={"all"} statistic={all} />
            <StatisticLine title={"average"} statistic={average} />
            <StatisticLine title={"positive"} statistic={positivePercentage} percentage={true} />
          </tbody>
        </table>
        :
        <p>no feedback given</p>
      }
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positivePercentage = good / all * 100

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handler={handleGood}>good</Button>
      <Button handler={handleNeutral}>neutral</Button>
      <Button handler={handleBad}>bad</Button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App