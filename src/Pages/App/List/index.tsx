import React, { useMemo, useState, useEffect } from "react";
import { Container, Content, Filters, Button } from "./style";
import { ContentHeader } from "../../../components/ContentHeader";
import { Select } from "../../../components/Select";
import { ListCard } from "../../../components/ListCard";
import monthsList from "../../../utils/months";
import formatAmountValue from "../../../utils/formatAmountValue";

import gains from "../../../data/gains";
import expenses from "../../../data/expenses";
interface IRoutesParams {
  match: {
    params: {
      type: string;
    };
  };
}

interface IData {
  description: string;
  amount: string;
  type: string;
  frequency: string;
  date: string;
}

export const List: React.FC<IRoutesParams> = ({ match }) => {
  const starterMonth = new Date().getMonth() + 1;
  const starterYear = new Date().getFullYear();

  const [data, setData] = useState<IData[]>([]);
  const [frequencyFilter, setFrequencyFilter] = useState<string[]>([
    "recurrent",
    "eventual",
  ]);
  const [selectedMonth, setSelectedMonth] = useState<number>(starterMonth);
  const [selectedYear, setSelectedYear] = useState<number>(starterYear);

  const { type } = match.params;

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    data.forEach((item) => {
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
  }, [data]);

  const months = useMemo(() => {
    return monthsList.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const pageType = useMemo(() => {
    return type === "gains"
      ? { title: "Gains", color: "info" }
      : { title: "Expenses", color: "warning" };
  }, [type]);

  useEffect(() => {
    setData(type === "gains" ? gains : expenses);
  }, [type]);

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

  const handleFrequencyFilter = (frequency: string) => {
    const alreadySelected = frequencyFilter.findIndex(
      (item) => item === frequency
    );
    if (alreadySelected >= 0) {
      const filtered = frequencyFilter.filter((value) => {
        return value !== frequency;
      });
      setFrequencyFilter([...filtered]);
    } else {
      setFrequencyFilter([...frequencyFilter, frequency]);
    }
  };

  return (
    <Container>
      <ContentHeader title={pageType.title} color={pageType.color}>
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
      <Filters>
        <Button
          color="info"
          onClick={() => handleFrequencyFilter("recurrent")}
          active={frequencyFilter.includes("recurrent") ? true : false}
        >
          Recurrent
        </Button>
        <Button
          color="warning"
          onClick={() => handleFrequencyFilter("eventual")}
          active={frequencyFilter.includes("eventual") ? true : false}
        >
          Eventual
        </Button>
      </Filters>
      <Content>
        {data &&
          data
            .filter((item) => {
              const date = new Date(item.date);
              const month = date.getMonth() + 1;
              const year = date.getFullYear();

              return (
                month === selectedMonth &&
                year === selectedYear &&
                frequencyFilter.includes(item.frequency)
              );
            })
            .map((item, index) => {
              return (
                <ListCard
                  key={index}
                  title={item.description}
                  subtitle={item.date}
                  tagColor={item.frequency === "eventual" ? "warning" : "info"}
                  amount={formatAmountValue(Number(item.amount))}
                />
              );
            })}
      </Content>
    </Container>
  );
};
