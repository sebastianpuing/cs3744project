/**
 * The display compoennt displays the current intake as well as the goal
 * as a proportion. Recies goal and current intake through props. 
 * @param {*} props the goal and intake 
 * @returns the display component
 */
function Display(props) {
  return (
    <div 
      className="display mb-4 font-semibold text-white items-center justify-center">
      <p>Total Water Amount for Today: {props.value}/{props.goal} oz</p>
    </div>
  );
}

export default Display;