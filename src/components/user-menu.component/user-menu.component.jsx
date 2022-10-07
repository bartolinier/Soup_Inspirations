import React from 'react'
import { Link } from "react-router-dom";


export default function UserMenu({email, logoutAction}) {

  return (
    <>
        <div >
            <div>
                <p>Logged as: {email}</p>
            </div>
            <ul>
                <li>
                <div>
<a href='/'>Your recipes</a>
                </div>
                </li>
                <li>
                <div>
                <a href='/'>Favourites <img src="" alt="heart"  /></a>

                </div>
                </li>
                <li>
                <div>
                <Link to='/add-recipe'>Add recipe</Link>
                </div>
                </li>

                <li>
                <div>
                <a onClick={logoutAction} >Log out</a>
                </div>
                </li>

            </ul>
        </div>
    </>
  )
}
