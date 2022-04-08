import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from './Statistics/Notification';
import Statistics from './Statistics';
import Section from './Section';
import options from './data/options.json';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalData = countTotalFeedback();
  const message = 'There is no feedback';

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function positivePercent() {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  }

  function leaveFeedback(event) {
    const { name } = event.currentTarget;

    name === 'good' && setGood(good + 1);
    name === 'neutral' && setNeutral(neutral + 1);
    name === 'bad' && setBad(bad + 1);
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        {!totalData ? (
          <Notification message={message} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalData}
            percentage={positivePercent()}
          />
        )}
      </Section>
    </>
  );
}
