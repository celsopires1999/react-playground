import * as React from 'react';
import { useEffect } from 'react';
import { Box, Button, ButtonProps, FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField, Theme } from '@material-ui/core';
import  useForm  from 'react-hook-form';
import castMemberHttp from '../../util/http/cast-member-http';

const useStyles = makeStyles((theme: Theme) => { 
    return { 
        submit: { 
            margin: theme.spacing(1), 
        } 
    } 
})

const Form = () => {

    const classes = useStyles();

    const buttonProps: ButtonProps = {
        variant: 'contained',
        color: 'secondary', 
        className: classes.submit,
    };
    
    const { register, handleSubmit, getValues, setValue } = useForm();

    useEffect(() => { 
        register({name: "type"}) 
    }, [register]);

    const onSubmit = (dataForm, event) => {
        console.log('==>> dataForm: ', dataForm);
        console.log('==>> event: ', event);
        castMemberHttp
            .create(dataForm)
            .then((result) => console.log(result))
            .catch((result) => console.log(result));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField 
                name='name' 
                inputRef={ register } //==>> registrar no formulário 
                label='Nome' 
                fullWidth 
                variant='outlined' 
            />
            <FormControl margin="normal"> 
                <FormLabel component="legend">Tipo</FormLabel> 
                <RadioGroup 
                    name="type" 
                    onChange={(e) => { 
                        setValue('type',parseInt(e.target.value)); 
                    }}> 
                    <FormControlLabel value="1" control={<Radio />} label="Diretor" /> 
                    <FormControlLabel value="2" control={<Radio />} label="Ator" /> 
                </RadioGroup> 
            </FormControl>
            <Box dir='rtl'> 
                <Button  
                    { ...buttonProps }  
                    onClick={ () => onSubmit(getValues(), null) } 
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
