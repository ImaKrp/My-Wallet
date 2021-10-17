import React, { useState, useMemo, useEffect } from "react";
import { Container, Content } from "./style";
import { ContentHeader } from "../../../components/ContentHeader";
import { Select } from "../../../components/Select";
import { WalletCard } from "../../../components/WalletCard";
import { MessageCard } from "../../../components/MessageCard";
import monthsList from "../../../utils/months";

import gains from "../../../data/gains";
import expenses from "../../../data/expenses";

export const Dashboard: React.FC = () => {
  const starterMonth = new Date().getMonth() + 1;
  const starterYear = new Date().getFullYear();
  const [selectedMonth, setSelectedMonth] = useState<number>(starterMonth);
  const [selectedYear, setSelectedYear] = useState<number>(starterYear);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, []);

  const months = useMemo(() => {
    return monthsList.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const gainLastChange = useMemo(() => {
    const filteredGains = gains.filter((item) => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return month === selectedMonth && year === selectedYear;
    });
    if (!filteredGains[0]) return;
    return filteredGains[filteredGains.length - 1].date;
  }, [selectedMonth, selectedYear]);

  const expensesLastChange = useMemo(() => {
    const filteredExpenses = expenses.filter((item) => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return month === selectedMonth && year === selectedYear;
    });
    if (!filteredExpenses[0]) return;
    return filteredExpenses[filteredExpenses.length - 1].date;
  }, [selectedMonth, selectedYear]);

  useEffect(() => {
    const starterYear = new Date().getFullYear();
    if (!years) return;
    const orderedYears = years.sort(function (el, nextEl) {
      return el.value - nextEl.value;
    });
    if (!orderedYears[0]) return;
    const maximumYear = orderedYears[orderedYears.length - 1].value;
    if (maximumYear !== starterYear) setSelectedYear(maximumYear);
  }, [years]);

  return (
    <Container>
      <ContentHeader title="Dashboard" color="success">
        <Select
          type="months"
          options={months}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
          value={selectedMonth}
        />
        <Select
          type="years"
          options={years}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          value={selectedYear}
        />
      </ContentHeader>
      <Content>
        <WalletCard
          color="success"
          title="Balance"
          subtitle="Update based on gains and expenses."
          amount={150}
          icon="dollar"
        />
        <WalletCard
          color="info"
          title="Gains"
          subtitle={
            gainLastChange
              ? `Last change on ${gainLastChange}.`
              : "None information this month"
          }
          amount={5000.12}
          icon="arrowUp"
        />
        <WalletCard
          color="warning"
          title="Expenses"
          subtitle={
            expensesLastChange
              ? `Last change on ${expensesLastChange}.`
              : "None information this month"
          }
          amount={4850.0}
          icon="arrowDown"
        />
        <MessageCard
          firstTitle="Well done!"
          secondTitle=" You did great this month!"
          subtitle="You should keep this way n' may even invest it."
        />
        <MessageCard
          firstTitle="Well done!"
          secondTitle=" You did great this month!"
          subtitle="You should keep this way n' may even invest it."
        />
      </Content>
    </Container>
  );
};
