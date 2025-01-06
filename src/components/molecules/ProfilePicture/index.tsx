import { useGitHubUserData } from '../../../hooks/useGitHubUserData'

const ProfilePicture = () => {
    const { avatar_url } = useGitHubUserData()
    return (
        <img
            src={avatar_url}
            className="w-40 border-4 border-white rounded-full object-cover"
            alt="Profile Picture"
        />
    )
}

export default ProfilePicture
