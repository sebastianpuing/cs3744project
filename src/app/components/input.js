import { Tooltip } from "react-tooltip";

/**
 * The input component allows the user to input both the amount of 
 * water to add to their intake as well as update their goal. All of the 
 * data and event handlers are passed in as props. Also utilizes tooltips to explain 
 * the purpose of each input and button.
 * @param {*} props the props object containing the amount, goal, and event handlers
 * @returns the input component
 */
function Input(props) {
    return (
        <div className="flex items-center justify-center w-full max-w-md">
            <Tooltip id="my-tooltip"/>
            <input
                className="w-[10vh] p-2 border bg-white border-gray-300 rounded-md"
                type="number"
                min="1"
                max="128"
                value={props.amount}
                onChange={props.onChangeAmount}
                data-tooltip-id="my-tooltip" 
                data-tooltip-place="top-start" 
                data-tooltip-html="Enter the desrired water intake amount in ounces (oz).<br />No more than 128 oz can be added at a time.">
            </input>
            <button 
                className="ml-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={props.onAmountClick}
                data-tooltip-id="my-tooltip" 
                data-tooltip-place="top-start" 
                data-tooltip-html="Add the entered amount to the total water intake for today.">
                Add Intake
            </button>
            <input
                className="w-[10vh] ml-4 p-2 border bg-white border-gray-300 rounded-md"
                type="number"
                min="1"
                max="250"
                value={props.goal}
                onChange={props.onChangeGoal}
                data-tooltip-id="my-tooltip" 
                data-tooltip-place="top-start" 
                data-tooltip-html="Enter the desrired water intake goal in ounces (oz).<br />The max goal is 250 oz.">
            </input>
            <button 
                className="ml-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={props.onGoalClick}
                data-tooltip-id="my-tooltip" 
                data-tooltip-place="top-start" 
                data-tooltip-html="Set the entered goal as new water intake goal for the day.">
                Set Goal
            </button>
        </div> 
    );
}

export default Input;