import React, {} from "react";
import {
	BsFillArrowRightSquareFill,
	BsFillArrowLeftSquareFill,
} from "react-icons/bs";

const FormCP = ({ formClose, setFormClose }) => {
	return (
		<button
			aria-label="Form Open/Close"
			className="exclude-print fixed bottom-5 left-10 font-bold rounded-xl bg-white text-gray-600 shadow-2xl border-2 border-white"
			onClick={() => setFormClose(!formClose)}
		>
			{formClose ? (
				<BsFillArrowRightSquareFill className="w-10 h-10" title="Form Open" />
			) : (
				<BsFillArrowLeftSquareFill className="w-10 h-10" title="Form Close" />
			)}
		</button>
	);
};

export default FormCP;
