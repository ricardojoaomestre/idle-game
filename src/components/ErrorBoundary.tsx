import React, { ErrorInfo } from "react";

type ErrorBoundaryState = {
  hasError: boolean;
  errorMessage?: string;
};

interface IErrorBoundaryProps {
  children?: React.ReactNode;
}

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState;

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error.message);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <h1>Something went wrong.</h1>
          <p>{this.state.errorMessage}</p>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
