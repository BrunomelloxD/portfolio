import GitHubIcon from '../../atoms/GitHubIcon'
import LinkedInIcon from '../../atoms/LinkedInIcon'

const ProfileSocialMedia = () => {
    return (
        <li className="flex items-center border-b py-2 space-x-2">
            <span className="font-bold w-24">Social Midia:</span>
            <LinkedInIcon />
            <GitHubIcon />
        </li>
    )
}

export default ProfileSocialMedia
