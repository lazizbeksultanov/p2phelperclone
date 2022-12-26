import React, { useState } from "react";
import "./TableSection.scss";
import { Table, Pagination } from "./../ExportComponent/ExportComponent";
import { columns, tableMockData } from "../Mock/Mock";
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';

export default function TableSection() {
  const [page, setPage] = useState(1);
  return (
    <div className='table-section'>
      <Tabs className="actualniy-conent">
        <TabList className="actualniy-conent__tablist table-section__tablist">
          <Tab>Все</Tab>
          <Tab>Со спотами</Tab>
          <Tab>Без спотов</Tab>
        </TabList>

        <TabPanel className="actualniy-conent__tabpanel table-section__tabpanel">
          <Table columns={columns} data={tableMockData} />
        </TabPanel>
        <TabPanel className="actualniy-conent__tabpanel table-section__tabpanel">
          <Table columns={columns} data={tableMockData} />
        </TabPanel>
        <TabPanel className="actualniy-conent__tabpanel table-section__tabpanel">
          <Table columns={columns} data={tableMockData} />
        </TabPanel>
      </Tabs>
      <div className='table-section__pagination'>
        <Pagination
          total={290}
          current={page}
          pagination={setPage} />
      </div>
    </div>
  );
}
