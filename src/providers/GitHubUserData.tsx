import { createContext, useState } from 'react'

import { GitHubUserData } from '../types/GitHubUserData'

import { Props } from '../types/types'

export const GitHubUserDataContext = createContext<GitHubUserData>({
    name: '',
    setName: () => {
        throw new Error('Name not properly initialized')
    },
    avatar_url: '',
    setAvatarUrl: () => {
        throw new Error('Avatar URL not properly initialized')
    },
    company: '',
    setCompany: () => {
        throw new Error('Bio not properly initialized')
    },
    location: '',
    setLocation: () => {
        throw new Error('Location not properly initialized')
    }
})

export const GitHubUserDataProvider = ({ children }: Props) => {
    const [name, setName] = useState('')
    const [avatar_url, setAvatarUrl] = useState('')
    const [company, setCompany] = useState('')
    const [location, setLocation] = useState('')

    return (
        <GitHubUserDataContext.Provider
            value={{
                name,
                setName,
                avatar_url,
                setAvatarUrl,
                company,
                setCompany,
                location,
                setLocation
            }}
        >
            {children}
        </GitHubUserDataContext.Provider>
    )
}
