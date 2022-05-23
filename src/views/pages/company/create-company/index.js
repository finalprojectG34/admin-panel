// material-ui
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material';
import { Form, Formik } from 'formik';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { InputField } from 'ui-component/input/InputField';

// ==============================|| SAMPLE PAGE ||============================== //

const CompanyCreatePage = () => {
  // const [createCompany] = useMutation(CREATE_COMPANY);
  return (
    <MainCard title="Create Company">
      <Formik
        initialValues={{
          name: '',
          image: '',
          description: '',
        }}
        onSubmit={async values => {
          // const { errors } = await createCompany({
          //   variables: { input: values },
          //   update: cache => {
          //     cache.evict({ fieldName: 'Company' });
          //   }
          // });
          values.description = '';
          values.image = '';
          values.name = '';
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
                label="Name"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                dataCy="company-name-input"
              />
              <InputField
                label="Description"
                name="description"
                placeholder="Description"
                value={values.description}
                onChange={handleChange}
                dataCy="company-description-input"
              />
              <InputField
                label="Image"
                name="image"
                placeholder="Image"
                value={values.image}
                onChange={handleChange}
                dataCy="company-image-input"
              />
              <Box textAlign={'center'} mt={2}>
                <LoadingButton
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                  data-cy="create-company-button"
                >
                  Create Company
                </LoadingButton>
              </Box>
            </Form>
          </Box>
        )}
      </Formik>
    </MainCard>
  );
};

export default CompanyCreatePage;
