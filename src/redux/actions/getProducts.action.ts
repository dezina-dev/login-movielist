import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../api"
import { axiosErrHandle, axiosResHandle } from "../../api/axiosHandle"

export const getProductsService = async(search: any) => {

    return server.get(`http://localhost:5000/products/getproducts?search=${search}`);
};

const getProductsAction = createAsyncThunk("delete/videolibrary/video", async (body:any, thunkAPI) => {
    try {
        alert("login")
  console.log("body", body)
        // const res = await getProductsService(search);
        // return axiosResHandle(res);
        return axiosResHandle(body);
    } catch (err) {
        return thunkAPI.rejectWithValue(axiosErrHandle(err));
    }
});

export default getProductsAction;

