import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CustomButton } from '@/components/custom-buttom'

describe('CustomButton', () => {
  test('renders a button', () => {
    render(<CustomButton>custom button</CustomButton>)
    const button = screen.getByRole('button', {
      name: /custom button/i
    })
    expect(button).toBeInTheDocument()
  })
})
