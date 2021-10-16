import { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";
import SectionTitle from "./components/SectionTitle";
import Statistics from "./components/Statistics";

export class FeedbackApp extends Component {
  state =   {
  good: 0,
  neutral: 0,
    bad: 0
  }
  feedbackHandler = e => {
    const currentBtnValue = e.currentTarget.textContent.toLowerCase();
    // console.log([currentBtnValue])
    this.setState(prevState => ({
      ...prevState,
      [currentBtnValue]: prevState[currentBtnValue] +1
    }))
  }
  countTotalFeedback = e => {
    const values = Object.values(this.state);
    // console.log(values);
    return values.reduce((acc, val) => {
      // console.log(val);
      // console.log(acc);
      acc += val;
      return acc;
    });
  };
  countPositiveFeedbackPercentage = e => {
    return Math.trunc((this.state.good / this.countTotalFeedback()) * 100);
  };
  NoFeedback = () => {
    if (this.state.good === 0 &&
      this.state.neutral === 0 &&
      this.state.bad === 0) {
      return true
    }
    else {
      return false
    }
  }
  render() {
    const btnNames = Object.keys(this.state);
    return <>
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions
        options={btnNames}
        onLeaveFeedback = {this.feedbackHandler}/>
      </SectionTitle>
      <SectionTitle title="Statistics">
        {this.NoFeedback() ? (<Notification message="No feedback given" />) : (<Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback()}
        positivePercentage = {this.countPositiveFeedbackPercentage()}
        />)}
      </SectionTitle>
    </>
}
}
