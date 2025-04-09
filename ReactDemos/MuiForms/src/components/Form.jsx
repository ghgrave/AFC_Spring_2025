import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import {Button} from "@mui/material";
import {object, string} from  "yup"
import {yupResolver} from "@hookform/resolvers/yup";
export default function Form() {
    // we need a blueprint for our data!!!!!
    const userSchema = object({
        fname: string()
            .required("Must have a first name!!!")
            .max(3, "No more than 3 characters!")
    })

    const {register,
                setValue,
                handleSubmit,
                reset,
                formState: {errors}}
        = useForm({
            resolver: yupResolver(userSchema)
    })

    function handleChange(evt) {
    //     what are we doing here???? dealing with state!!!
    //     first argument = name of our input
    //     second argument = value of data (new state)
        setValue(evt.target.name, evt.target.value)
    }

    // When we submit form, ALL values from input will
    // be stored in a JS Object and we are calling it data
    const onSubmit = (data) => {
        // "flattening" data into a string!!!!
        // makes it easier to send (POST)
        const JSON_data = JSON.stringify(data)
        console.log(JSON_data)
    //     axios post
    //     axios(options).then(response => {
            //     if everything is ok:
            // reset()
        // })
    //     if everything is ok:
        reset()

    }
    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                {...register("fname")}
                onChange={handleChange}
                error={errors.fname !== undefined}
                helperText={errors.fname && <span>{errors.fname.message}</span>}
            />
            <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                {...register("lname")}
                onChange={handleChange}
                error={errors.lname !== undefined}
                helperText={errors.lname && <span>{errors.lname.message}</span>}
            />
            <br/>
            <Button type ="submit" variant="contained" color={"success"}>
                Submit
            </Button>
        </Box>
    );
}
