import React from 'react';
import Table from '../components/InventoryTable';

const Inventory = props => {
    return (
        <section className='inventory-container' >
                    <main className='inventory-main content-box'>
                <Table />
                    </main>
            
        </section>
    )
}

export default Inventory