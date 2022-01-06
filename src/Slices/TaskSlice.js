import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [
      {id:"1",
          title:"task number 1",description:"task number 1 description ....",deadline:"today",isDone:false},
          {id:"2",
          title:"task number 2",description:"task number 2 description ....",deadline:"today",isDone:false},
        ],
}

export const TaskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = TaskSlice.actions

export default TaskSlice.reducer