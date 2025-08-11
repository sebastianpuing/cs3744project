

function Input(props) {
    return (
        <div className="flex items-center justify-center w-full max-w-md">
            <input
                className="w-full p-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                min="1"
                max="128"
                value={props.amount}
                placeholder={props.placeholder} 
                onChange={props.onChangeAmount}>
            </input>
            <button 
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={props.onClick}>
                Submit
            </button>
        </div> 
    );
}

export default Input;