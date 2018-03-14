import React, { Component } from "react";
import moment from "moment";
import "./App.css";

class App extends Component {
  getCurrentDate = () => {
    return moment();
  };

  getCurrentMonth = () => {
    return moment().format("M");
  };

  getNextMonth = () => {
    return moment()
      .add(1, "M")
      .format("M");
  };

  getCurrentYear = () => {
    return moment().format("Y");
  };

  getNextYear = () => {
    return moment()
      .add(1, "Y")
      .format("YYYY");
  };

  getCurrentDay = () => {
    return moment().format("D");
  };

  getYear = () => {
    const next_month = this.getNextMonth();
    const current_month = this.getCurrentMonth();
    if (next_month > current_month) {
      return this.getCurrentYear();
    }
    return this.getNextYear();
  };

  countSalaryDay = () => {
    const current_day = this.getCurrentDay();
    const current_date = this.getCurrentDate();
    const year = this.getYear();
    if (current_day > 25) {
      //set next month salary day
      //count diff date with next month salary day
      const next_month = this.getNextMonth();
      const next_salary_date = moment(`${next_month}-25-${year}`);
      return Math.abs(current_date.diff(next_salary_date, "days"));
    }
    //set current month salary day
    //count diff date with current month salary day
    const current_month = this.getCurrentMonth();
    const next_salary_date = moment(`${current_month}-25-${year}`);
    return Math.abs(current_date.diff(next_salary_date, "days"));
  };

  render() {
    let message = `${this.countSalaryDay()} hari lagi gajian guys.... Semangat yassshh :*`;
    if (this.countSalaryDay() === 0) {
      message = "Selamat hari gajian guys, tetap semangat yaasshhh.... :*";
    }
    return (
      <div className="App">
        <strong>{message}</strong>
      </div>
    );
  }
}

export default App;
