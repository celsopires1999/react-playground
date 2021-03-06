import { Chip, TextField } from '@material-ui/core';
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables';
import * as React from 'react';
import { useEffect, useState } from 'react';
import categoryHttp from '../../util/http/category-http';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

const columnsDefinition: MUIDataTableColumn[] = [
    {
        name: 'name',
        label: 'Nome',
    },
    {
        name: 'is_active',
        label: 'Ativo?',
        options: {
            customBodyRender(value, tableMeta, updateValue) {
                return value
                    ? <Chip label={'Sim'} color='primary'/> 
                    : <Chip label={'Não'} color='secondary'/>
            }
        }
    },
    {
        name: 'created_at',
        label: 'Criado em',
        options: {
            customBodyRender(value, tableMeta, updateValue) {
                return <span>{ format(parseISO(value), 'dd-MM-yyyy') }</span>
            }
        }
    },
]

type Props = {
    
};

interface Category {
    id: string;
    name: string;
};

const Table = (props: Props) => {

    const [data, setData] = useState<Category[]>([]);

    useEffect( () => {
        categoryHttp
            .list<{data: Category[]}>()
            .then(({data}) => setData(data.data));
        }, [] 
    );

    return (
        <React.Fragment>
        <MUIDataTable 
            title='Listagem de Categorias'
            columns={ columnsDefinition }  
            data={ data }
        />
        </React.Fragment>
    );  
};

export default Table;
