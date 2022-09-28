import React from 'react';
import Table from "./components/Table";
import {Token} from "./models";


const items: Token[] = [
    {
        id: 1,
        name: 'Pyshky.net',
        status: 'green',
        type: 'TRST',
        conditions: 'x2,6 months',
        volume: 120000,
        roi: 4,
        free: 20,
        hedge: 20
    },
    {
        id: 2,
        name: 'NFT-Flowershop',
        status: 'yellow',
        type: 'THT',
        conditions: 'x4,2 years',
        volume: 80000,
        roi: 23,
        free: 12,
        hedge: 0
    },
    {
        id: 4,
        name: 'Web3 P2P University',
        status: 'red',
        type: 'TRST',
        conditions: 'x2,1 years',
        volume: 200000,
        roi: 6,
        free: 1,
        hedge: 0
    },
]


function App() {
    return (
        <div className="container mx-auto">
            <Table items={items}
                   sortColumn={""}
                   onSort={() => {}}
                   onFilter={() => {}}
                   onBuy={() => {}}
            />
        </div>
    );
}

export default App;
