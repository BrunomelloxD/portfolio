import ProfileAboutDescription from '../../organisms/ProfileAboutDescription'

const ProfileAbout = () => {
    return (
        <div className="flex flex-col w-full 2xl:w-2/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                <h4 className="text-xl text-gray-900 font-bold">About</h4>
                <ProfileAboutDescription />
            </div>
        </div>
    )
}

export default ProfileAbout
