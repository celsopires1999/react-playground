import { Checkbox, TextField, makeStyles, Theme, Box, Button, ButtonProps, MenuItem } from '@material-ui/core';
import * as React from 'react';
import { useState, useEffect } from 'react';
import useForm from 'react-hook-form';
import categoryHttp from '../../util/http/category-http';
import genreHttp from '../../util/http/genre-http';

const useStyles = makeStyles((theme: Theme) => {
        return {
            submit: {
                margin: theme.spacing(1),
            }
        }
    }
);

const Form = () => {

    const classes = useStyles();

    const buttonProps: ButtonProps = {
        variant: 'contained',
        color: 'secondary', 
        className: classes.submit,
    };

    const { register, handleSubmit, getValues, watch, setValue } = useForm<any>({ 
        defaultValues: { 
            categories_id: [],
            is_active: true 
        } 
    });

    // const { register, handleSubmit, getValues, setValue, watch } = useForm<{categories_id}>({
    //     defaultValues: {
    //         categories_id: []
    //     }
    // });
    
    // function onSubmit (formData, event) {
    const onSubmit = (formData, event) => {
        console.log(event);
        genreHttp
            .create(formData)
            .then((response) => 
            console.log(response))
            .catch((response) => 
            console.log(response));
    }

    const [categories, setCategories] = useState<any[]>([]);
    
    useEffect( () => {
        register({name: "categories_id"})
    }, [register]);

    useEffect(
        () => {
            categoryHttp
                .list()
                .then(
                    ({data}) => {
                        setCategories(data.data);
                    }
                )
        }, []
    );
    
    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <TextField 
                name='name'
                label='Nome'
                variant='outlined'
                fullWidth
                inputRef={ register }
            />
            <TextField
                select
                name="categories_id"
                value={watch('categories_id')}
                label="Categorias"
                margin={"normal"}
                variant={"outlined"}
                fullWidth
                onChange={(e) => {
                    setValue('categories_id', e.target.value);
                }}
                SelectProps={{
                    multiple: true
                }}
            >
                <MenuItem value="" disabled>
                    <em>Selecione categorias</em>
                </MenuItem>
                {
                    categories.map(
                        (category, key) => (
                            <MenuItem key={key} value={category.id}>{category.name}</MenuItem>
                        )
                    )
                }
            </TextField>
            <Checkbox 
                name='is_active'
                color='primary'
                defaultChecked
                inputRef={ register }
            />
            Ativo?
            <Box dir='rtl' onClick={() => onSubmit(getValues(), null)} >
                <Button 
                    { ...buttonProps }
                >
                    Salvar
                </Button>
                <Button
                    { ...buttonProps }
                    type='submit'
                >
                    Salvar e continuar editando
                </Button>
            </Box>
        </form>
    );
};

export default Form;
