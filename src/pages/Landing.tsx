import { useQuery } from 'react-query'

import Loading from '../components/templates/LoadingTemplate'
import ProfileAbout from '../components/templates/ProfileAbout'
import ProfileHomeTemplate from '../components/templates/ProfileHomeTemplate'
import ProfilePersonalInformation from '../components/templates/ProfilePersonalInformation'
import ProfileWorks from '../components/templates/ProfileWorks'
import ServerError from '../components/templates/ServerError'

import { useGitHubUserData } from '../hooks/useGitHubUserData'
import { GitHubUserData } from '../types/GitHubUserData'

import api from '../services/api'

const VITE_GITHUB_USER = import.meta.env.VITE_GITHUB_USER
const fetchGitHubData = async () => {
    const response = await api.get<GitHubUserData>(`${VITE_GITHUB_USER}`)
    return response.data
}

const Landing = () => {
    const { setAvatarUrl, setCompany, setLocation, setName } =
        useGitHubUserData()
    const { data, isLoading, isError, isSuccess } = useQuery(
        'githubProfilePicture',
        fetchGitHubData
    )

    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        return <ServerError />
    }

    if (isSuccess) {
        setAvatarUrl(data?.avatar_url)
        setCompany(data?.company)
        setLocation(data?.location)
        setName(data?.name)
    }

    return (
        <main className="px-5">
            <ProfileHomeTemplate />
            <ProfilePersonalInformation />
            <ProfileAbout />
            <ProfileWorks />
        </main>
    )
}

export default Landing
