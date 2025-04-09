import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import {Button} from "@mui/material";
export default function Form() {
    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
            />
            <br/>
            <Button type ="submit" variant="contained" color={"success"}>
                Submit
            </Button>
        </Box>
    );
}
