import React, { useState } from 'react';

const FeesCalculator = () => {
  const [fees, setFees] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [finePercentage, setFinePercentage] = useState('');
  const [submitDate, setSubmitDate] = useState('');
  const [totalAmount, setTotalAmount] = useState(null);
  const [monthsLate, setMonthsLate] = useState(0);
  const [fineAmount, setFineAmount] = useState(0);

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

  const isStepReady =
    fees && dueDate && finePercentage && submitDate;

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Fees Calculator with Fine</h2>
      <form onSubmit={handleCalculate}>
        <div>
          <label>Fees</label><br />
          <input
            type="number"
            value={fees}
            onChange={(e) => setFees(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Due Date:</label><br />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            disabled={!fees}
          />
        </div>

        <div>
          <label>Fine Percentage per Month (%):</label><br />
          <input
            type="number"
            value={finePercentage}
            onChange={(e) => setFinePercentage(e.target.value)}
            required
            disabled={!dueDate}
          />
        </div>

        <div>
          <label>Submit Date:</label><br />
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
        <div style={{ marginTop: '20px' }}>
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
