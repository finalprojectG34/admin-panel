// material-ui
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material';
import { Form, Formik } from 'formik';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { InputField } from 'ui-component/input/InputField';

// ==============================|| SAMPLE PAGE ||============================== //

const CategoryCreatePage = () => (
  <MainCard title="Create Category">
    <Formik
      initialValues={{
        name: '',
        image: '',
        description: '',
      }}
      onSubmit={async values => {
        console.log(values);
        //   const { errors } = await createCategory({
        //     variables: { input: values },
        //     update: (cache: ApolloCache<any>) => {
        //       cache.evict({ fieldName: 'Category' });
        //     },
        //   });
        //   if (!errors) {
        //     router.push('/category/list-category');
        //   }
        //   console.log(errors);
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
            />

            <InputField
              label="Description"
              name="description"
              placeholder="Description"
              value={values.description}
              onChange={handleChange}
            />
            <InputField
              label="Image"
              name="image"
              placeholder="Image"
              value={values.image}
              onChange={handleChange}
            />

            <Box textAlign={'center'} mt={2}>
              <LoadingButton
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                create Category
              </LoadingButton>
            </Box>
          </Form>
        </Box>
      )}
    </Formik>
  </MainCard>
);

export default CategoryCreatePage;
