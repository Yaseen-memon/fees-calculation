import React, { useState } from 'react';

const FeesCalculator = () => {
  const [fees, setFees] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [finePercentage, setFinePercentage] = useState('');
  const [submitDate, setSubmitDate] = useState('');
  const [monthsLate, setMonthsLate] = useState(0);
  const [fineAmount, setFineAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(null);

  const calculateLateMonths = (due, submit) => {
    const dueD = new Date(due);
    const submitD = new Date(submit);

    let months =
      (submitD.getFullYear() - dueD.getFullYear()) * 12 +
      (submitD.getMonth() - dueD.getMonth());

    if (submitD.getDate() > dueD.getDate()) {
      months += 1;
    }

    return months > 0 ? months : 0;
  };

  const handleCalculate = (e) => {
    e.preventDefault();

    const lateMonths = calculateLateMonths(dueDate, submitDate);
    setMonthsLate(lateMonths);

    const fine = (Number(fees) * Number(finePercentage) * lateMonths) / 100;
    setFineAmount(fine);

    const total = Number(fees) + fine;
    setTotalAmount(total);
  };

  const isStepReady = fees && dueDate && finePercentage && submitDate;

  return (
    <div className="calculator-container">
      <style>{`
        .calculator-container {
          max-width: 450px;
          margin: 40px auto;
          padding: 30px;
          background: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0,0,0,0.1);
          font-family: sans-serif;
        }
        h2 {
          text-align: center;
          color: #1e90ff;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        label {
          display: block;
          font-weight: 600;
          margin-bottom: 5px;
        }
        input[type="number"],
        input[type="date"] {
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        input:disabled {
          background-color: #eee;
        }
        button {
          width: 100%;
          padding: 12px;
          background-color: #1e90ff;
          color: white;
          font-weight: bold;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 10px;
        }
        button:disabled {
          background-color: #999;
        }
        .result-box {
          margin-top: 25px;
          padding: 20px;
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .result-box p {
          margin: 5px 0;
        }
        .result-box h3 {
          margin-top: 15px;
          color: #1e90ff;
        }
      `}</style>

      <h2>Fees Calculator</h2>

      <form onSubmit={handleCalculate}>
        <div className="form-group">
          <label>Fees</label>
          <input
            type="number"
            value={fees}
            onChange={(e) => setFees(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            disabled={!fees}
          />
        </div>

        <div className="form-group">
          <label>Fine % per Month:</label>
          <input
            type="number"
            value={finePercentage}
            onChange={(e) => setFinePercentage(e.target.value)}
            required
            disabled={!dueDate}
          />
        </div>

        <div className="form-group">
          <label>Submit Date:</label>
          <input
            type="date"
            value={submitDate}
            onChange={(e) => setSubmitDate(e.target.value)}
            required
            disabled={!finePercentage}
          />
        </div>

        <button type="submit" disabled={!isStepReady}>
          Calculate Total
        </button>
      </form>

      {totalAmount !== null && (
        <div className="result-box">
          <p><strong>Months Late:</strong> {monthsLate}</p>
          <p><strong>Fees:</strong> {Number(fees).toFixed(2)}</p>
          <p><strong>Fine:</strong> {fineAmount.toFixed(2)}</p>
          <h3>Total Payable: {totalAmount.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default FeesCalculator;
