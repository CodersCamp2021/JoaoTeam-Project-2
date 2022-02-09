import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import React from 'react'
import User from "./User"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import 'regenerator-runtime/runtime'

const server = setupServer(
    rest.get("https://api.github.com/users/octocat",
    (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                login: "octocat",
                avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
                html_url: "https://github.com/octocat",
                name: "The Octocat",
                company: "@github",
                blog: "https://github.blog",
                location: "San Francisco",
                email: null,
                bio: null,
            })
        )
    }
))

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('full profile page detail', async () => {
    
    render(
        <MemoryRouter initialEntries={['/user/octocat']}>
            <Routes>
                <Route path="/user/:login" element={<User />}/>
            </Routes>
        </MemoryRouter>
    )

    expect(screen.getByText(/loading in progress/i)).toBeInTheDocument()
    await waitForElementToBeRemoved(() => screen.getByText(/loading in progress/i))
    expect(screen.getByText("octocat")).toBeInTheDocument()

})
