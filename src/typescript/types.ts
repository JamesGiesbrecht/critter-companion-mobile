/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined
  NotFound: undefined
}

export type AuthStackParamList = {
  Login: undefined
  Email: {
    type: 'signIn' | 'signUp'
  }
}
