import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../api"
import { axiosErrHandle, axiosResHandle } from "../../api/axiosHandle"

export const userLoginService = async ( body :any) => {
return body;
    // return server.post(`http://localhost:5000/products/addproduct`, body);

};
const loginUserAction = createAsyncThunk("delete/videolibrary/video", async (body:any, thunkAPI) => {
    try {
  
        const res = await userLoginService(body);
        return axiosResHandle(res);
        // return axiosResHandle(res.data.data);
    } catch (err) {
        return thunkAPI.rejectWithValue(axiosErrHandle(err));
    }
});

export default loginUserAction;

