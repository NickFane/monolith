import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../store/store'

// Define a type for the slice state
interface JourneyState {
  firstName: string
  lastName: string
}

// Define the initial state using that type
const initialState: JourneyState = {
  firstName: '',
  lastName: '',
}

export const journeySlice = createSlice({
  name: 'journey',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload
    }
  },
})

export const { setFirstName, setLastName } = journeySlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getFullName = (state: RootState) => {
  const { firstName, lastName } = state.journey
  if(!firstName && !lastName) return ''
  return `${firstName} ${lastName}`
}

export default journeySlice.reducer