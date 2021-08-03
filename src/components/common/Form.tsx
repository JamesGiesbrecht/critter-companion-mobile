import React, { FC, Fragment, ReactNode, useEffect, useReducer } from 'react'
import { Keyboard } from 'react-native'
import { Input as InputElement, Button, ButtonProps } from 'react-native-elements'

import { FormActionType, FormType } from 'src/typescript/enums'
import { Input, InputCollection, FormState } from 'src/typescript/types'

interface Props {
  children?: ReactNode
  inputs: InputCollection
  submitButtonProps: ButtonProps
  type?: FormType
  onSubmit: (state: FormState) => void
}
interface FormAction {
  type: FormActionType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: { [x: string]: any }
}

const validateInput = (input: Input, value?: string) => {
  const { label, validation } = input
  if (value === null || value === undefined) {
    // eslint-disable-next-line no-param-reassign
    value = input.inputProps.value || ''
  }
  const { required, email, min, max, minLength, maxLength, matches } = validation
  let error = ''

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (required && (!value || value.trim().length === 0)) {
    error = `${label} is required`
  } else if (email && !emailRegex.test(value.toLowerCase())) {
    error = 'Enter a valid email'
  } else if (min != null && +value < min) {
    error = `${label} must be at least ${min}`
  } else if (max != null && +value > max) {
    error = `${label} must be less than ${max}`
  } else if (minLength != null && value.length < minLength) {
    error = `${label} must be at least ${minLength} characters`
  } else if (maxLength != null && value.length > maxLength) {
    error = `${label} cannot be more than ${maxLength} characters`
  } else if (matches && matches.label && matches.value !== value) {
    error = `${label} and ${matches.label} must match`
  }
  return error
}

const formReducer = (state: FormState, action: FormAction) => {
  const { inputs } = state
  // eslint-disable-next-line no-param-reassign
  if (!action.payload) action.payload = {}
  switch (action.type) {
    case FormActionType.InputUpdate: {
      const input = inputs[action.payload.inputName]
      const { matches } = input.validation
      if (matches && inputs[matches.name]) {
        input.validation.matches = {
          ...matches,
          value: inputs[matches.name].inputProps.value || '',
          label: inputs[matches.name].label,
        }
      }
      const updatedInputs: InputCollection = {
        ...inputs,
        [action.payload.inputName]: {
          ...input,
          value: action.payload.value,
          error: validateInput(input, action.payload.value),
        },
      }
      const formIsValid = Object.keys(updatedInputs).every(
        (inputName) => updatedInputs[inputName].error === '',
      )
      return {
        ...state,
        inputs: updatedInputs,
        formIsValid,
      }
    }
    case FormActionType.InputBlur: {
      const updatedInputs = {
        ...inputs,
        [action.payload.inputName]: {
          ...inputs[action.payload.inputName],
          touched: true,
        },
      }
      return {
        ...state,
        inputs: updatedInputs,
      }
    }
    case FormActionType.InitializeForm: {
      return {
        ...state,
        inputs: action.payload.inputs,
        type: action.payload.formType,
      }
    }
    case FormActionType.ValidateForm: {
      const updatedInputs: InputCollection = {}
      let firstInvalidInput: string | null = null
      const formValidityState = Object.keys(inputs).map((name) => {
        const input = inputs[name]
        const error = validateInput(input)
        updatedInputs[name] = {
          ...input,
          touched: true,
          error,
        }
        const isValid = error === ''
        if (!isValid && !firstInvalidInput) {
          firstInvalidInput = name
        }
        return isValid
      })
      const formIsValid = formValidityState.every((isValid) => isValid)
      return {
        ...state,
        inputs: updatedInputs,
        formIsValid,
      }
    }
    default:
      return state
  }
}

const Form: FC<Props> = ({ children, inputs, submitButtonProps, type, onSubmit }) => {
  const initialFormState: FormState = {
    inputs,
    type,
    formIsValid: false,
  }
  const [formState, formDispatch] = useReducer(formReducer, initialFormState)

  useEffect(() => {
    if (type && type !== formState.type) {
      formDispatch({ type: FormActionType.InitializeForm, payload: { inputs, formType: type } })
    }
  }, [type, formState.type, inputs])

  const handleSubmit = () => {
    Keyboard.dismiss()
    formDispatch({ type: FormActionType.ValidateForm })
    if (formState.formIsValid) {
      onSubmit(formState)
    }
  }

  const formElements = Object.keys(formState.inputs).map((name: string) => {
    const input = formState.inputs[name]
    const inputError = input.touched && input.error
    return (
      <Fragment key={name}>
        <InputElement
          placeholder={input.label}
          secureTextEntry={input.autoCompleteType === 'password'}
          errorMessage={inputError}
          value={input.inputProps.value || ''}
          onChange={(e) =>
            formDispatch({
              type: FormActionType.InputUpdate,
              payload: {
                value: e.nativeEvent.text,
                inputName: name,
              },
            })
          }
          onBlur={() =>
            formDispatch({ type: FormActionType.InputBlur, payload: { inputName: name } })
          }
          {...input.inputProps}
        />
        {input.after}
      </Fragment>
    )
  })
  return (
    <>
      {formElements}
      {/* @ts-ignore */}
      <Button {...submitButtonProps} onPress={handleSubmit} />
      {children}
    </>
  )
}

export default Form
