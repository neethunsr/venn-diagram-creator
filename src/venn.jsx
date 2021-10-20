import React, {useState} from 'react';
import { VennArc, VennDiagram, VennSeries } from 'reaviz';
import TextField from '@mui/material/TextField';
import './venn.css';


function Venn(){
    const [valueA, setValueA] = useState();
    const [valueB, setValueB] = useState();
    const [valueAB, setValueAB] = useState();

    const handleChangeA = (event) => {
        setValueA(event.target.valueAsNumber);
    };
    const handleChangeB = (event) => {
        setValueB(event.target.valueAsNumber);
    };
    const handleChangeAB = (event) => {
        setValueAB(event.target.valueAsNumber);
    };
    const values = [
        {key: ['A'], data: valueA},
        {key: ['B'], data: valueB},
        {key: ['A', 'B'], data: valueAB}
    ];

    return(
    <div>
    <form>
        <TextField 
            className="textfield"
            id="standard-basic" 
            label="Value of A" 
            variant="standard" 
            type="number"
            margin="normal"
            value={valueA}
            onChange={handleChangeA}
        />
        <br />
        <TextField 
            id="standard-basic" 
            label="Value of B" 
            variant="standard"
            type="number"
            value={valueB}
            margin="normal"
            onChange={handleChangeB}
        />
        <br />
        <TextField 
            id="standard-basic" 
            label="Value of A U B" 
            variant="standard" 
            type="number"
            margin="normal"
            value={valueAB}
            onChange={handleChangeAB}
        />
    </form>
    <VennDiagram
        type='euler'
        height={500}
        width={400}
        data={values}
        series={
            <VennSeries
                colorScheme='#035170'
                arc={
                    <VennArc
                        stroke='#035170'
                    />
                }
            />
        }
    />
    </div>
    );
}

export default Venn;