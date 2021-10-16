
import {useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import SectionTitle from './components/SectionTitle/SectionTitle';
import Notification from './components/Notification/Notification';
import './App.css';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = vote => {
    let  value = eval(vote);
    switch (vote) {
      case 'good':
        setGood(value + 1);
        break;
      case 'neutral':
        setNeutral(value + 1);
        break;
      case 'bad':
        setBad(value + 1);
        break;
      default:
        return;
    }
  };
  const calculateTotalVotes = () => {
    return good + bad + neutral;
   }
  return (
    <div>
      <SectionTitle title="Please, leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </SectionTitle>
      <SectionTitle title="Statistics">
        {calculateTotalVotes() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={good + bad + neutral}
            positivePercentage={Number((good / calculateTotalVotes() * 100).toFixed(2))}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </SectionTitle>
    </div>
  );
}

export default App;
