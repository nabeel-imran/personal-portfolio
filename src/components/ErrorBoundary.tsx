'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { FaExclamationTriangle, FaHome, FaRedo } from 'react-icons/fa'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    
    // You can log to an error reporting service here
    // Example: Sentry.captureException(error, { extra: errorInfo })
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 text-white flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full glassmorphism rounded-3xl p-8 md:p-12 text-center border border-white/10 shadow-2xl"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: 3 }}
              className="inline-block mb-6"
            >
              <FaExclamationTriangle className="text-6xl text-yellow-400" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Oops! Something went wrong
            </h1>

            <p className="text-xl text-gray-400 mb-8">
              Don&apos;t worry, it&apos;s not you - it&apos;s us. We&apos;re working on fixing this issue.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-8 p-4 bg-red-900/20 border border-red-500/30 rounded-xl text-left">
                <p className="text-sm font-mono text-red-400 break-all">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={this.handleReset}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold shadow-lg hover:shadow-xl transition flex items-center justify-center gap-3"
              >
                <FaRedo />
                Try Again
              </motion.button>

              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition flex items-center justify-center gap-3"
              >
                <FaHome />
                Go Home
              </motion.a>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              If this problem persists, please contact{' '}
              <a 
                href="mailto:nabeelscode@gmail.com" 
                className="text-primary-400 hover:underline"
              >
                nabeelscode@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
