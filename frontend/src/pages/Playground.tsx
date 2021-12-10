import * as React from 'react';
import { Page } from '../components/Page';
import axios from 'axios';

interface DashboardProps {
    
};

const Playground = (props: DashboardProps) => {
    console.log('play');
    function axiosTest() {
        const instance = axios.create({
            baseURL: 'http://eb68-201-42-42-59.ngrok.io/api',
          });

          instance.get('/categories')
          .then(function (response) {
              console.log(response.data);
              console.log(response.status);
              console.log(response.statusText);
              console.log(response.headers);
              console.log(response.config);
          })
          .catch(function (response) {
              console.log('response => ', response);
          })
    }

    return (
        <Page title="Playground">
            
        </Page>
    );
};

export default Playground;
