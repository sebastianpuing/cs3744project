

function Display(props) {
  return (
    <div 
      className="display mb-4 font-semibold text-white items-center justify-center">
      <p>Total Water Amount for Today: {props.value} oz</p>
    </div>
  );
}

export default Display;