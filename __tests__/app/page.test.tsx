import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/app/page'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const btnTest = screen.getByRole('button', {
      name: /custom button/i
    })

    expect(btnTest).toBeInTheDocument()
  })
})