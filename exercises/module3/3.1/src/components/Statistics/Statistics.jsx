/* eslint-disable*/
import StatisticLine from "./StatisticLine";


const Statistics = ({ good, neutral, bad, total,average, positive }) => {
    if (good === 0 && neutral === 0 && bad === 0 && total === 0 && average === 0 && positive === 0) {
      return (
        <div>
          No feedback given
        </div>
      )
    }
    return (
      //Display the statistics in an HTML table, so that your application
      <div>
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="Total" value={total} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine text="Positive" value={positive} />
          </tbody>
        </table>
      </div>
      
    )
  }

export default Statistics;