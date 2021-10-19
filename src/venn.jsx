import React, {useState} from 'react';
import { VennDiagram } from 'reaviz';
import TextField from '@mui/material/TextField'

function Venn(){

    const values = [
        {key: ['A'], data: 12},
        {key: ['B'], data: 12},
        {key: ['A', 'B'], data: 2}
    ];
    return(
    <div>
    <form>
        <TextField 
            id="standard-basic" 
            label="Value of A" 
            variant="standard" 
            type="number"
        />
        <TextField 
            id="standard-basic" 
            label="Value of B" 
            variant="standard"
            type="number"
        />
        <TextField 
            id="standard-basic" 
            label="Value of A U B" 
            variant="standard" 
            type="number"
        />
        <button
            type="submit">
            Submit
        </button>
    </form>
    <VennDiagram
        height={300}
        width={300}
        data={values}
    />
    </div>
    );
}

export default Venn;