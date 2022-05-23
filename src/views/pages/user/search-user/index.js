// material-ui
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { useLazyQuery } from '@apollo/client';
import { GET_ONE_USER } from '../../../../apollo/query/user_queries';
import Loader from '../../../../ui-component/Loader';

// ==============================|| SAMPLE PAGE ||============================== //

const UserSearchPage = () => {
  const [getUser, { data, error, loading }] = useLazyQuery(GET_ONE_USER);
  const [value, setValue] = useState('id');
  const [text, setText] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };
  if (error)
    return (
      <Alert variant='outlined' severity='error'>
        {error}
      </Alert>
    );
  if (loading) return <Loader />;
  return (
    <MainCard title='Search User'>
      <Typography variant='body2'>
        <Box>
          <Box mb={4}>
            <FormControl component='fieldset'>
              <FormLabel component='legend'>Search By</FormLabel>
              <RadioGroup
                aria-label='Search By'
                defaultValue='id'
                name='radio-buttons-group'
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel value='id' control={<Radio />} label='Id' />
                <FormControlLabel
                  value='firstName'
                  control={<Radio />}
                  label='First Name'
                />
              </RadioGroup>
            </FormControl>
            <Box sx={{ display: 'flex' }}>
              <TextField
                label={value}
                variant='standard'
                value={text}
                onChange={e => setText(e.target.value)}
                sx={{ mr: 2 }}
              />

              <Button
                variant='outlined'
                onClick={() => {
                  getUser({
                    variables: {
                      getUserByIdId: text
                    }
                  });
                }}
              >
                Search
              </Button>
            </Box>
          </Box>
          {data && (
            <Card sx={{ maxWidth: 275, bgcolor: '#00000021' }}>
              <CardContent>
                {data.getUserById.firstName && (
                  <Typography sx={{ fontSize: 18 }} gutterBottom>
                    First Name: {data.getUserById.firstName}
                  </Typography>
                )}

                {data.getUserById.lastName && (
                  <Typography sx={{ mb: 1.5 }}>
                    Last Name: {data.getUserById.lastName}
                  </Typography>
                )}
                {data.getUserById.email && (
                  <Typography sx={{ mb: 1.5 }}>
                    Email: {data.getUserById.email}
                  </Typography>
                )}
                {data.getUserById.phone && (
                  <Typography sx={{ mb: 1.5 }}>
                    Phone Number: {data.getUserById.phone}
                  </Typography>
                )}
              </CardContent>
            </Card>
          )}
        </Box>
      </Typography>
    </MainCard>
  );
};

export default UserSearchPage;
