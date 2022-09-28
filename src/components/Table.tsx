import React from 'react';
import {Token} from "../models";
import TableRow from "./TableRow";


interface ITableProps {
    items: Token[];
    sortColumn: string;
    onSort: (fieldName: string) => void; // if
    onFilter: () => void;
    onBuy: (id: number) => void;
}

function Table(props: ITableProps) {
    return (
        <div className={''}>
            {props.items.map(item => <TableRow key={item.id} item={item}/>)}
        </div>
    );
}

export default Table;