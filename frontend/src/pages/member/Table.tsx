import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables';
import * as React from 'react';
import { useEffect, useState } from 'react';
import castMemberHttp from '../../util/http/cast-member-http'
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

const CastMemberMap = {
    1: 'Diretor',
    2: 'Ator',
};

const columnsDefinition: MUIDataTableColumn[] = [
    {
        name: 'name',
        label: 'Nome',
    },
    {
        name: 'type',
        label: 'Tipo',
        options: {
            customBodyRender: (value, tableMeta, updateValue) => {
                return CastMemberMap[value];
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

    useEffect( () => {
        castMemberHttp
            .list()
            .then(({ data }) => setData(data.data))
        }, []
    );

    return (
        <React.Fragment>
        <MUIDataTable 
            title='Listar Membros de Elenco'
            columns={ columnsDefinition }  
            data={ data }   
        />
        </React.Fragment>
    );  
};

export default Table;
