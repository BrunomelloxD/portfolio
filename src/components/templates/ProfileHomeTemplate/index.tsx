import DownloadCV from '../../organisms/DownloadCV'
import ProfilePictureBackground from '../../organisms/ProfilePictureBackground'
import ProfilePicturesAndMainInformation from '../../organisms/ProfilePicturesAndMainInformation'

const ProfileHomeTemplate = () => {
    return (
        <div className="bg-white rounded-lg shadow-xl pb-8">
            <ProfilePictureBackground />
            <ProfilePicturesAndMainInformation />
            <DownloadCV />
        </div>
    )
}

export default ProfileHomeTemplate
