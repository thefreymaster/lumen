import React from 'react';
import classNames from 'classnames';
import * as Lumen from "../../Context";
import TitleAndDescription from '../../common/TitleAndDescription';
import { POWER_PER_HOUR, getHours } from '../../utils';
import Flex from '../../common/Flex';
import './status.css';

const Status = () => {
    const context = React.useContext(Lumen.Context);
    return context.rooms.map(room => {
        const inline = {
            bubble: {
                height: 30,
                width: 30,
                borderRadius: 50,
                marginBottom: 5,
                border: "4px solid grey",
                transition: 'background-color 1s ease-in-out',
                '@keyframes': '0% {background-color: #c55d03; 50% {background-color: #eb6d00;}; 100% {background-color: #c55d03;}}',
            },
            onFor: {
                fontSize: 10,
                backgroundColor: '#cccccc',
                padding: '0px 10px 0px 10px',
                borderRadius: 30,
            }
        }
        let onFor;
        let onForString;
        if (room.on) {
            const now = new Date().getTime();
            onFor = ((now - room.lastOn) / 60000).toFixed(2);
            onForString = `On For ${onFor}Min`
        }
        else {
            onForString = 'Off'
        }
        return <Flex direction="column" style={{ borderBottom: "2px dashed rgba(255, 255, 255, 0.23)" }} justifyContent="center" alignItems="center" height="100px" width="100%">
            <div className={classNames({ 'breath-animation': room.on })} style={inline.bubble}></div>
            <TitleAndDescription noMargin fontSize={12} title={room.name} />
            <div style={inline.onFor}>{onForString}</div>
        </Flex>
    }
    )
}

export default Status;