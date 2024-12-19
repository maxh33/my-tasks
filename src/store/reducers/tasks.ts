import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Estudy Redux',
      enums.Priority.IMPORTANT,
      enums.Status.TO_DO,
      'Practice reducers, actions and store',
      1
    ),
    new Task(
      'Estudy Python',
      enums.Priority.NORMAL,
      enums.Status.DONE,
      'Practice Python lists',
      2
    ),
    new Task(
      'Estudy React',
      enums.Priority.URGENT,
      enums.Status.DONE,
      'Practice React components',
      3
    ),
    new Task(
      'Estudy TypeScript',
      enums.Priority.URGENT,
      enums.Status.TO_DO,
      'Practice TypeScript interfaces',
      4
    ),
    new Task(
      'Estudy JavaScript',
      enums.Priority.NORMAL,
      enums.Status.DONE,
      'Practice JavaScript functions',
      5
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remover } = tasksSlice.actions

export default tasksSlice.reducer
