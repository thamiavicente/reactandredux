import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../app/store'

export interface increaseState {
    counter: number
}

const initialState = {
    counter: 0
}

export const increaseSlice = createSlice({
    name: 'increase',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<number>) => {
            state.counter += action.payload
        }
    }
})

export const { add } = increaseSlice.actions

export const selectCount = (state: RootState) => state.increase.counter

export default increaseSlice.reducer