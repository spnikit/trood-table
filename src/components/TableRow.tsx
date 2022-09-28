import React from 'react';
import {Token} from "../models";

interface ITableRowProps {
    item: Token;
}

function TableRow({item}: ITableRowProps) {
    return (
        <div className={'px-4 py-2 grid grid-cols-8 items-center'}>
            <div>{item.name}</div>
            <div>{item.type}</div>
            <div>{item.conditions}</div>
            <div>{item.volume}</div>
            <div>{item.roi}</div>
            <div>{item.free}</div>
            <div>{item.hedge}</div>
            <div>
                <button className={'text-pink-500 border-solid border-2 border-pink-500 rounded px-4 py-1' +
                    ' hover:text-white hover:bg-pink-500'}>Buy
                </button>
            </div>
        </div>
    );
}

export default TableRow;