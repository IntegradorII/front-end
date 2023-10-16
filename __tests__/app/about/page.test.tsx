import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AboutPage from '@/app/about/page'

describe('AboutPage', () => {
  it('renders a heading', async () => {
    render(await AboutPage())

    const linkTest = screen.getByRole('link', {
      name: /go to home/i
    })

    expect(linkTest).toBeInTheDocument()
  })
})
