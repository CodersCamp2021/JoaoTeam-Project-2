import "./LargeButton.scss"

const LargeButton = ({icon, text, href}) => {
    return (
        <a className="LargeButton__link" href={href} target="blank">
            <span>{text}&ensp;</span>
            <img src={icon} alt="GitHub logo" />
        </a>
    )
}

export default LargeButton
