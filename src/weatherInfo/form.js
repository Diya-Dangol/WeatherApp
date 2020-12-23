import React from 'react'
import {TextField, Box, Button} from '@material-ui/core';

const Form = (props) => {    
    let {city, handleChange, submit}= props
    return (
        <Box>                
            <TextField 
            style= {{
                border:"1px solid black", 
                textJustify: "center",
                margin: "20px 0px 10px 100px"
            }}
            id="city" 
            value={city} 
            placeholder='Enter City'
            onChange={handleChange} />
            <Button style={{border: "1px solid black",
            color: "#eb6e4b",
            textJustify: "center",
            margin: "20px 0px 10px 100px"
        }} 
        type='submit' onClick= {submit}>Search</Button>
        </Box>
    )    
}

export default Form
