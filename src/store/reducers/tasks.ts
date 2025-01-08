import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TasksState = {
  items: Task[]
}

const initialState: TasksState = {
  items: [
    {
      id: 1,
      description: 'Python practice exercises',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.DONE,
      title: 'Pyton Task'
    },
    {
      id: 2,
      description: 'React practice exercises',
      priority: enums.Priority.NORMAL,
      status: enums.Status.TO_DO,
      title: 'React Task'
    },
    {
      id: 3,
      description: 'TypeScript practice exercises',
      priority: enums.Priority.URGENT,
      status: enums.Status.TO_DO,
      title: 'TypeScript Task'
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.items = [
        ...state.items.filter((task) => task.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Task>) => {
      const indexTask = state.items.findIndex((t) => t.id === action.payload.id)
      if (indexTask >= 0) {
        state.items[indexTask] = action.payload
      }
    },
    insert: (state, action: PayloadAction<Task>) => {
      const taskAlreadyExists = state.items.find(
        (task) =>
          task.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (taskAlreadyExists) {
        alert('Task already exists')
      } else {
        state.items.push(action.payload)
      }
    }
  }
})

export const { remover, edit, insert } = tasksSlice.actions

export default tasksSlice.reducer
