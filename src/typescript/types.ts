import { ReactNode } from 'react'
import { TextInputProps } from 'react-native'
import { FormType } from 'src/typescript/enums'

export type ENV = {
  FIREBASE_API_KEY: string
  FIREBASE_PROJECT_ID: string
  FIREBASE_DATABASE: string
  FIREBASE_SENDER_ID: string
  FIREBASE_APP_ID: string
  FIREBASE_MEASUREMENT_ID: string
  GOOGLE_WEB_CLIENT_ID: string
}

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
