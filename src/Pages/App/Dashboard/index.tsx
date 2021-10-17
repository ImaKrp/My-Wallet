import React, { useState } from "react";
import { Container } from "./style";
import { ContentHeader } from "../../../components/ContentHeader";
import { Select } from "../../../components/Select";

export const Dashboard: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  const [selectedYear, setSelectedYear] = useState<string>(
    String(new Date().getFullYear())
  );

  return (
    <Container>
      <ContentHeader title="Dashboard" color="info">
        {/* <Select
          options={months}
          onChange={(e) => setSelectedMonth(e.target.value)}
          value={selectedMonth}
        />
        <Select
          options={allYears}
          onChange={(e) => setSelectedYear(e.target.value)}
          value={selectedYear}
        /> */}
      </ContentHeader>
    </Container>
  );
};
