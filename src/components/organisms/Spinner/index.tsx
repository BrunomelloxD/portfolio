import SpinnerGif from '../../../assets/gifs/spinner.gif'

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <img className="h-16 w-16" src={SpinnerGif} alt="" />
        </div>
    )
}

export default Spinner
