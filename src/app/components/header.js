

function Header(props) {
    return (
        <div className="Header">
            <h1 className="mb-4 text-4xl items-center justify-center font-extrabold text-white md:text-5xl lg:text-6xl">{props.text}</h1>
        </div>
    );
}

export default Header;