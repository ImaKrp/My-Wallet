import React, { useState, useMemo, useEffect } from "react";
import { Container, Content } from "./style";
import { ContentHeader } from "../../../components/ContentHeader";
import { Select } from "../../../components/Select";
import { WalletCard } from "../../../components/WalletCard";
import { MessageCard } from "../../../components/MessageCard";
import { PieChartCard } from "../../../components/PieChartCard";
import { HistoryBox } from "../../../components/HistoryBox";
import monthsList from "../../../utils/months";
import { MonthVariation } from "../../../components/MonthVariation";

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

  const monthGains = useMemo(() => {
    let total: number = 0;
    gains
      .filter((item) => {
        const date = new Date(item.date);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return month === selectedMonth && year === selectedYear;
      })
      .forEach((item) => {
        total += Number(item.amount);
      });
    return total;
  }, [selectedMonth, selectedYear]);

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

  const monthExpenses = useMemo(() => {
    let total: number = 0;
    expenses
      .filter((item) => {
        const date = new Date(item.date);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return month === selectedMonth && year === selectedYear;
      })
      .forEach((item) => {
        total += Number(item.amount);
      });
    return total;
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

  const monthBalance = useMemo(() => {
    return monthGains - monthExpenses;
  }, [monthGains, monthExpenses]);

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

  const message = useMemo(() => {
    if (monthBalance > 0) {
      return {
        firstTitle: "Well done!",
        secondTitle: "You did great this month!",
        subtitle: "You should keep this way n' may even invest it.",
      };
    } else if (monthBalance === 0) {
      return {
        firstTitle: "Not bad!",
        secondTitle: "But could be better.",
        subtitle: "You should try to decrease the expenses next time.",
      };
    } else {
      return {
        firstTitle: "Be careful!",
        secondTitle: "You spent more than you should.",
        subtitle: "You neet to decrease the expenses next time.",
      };
    }
  }, [monthBalance]);

  const relationExpensesGains = useMemo(() => {
    const percentGains = (monthBalance / monthGains) * 100;
    const percentExpenses = (monthExpenses / monthGains) * 100;
    const data = [
      {
        name: "Balance",
        value: monthGains,
        percent: percentGains ? Number(percentGains.toFixed(1)) : 0,
        color: "success",
      },
      {
        name: "Expenses",
        value: monthExpenses,
        percent: percentExpenses ? Number(percentExpenses.toFixed(1)) : 0,
        color: "warning",
      },
    ];
    return data;
  }, [monthExpenses, monthGains, monthBalance]);

  const historyData = useMemo(() => {
    return monthsList
      .map((_, month) => {
        let amountEntry: number = 0;
        gains.forEach((gain) => {
          const date = new Date(gain.date);
          const gainMonth = date.getMonth();
          const gainYear = date.getFullYear();

          if (gainMonth === month && gainYear === selectedYear)
            amountEntry += Number(gain.amount);
        });

        let amountOutput: number = 0;
        expenses.forEach((expense) => {
          const date = new Date(expense.date);
          const gainMonth = date.getMonth();
          const gainYear = date.getFullYear();

          if (gainMonth === month && gainYear === selectedYear)
            amountOutput += Number(expense.amount);
        });

        return {
          monthNumber: month,
          month: monthsList[month].substr(0, 3),
          amountOutput: String(amountOutput),
          amountEntry: String(amountEntry),
        };
      })
      .filter((item) => {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        return (
          (selectedYear === currentYear && item.monthNumber <= currentMonth) ||
          selectedYear < currentYear
        );
      });
  }, [selectedYear]);

  const relationExpensesRecurrentEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    expenses
      .filter((expense) => {
        const date = new Date(expense.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        return month === selectedMonth && year === selectedYear;
      })
      .forEach((expense) => {
        if (expense.frequency === "eventual")
          return (amountEventual += Number(expense.amount));
        if (expense.frequency === "recurrent")
          return (amountRecurrent += Number(expense.amount));
      });

    const total = amountEventual + amountRecurrent;
    const percent = (value: number): number => {
      if (!total) return 0;
      else return Number(((value / total) * 100).toFixed(1));
    };
    return [
      {
        name: "Recurrent",
        amount: amountRecurrent,
        percent: percent(amountRecurrent),
        color: "info",
      },
      {
        name: "Eventual",
        amount: amountEventual,
        percent: percent(amountEventual),
        color: "warning",
      },
    ];
  }, [selectedMonth, selectedYear]);

  const relationGainsRecurrentEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    gains
      .filter((gain) => {
        const date = new Date(gain.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        return month === selectedMonth && year === selectedYear;
      })
      .forEach((gain) => {
        if (gain.frequency === "eventual")
          return (amountEventual += Number(gain.amount));
        if (gain.frequency === "recurrent")
          return (amountRecurrent += Number(gain.amount));
      });

    const total = amountEventual + amountRecurrent;
    const percent = (value: number): number => {
      if (!total) return 0;
      else return Number(((value / total) * 100).toFixed(1));
    };
    return [
      {
        name: "Recurrent",
        amount: amountRecurrent,
        percent: percent(amountRecurrent),
        color: "info",
      },
      {
        name: "Eventual",
        amount: amountEventual,
        percent: percent(amountEventual),
        color: "warning",
      },
    ];
  }, [selectedMonth, selectedYear]);

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
          amount={monthBalance}
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
          amount={monthGains}
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
          amount={monthExpenses}
          icon="arrowDown"
        />
        <MessageCard
          firstTitle={message.firstTitle}
          secondTitle={message.secondTitle}
          subtitle={message.subtitle}
        />
        <PieChartCard data={relationExpensesGains} />
        <HistoryBox
          data={historyData}
          lineColorEntry="info"
          lineColorOutput="warning"
        />
        <MonthVariation
          title="Expenses"
          data={relationExpensesRecurrentEventual}
        />
        <MonthVariation title="Gains" data={relationGainsRecurrentEventual} />
      </Content>
    </Container>
  );
};
