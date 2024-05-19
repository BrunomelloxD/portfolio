import { getAge } from '../../../utils/getAge'

const ProfileAboutDescription = () => {
    const age = getAge()
    return (
        <p className="mt-2 text-gray-700 text-justify">
            Hello! My name is Bruno Mello, and I am a backend development student. I am {age} years old and hold a degree in Systems Analysis and Development from the São Paulo State Technological College (FATEC Mococa). I have a passion for technology, teamwork, and a strong desire for continuous learning. Currently, I work as a software developer with experience in Nest.js, Next.js, React.js, React Native, TypeScript, styled-components, Tailwind CSS, Node.js, PHP, Express.js, Git, GitHub, SQL, Docker, Scrum, and Kanban methodology. I always strive to expand my knowledge in these areas and explore new technologies. If you want to know more about my experience and skills, I have provided my resume for download. Feel free to download it and review it in more detail. Thank you for visiting my portfolio, and I hope to see you again soon!
        </p>
    )
}

export default ProfileAboutDescription
