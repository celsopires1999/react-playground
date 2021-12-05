import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables';
import * as React from 'react';

const columnsDefinition: MUIDataTableColumn[] = [
    {
        name: 'name',
        label: 'Nome',
    },
    {
        name: 'is_active',
        label: 'Ativo?',
    },
    {
        name: 'created_at',
        label: 'Criado em',
    },
]

const data = [
    {name: 'Categoria 1', is_active: true, created_at: '2021-11-01'},
    {name: 'Categoria 2', is_active: false, created_at: '2021-11-02'},
    {name: 'Categoria 3', is_active: true, created_at: '2021-11-03'},
    {name: 'Categoria 4', is_active: false, created_at: '2021-11-04'},
    {name: 'Categoria 5', is_active: true, created_at: '2021-11-05'},
    {name: 'Categoria 6', is_active: false, created_at: '2021-11-06'},
]

type Props = {
    
};
const Table = (props: Props) => {
    return (
        <MUIDataTable 
            title='Listagem de Categorias'
            columns={ columnsDefinition }  
            data={ data }
        />
    );  
};

export default Table;
