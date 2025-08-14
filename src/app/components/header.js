/**
 * The Header component displays the title of the application and the current date.
 * It receives each of the texts through props.
 * @param {*} props title and date 
 * @returns the header component
 */
function Header(props) {
    return (
        <div className="Header">
            <h1 className="mb-4 text-4xl text-center font-extrabold text-white md:text-5xl lg:text-6xl">{props.text}</h1>
            <h3 className="mb-4 text-3xl text-center font-bold text-white">{props.date}</h3>
        </div>
    );
}
export default Header;