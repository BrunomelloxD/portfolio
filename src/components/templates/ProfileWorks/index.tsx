import { works } from '../../../config/works'
import WorkList from '../../organisms/WorkList'

const ProfileWorks = () => {
    console.log(works)
    return (
        <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
            <h4 className="text-xl text-gray-900 font-bold">Experience</h4>
            <WorkList />
        </div>
    )
}

export default ProfileWorks
