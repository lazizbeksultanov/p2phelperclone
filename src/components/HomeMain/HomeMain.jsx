import React from "react";
import "./HomeMain.scss";
import {
    BaseContainer,
    HomeMainTitle,
    HomeActualniyConent,
    HomeMainBottom,
    TableSection,
    HomeDescription
} from "./../ExportComponent/ExportComponent";

export default function HomeMain() {

    return (
        <div className="home-main">
            <BaseContainer>
                <HomeMainTitle />
                <HomeActualniyConent />
                <HomeMainBottom />
                <TableSection />
            </BaseContainer>
            <HomeDescription />
        </div>
    );
}
