// material-ui
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material';
import { Form, Formik } from 'formik';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { InputField } from 'ui-component/input/InputField';

// ==============================|| SAMPLE PAGE ||============================== //

const UserCreatePage = () => {
  return (
    <MainCard title="Create User">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        }}
        onSubmit={async values => {
          // const { errors } = await createUser({
          //   variables: { input: values },
          //   update: cache => {
          //     cache.evict({ fieldName: 'User' });
          //   },
          // });
          values.firstName = '';
          values.lastName = '';
          values.email = '';
          values.phone = '';
          // if (!errors) {
          //   console.log('success');
          // } else {
          //   console.log(errors);
          // }
        }}
      >
        {({ isSubmitting, handleChange, values }) => (
          <Box sx={{ margin: 'auto' }} style={{ width: 'max-content' }}>
            <Form>
              <InputField
                label="First Name"
                name="firstName"
                placeholder="First Name"
                value={values.firstName}
                onChange={handleChange}
              />

              <InputField
                label="Last Name"
                name="lastName"
                placeholder="Last Name"
                value={values.lastName}
                onChange={handleChange}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="Image"
                value={values.email}
                onChange={handleChange}
              />

              <InputField
                label="Phone Number"
                name="phone"
                placeholder="Phone Number"
                value={values.phone}
                onChange={handleChange}
              />

              <Box textAlign={'center'} mt={2}>
                <LoadingButton
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                >
                  create User
                </LoadingButton>
              </Box>
            </Form>
          </Box>
        )}
      </Formik>
    </MainCard>
  );
};

export default UserCreatePage;
