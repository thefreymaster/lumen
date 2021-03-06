import React from 'react';
import { filter } from 'lodash';
import * as Lumen from "../../Context";
import TitleAndDescription from '../../common/TitleAndDescription';

const Active = () => {
    const context = React.useContext(Lumen.Context);
    if (context.rooms.length === 0) {
        return null
    }
    const month = new Date().getMonth();
    const mostActive = Math.max(...context.rooms.map(room => room.analytics[month].totalTimeOn));
    return <TitleAndDescription fontSize={28} title={monthActive.month} description="Most Active Room" />; 
}

export default Active;