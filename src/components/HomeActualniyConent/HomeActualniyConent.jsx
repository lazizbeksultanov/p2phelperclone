import React from 'react';
import './HomeActualniyConent.scss';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';
import { FilterContent } from './../ExportComponent/ExportComponent';

export default function HomeActualniyConent() {
    return (
        <Tabs className="actualniy-conent">
            <TabList className="actualniy-conent__tablist">
                <Tab>Фильтр</Tab>
                <Tab>Расширенный фильтр</Tab>
            </TabList>

            <TabPanel className="actualniy-conent__tabpanel">
                <FilterContent />
            </TabPanel>
            <TabPanel className="actualniy-conent__TabPanel">
                <h3>Расширенный фильтр</h3>
                <FilterContent />
            </TabPanel>
        </Tabs>
    )
}
