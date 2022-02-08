import { render, screen } from '@testing-library/react'
import React from 'react'
import TestComponent from "./TestComponent"

test('shows text "Hello World"', () => {
    render(<TestComponent />)

    const headerElement = screen.getByText(/Hello World/i)
    expect(headerElement).toBeInTheDocument()
})
