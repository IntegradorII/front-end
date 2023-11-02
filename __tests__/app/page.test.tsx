import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Welcome from '@/app/page'

describe('Welcome', () => {
  it('Welcome', () => {
    render(<Welcome />)
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })
})
