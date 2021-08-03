import { ReactNode } from 'react'
import { TextInputProps } from 'react-native'
import { FormType } from 'src/typescript/enums'

export type RootStackParamList = {
  Root: undefined
  NotFound: undefined
}

export type AuthStackParamList = {
  Login: undefined
  Email: {
    type: FormType
  }
}

export type InputValidation = {
  required?: boolean
  email?: boolean
  min?: number
  max?: number
  minLength?: number
  maxLength?: number
  matches?: {
    name: string
    value?: string | boolean
    label?: string
  }
  after?: ReactNode
}

export type Input = {
  label: string
  validation: InputValidation
  error?: string
  touched?: boolean
  inputProps: TextInputProps
}

export type InputCollection = { [name: string]: Input }

export type FormState = {
  inputs: InputCollection
  type?: FormType
  formIsValid: boolean
}
