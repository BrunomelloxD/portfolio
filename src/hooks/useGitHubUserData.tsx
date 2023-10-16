import { useContext } from 'react'
import { GitHubUserDataContext } from '../providers/GitHubUserData'

export const useGitHubUserData = () => useContext(GitHubUserDataContext)
