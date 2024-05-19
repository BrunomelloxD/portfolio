import { works } from '../../../public/data/works'

const WorkList = () => {
    return (
        <div className="relative px-4">
            <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
            {works.map(work => (
                <div
                    key={work.company}
                    className="flex items-center w-full my-6 -ml-1.5"
                >
                    <div className="w-1/12 z-10">
                        <div
                            className={`w-3.5 h-3.5 ${
                                work.actual ? 'bg-green-400' : 'bg-blue-600'
                            } rounded-full`}
                        ></div>
                    </div>
                    <div className="w-11/12">
                        <p className="text-base font-semibold">
                            {work.company}
                        </p>
                        <p className="text-sm">{work.title}</p>
                        <p className="text-xs text-gray-500">{work.time}</p>
                        <p className="text-xs text-gray-500 text-justify">
                            {work.description}
                        </p>
                        {work.technologies &&
                        Array.isArray(work.technologies) &&
                        work.technologies.length > 0 ? (
                            <ul className="mt-2 text-xs text-gray-500 text-justify list-disc">
                                <p className="text-xs font-semibold text-gray-500">
                                    Technologies:
                                </p>
                                {work.technologies.map(
                                    (technology, techIndex) => (
                                        <li className="ml-4" key={techIndex}>
                                            {technology}
                                        </li>
                                    )
                                )}
                            </ul>
                        ) : null}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WorkList
