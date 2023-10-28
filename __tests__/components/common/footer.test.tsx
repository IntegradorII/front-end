import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Footer } from '@/components/common/Footer'

describe('Footer', () => {
  test('renders a footer', () => {
    render(<Footer />)

    const footer = screen.getByText(/@CopyRight/i)

    expect(footer).toBeInTheDocument()
  })
})
