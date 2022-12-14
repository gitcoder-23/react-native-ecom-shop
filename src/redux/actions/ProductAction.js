import {createAsyncThunk} from '@reduxjs/toolkit';
import rootApi from '../../rootApi';

export const getProduct = createAsyncThunk('product/get', async () => {
  try {
    const response = await rootApi.get('/products');
    // console.log('response->', response);
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
});

// export const getProduct = () => async dispatch => {
//   try {
//     dispatch({
//       type: 'allProductRequest',
//     });
//     const {data} = await axios.get(
//       'https://mern-nest-ecommerce.herokuapp.com/api/v2/products',
//     );
//     dispatch({
//       type: 'allProductSuccess',
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: 'allProductFail',
//       payload: error.response.data.message,
//     });
//   }
// };
