import ButtonDownloadCV from '../../atoms/ButtonDownloadCV'

import curriculum from '../../../assets/pdf/curriculum.pdf'
const AnchorCV = () => {
    return (
        <a
            href={curriculum}
            download="curriculum.pdf"
            target="_blank"
            rel="noopener noreferrer"
        >
            <ButtonDownloadCV />
        </a>
    )
}

export default AnchorCV
