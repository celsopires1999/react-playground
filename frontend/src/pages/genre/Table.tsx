import { Chip } from '@material-ui/core';
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables';
import * as React from 'react';
import { useEffect, useState } from 'react';
import genreHttp from '../../util/http/genre-http'
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

const columnsDefinition: MUIDataTableColumn[] = [
    {
        name: 'name',
        label: 'Nome',
    },
    {
        name: 'categories',
        label: 'Categorias',
        options: {
            customBodyRender(value, tableMeta, updateValue) {
                return value.map(value => value.name).join(', ');
            }
        }
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
const Table = (props: Props) => {

    const [data, setData] = useState([]);
    useEffect(
            () => {
                genreHttp
                    .list()
                    .then(
                        ({data}) => setData(data.data)
                )},[]
    );

    return (
        <React.Fragment>
        <MUIDataTable 
            title='Listagem de Gêneros'
            columns={ columnsDefinition }  
            data={ data }
        />
        </React.Fragment>
    );  
};

export default Table;
