import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export const Reports = () => {
  return (
    <div className='reports'>
      <h1 style={{textAlign: 'center'}}>Level 1</h1>
    </div>
  );
};


export const ReportsOne = () => {
  return (
    <div className='reports'>
      <h1 style={{textAlign: 'center'}}>Level 1.1</h1>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      style={{textAlign : 'center'}}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Level 1.1"
        />
      </div>
      <div>
       <TextField
        placeholder="Description"
        multiline
        rows={2}
        maxRows={4}
       />
      </div>
      
     
    </Box>
    </div>
  );
};


export const ReportsTwo = () => {
  return (
    <div className='reports'>
      <h1 style={{textAlign: 'center'}}>Level 1.2</h1>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      style={{textAlign : 'center'}}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Level 1.2"
        />
      </div>
      <div>
       <TextField
        placeholder="Description"
        multiline
        rows={2}
        maxRows={4}
       />
      </div>
      
     
    </Box>
    </div>
  );
};



export const ReportsThree = () => {
  return (
    <div className='reports'>
      <h1 style={{textAlign: 'center'}}>Level 1.3</h1>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      style={{textAlign : 'center'}}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Level 1.3"
        />
      </div>
      <div>
       <TextField
        placeholder="Description"
        multiline
        rows={2}
        maxRows={4}
       />
      </div>
      
     
    </Box>
    </div>
  );
};
