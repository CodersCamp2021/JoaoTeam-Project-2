import PropTypes from "prop-types"

import { useEffect, useState } from "react"
import "./User.scss"

import location from "../../assets/location.svg" 
import blog from "../../assets/blog.svg"
import email from "../../assets/email.svg"
import company from "../../assets/company.svg"
import github from "../../assets/github.svg"

import LargeButton from "../UI/LargeButton"

const User = ({login = "octocat"}) => {
    User.propTypes = {
        login: PropTypes.string
    }

    const [user, setUser] = useState(
        {
            login: "Loading...",
            avatar_url: "https://github.com/github.png?size=200",
            html_url: "https://github.com/",
            name: "Loading...",
            company: null,
            blog: "",
            location: "Loading...",
            email: null,
            bio: null,
        }
    )

    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`, {method: 'GET', redirect: 'follow'})
            .then(response => response.json())
            .then(result => setUser(result))
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div className="User">
            <div className="User__img">
                <div><img src={user.avatar_url} /></div>
            </div>
            <div className="User__content">
                <div className="User__info User__info--login User__info--mobile-center">
                    {user.login}
                </div>
                <div className="User__spacing"></div>
                <div className="User__info User__info--mobile-center">
                    {user.name ? user.name : "not specified"}
                </div>
                <div className="User__info User__info--icon User__info--icon-mobile-center">
                    <div><img src={location} alt="location icon"/></div>
                    <div>{user.location ? user.location : "not specified"}</div>
                </div>
                <div className="User__spacing"></div>
                <div className="User__info User__info--mobile-center">
                    {user.bio ? user.bio : "not specified"}
                </div>
                <div className="User__spacing"></div>
                <div className="User__info User__info--icon">
                    <div><img src={blog} alt="blog icon"/></div>
                    <div>{user.blog ? <a href={user.blog} target="_blank">{user.blog}</a> : "not specified"}</div>
                </div>
                <div className="User__info User__info--icon">
                    <div><img src={email} alt="email icon"/></div>
                    <div>{user.email ? user.email : "not specified"}</div>
                </div>
                <div className="User__info User__info--icon">
                    <div><img src={company} alt="company icon"/></div>
                    <div>{user.company ? user.company : "not specified"}</div>
                </div>
            </div>
            <div className="User__button">
                <LargeButton href={user.html_url} icon={github} text="View on Github!" />
            </div>
        </div>
    )
}

export default User