import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Messages = () => {
  return (
    <div className='messages'>
      <h1 style={{textAlign: 'center'}}>Level 2</h1>
    </div>
  );
};

export const MessagesOne = () => {
  return (
    <div className='messages'>
      <h1 style={{textAlign: 'center'}}>Level 2.1</h1>
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
          defaultValue="Level 2.1"
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

export const MessagesTwo = () => {
  return (
    <div className='messages'>
      <h1 style={{textAlign: 'center'}}>Level 2.2</h1>
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
          defaultValue="Level 2.2"
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

export const MessagesThree = () => {
  return (
    <div className='messages'>
    <h1 style={{textAlign: 'center'}}>Level 2.3</h1>
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
        defaultValue="Level 2.3"
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
