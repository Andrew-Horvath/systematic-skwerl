/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import UserAvatarURL from '../images/AvatarAndrew.svg';
import Avatar from './Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquirrel } from '@fortawesome/pro-thin-svg-icons';
import { faShelves } from '@fortawesome/pro-light-svg-icons';
import { faGear } from '@fortawesome/pro-light-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/pro-light-svg-icons';


const LeftNav = () => {
    return (
        <nav className="d-flex flex-column nav-custom">
            
            <Link className="d-flex justify-content-center" to='/'>
                <span className="nav-custom__logo--icon"><FontAwesomeIcon icon={faSquirrel} /></span>
            </Link>
            <Link className="d-flex align-items-center nav-custom--a active" to="/inventory">
                <span className="nav-custom--a--icon"><FontAwesomeIcon icon={faShelves} /></span>
                inventory
            </Link>
            <Link className="d-flex align-items-center nav-custom--a" to="recipes">
                <span className="nav-custom--a--icon"><FontAwesomeIcon icon={faShelves} /></span>
                recipes
            </Link>
            <Link className="d-flex align-items-center nav-custom--a" to="invoices">
                <span className="nav-custom--a--icon"><FontAwesomeIcon icon={faShelves} /></span>
                invoices
            </Link>

            {/* bottom part of navigation */}
            <section className="nav-left-custom-bottom mt-auto">
                <Link className="nav-left-custom-bottom__a d-flex align-items-center" to="settings">
                    <span className="nav-left-custom-bottom__a--icon"><FontAwesomeIcon icon={faGear} /></span>
                    settings
                </Link>
                <Link className="nav-left-custom-bottom__a d-flex align-items-center" to="settings">
                    <Avatar AvatarIcon={UserAvatarURL} AvatarAlt='cartoon drawing of current user' />
                    current user
                </Link>
             
                <Link className="nav-left-custom-bottom__a d-flex align-items-center" to="logout">
                    <span className="nav-left-custom-bottom__a--icon"><FontAwesomeIcon icon={faArrowRightFromBracket} /></span>
                    logout
                </Link>
                        {/* possible way to code settings and current user */}
                        {/* <a className="nav-left-custom-bottom__a" href="/">
                            <span className="nav-left-custom-bottom__a">settings</span>
                            <div><img src="" /><span className="nav-left-custom-bottom__a">current user</span></div>
                        </a> */}
            </section>
            
        </nav>
    )
}
export default LeftNav