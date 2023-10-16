import { useGitHubUserData } from '../../../hooks/useGitHubUserData'
import ProfileSocialMedia from '../../molecules/ProfileSocialMedia'

const ProfilePersonalInformationTextAndSocial = () => {
    const { location } = useGitHubUserData()

    return (
        <div className="w-full flex flex-col 2xl:w-1/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                <h4 className="text-xl text-gray-900 font-bold">
                    Personal Info
                </h4>
                <ul className="mt-2 text-gray-700">
                    <li className="flex border-y py-2">
                        <span className="font-bold w-24">Full name:</span>
                        <span className="text-gray-700">
                            Bruno de Oliveira Mello
                        </span>
                    </li>
                    <li className="flex border-b py-2">
                        <span className="font-bold w-24">Birthday:</span>
                        <span className="text-gray-700">11 Oct, 1998</span>
                    </li>
                    <li className="flex border-b py-2">
                        <span className="font-bold w-24">Mobile:</span>
                        <span className="text-gray-700">(19) 9 9711-9007</span>
                    </li>
                    <li className="flex border-b py-2">
                        <span className="font-bold w-24">Email:</span>
                        <span className="text-gray-700">
                            brunomello.ti@gmail.com
                        </span>
                    </li>
                    <li className="flex border-b py-2">
                        <span className="font-bold w-24">Location:</span>
                        <span className="text-gray-700">{location}</span>
                    </li>
                    <li className="flex border-b py-2">
                        <span className="font-bold w-24">Languages:</span>
                        <span className="text-gray-700">
                            Brazilian Portuguese
                        </span>
                    </li>
                    <ProfileSocialMedia />
                </ul>
            </div>
        </div>
    )
}

export default ProfilePersonalInformationTextAndSocial
