import React from 'react'

export interface GitHubUserData {
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
    avatar_url: string
    setAvatarUrl: React.Dispatch<React.SetStateAction<string>>
    company: string
    setCompany: React.Dispatch<React.SetStateAction<string>>
    location: string
    setLocation: React.Dispatch<React.SetStateAction<string>>
}
