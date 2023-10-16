import NameUnderTheImage from '../../molecules/NameUnderTheImage'

import { useGitHubUserData } from '../../../hooks/useGitHubUserData'
import ProfilePicture from '../../molecules/ProfilePicture'

const ProfilePicturesAndMainInformation = () => {
    const { company, location } = useGitHubUserData()

    return (
        <div className="flex flex-col items-center -mt-20">
            <ProfilePicture />
            <NameUnderTheImage />
            <p className="text-gray-700">Junior Developer at {company}</p>
            <p className="text-sm text-gray-500">{location}</p>
        </div>
    )
}

export default ProfilePicturesAndMainInformation
