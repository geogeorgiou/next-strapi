import React, { createContext, ReactNode } from 'react'
import { Page500 } from '../Page500'

type Props = {
  children: ReactNode
}

type State = {
  hasError: boolean
  errorMessage: string
}

export const ErrorContext = createContext({
  setError: (error: string) => {},
})

export class ErrorBoundary extends React.Component<Props, State> {
  public override state: State = {
    hasError: false,
    errorMessage: '',
  }

  public setError(error: string) {
    this.setState({
      hasError: true,
      errorMessage: error,
    })
  }

  public static getDerivedStateFromError(_: Error): State {
    //update state so the next render will show the fallback ui
    return { hasError: true, errorMessage: _.message }
  }

  public override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  override render() {
    return (
      <ErrorContext.Provider
        value={{
          setError: this.setError.bind(this),
        }}
      >
        {this.state.hasError && (
          <Page500 errorMessage={this.state.errorMessage} />
        )}

        {!this.state.hasError && this.props.children}
      </ErrorContext.Provider>
    )
  }
}

export default ErrorBoundary
