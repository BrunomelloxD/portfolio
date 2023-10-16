import ProfileBackground from '../../../assets/img/profile-background.jpg'
const ProfilePictureBackground = () => {
    return (
        <div className="w-full h-[250px]">
            <img
                src={ProfileBackground}
                className="w-full h-full object-cover"
                loading="lazy"
                alt="Profile Background"
            />
        </div>
    )
}

export default ProfilePictureBackground
