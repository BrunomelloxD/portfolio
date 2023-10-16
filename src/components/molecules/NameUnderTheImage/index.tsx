import CheckIcon from '../../atoms/CheckIcon'

import { useGitHubUserData } from '../../../hooks/useGitHubUserData'

const NameUnderTheImage = () => {
    const { name } = useGitHubUserData()
    return (
        <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl">{name}</p>
            <CheckIcon />
        </div>
    )
}

export default NameUnderTheImage
