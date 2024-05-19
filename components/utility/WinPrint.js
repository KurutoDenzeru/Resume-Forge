import { MdPictureAsPdf } from "react-icons/md";

const WinPrint = () => {

    const print = () => {
        window.print();
    };

    return (
        <button
            aria-label="Download Resume"
            className="exclude-print fixed bottom-5 p-2 right-10 font-bold rounded-xl bg-white text-gray-600 shadow-2xl border-2 border-white"
            onClick={print}
        >
            <MdPictureAsPdf className="w-10 h-10" title="Download Resume" />
        </button>
    );
};

export default WinPrint;