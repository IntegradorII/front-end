import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/app/page'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    const btn = screen.getByRole('button', { name: /BtnTest/i })
    expect(btn).toBeInTheDocument()
  })
})
