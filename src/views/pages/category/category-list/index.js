// material-ui
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { HighlightOffOutlined } from '@mui/icons-material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { category } from 'mock/category-mock';

// ==============================|| SAMPLE PAGE ||============================== //

const CategoryListPage = () => (
  <MainCard title="Sample Card">
    <Typography variant="body2">
      <>
        <Typography variant="h6" textAlign={'center'} mb={2}>
          List of Categories
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, bgcolor: '#00000021' }}>
            <TableHead>
              <TableRow>
                <TableCell>Number</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {category?.map((category, index) =>
                !category ? null : (
                  <TableRow
                    key={category.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="right">{category.name}</TableCell>

                    <TableCell align="right">{category.description}</TableCell>
                    <TableCell align="right">
                      <HighlightOffOutlined
                        color="error"
                        sx={{ cursor: 'pointer' }}
                        //   onClick={() => {
                        //     deleteCategory({
                        //       variables: {
                        //         deleteCategoryId: category.id as string,
                        //       },
                        //       update: cache => {
                        //         cache.evict({ id: 'Category:' + category.id });
                        //       },
                        //     });
                        //   }}
                      />
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    </Typography>
  </MainCard>
);

export default CategoryListPage;
