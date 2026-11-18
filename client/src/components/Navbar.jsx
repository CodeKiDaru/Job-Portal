import { LuBriefcaseBusiness } from "react-icons/lu";
import { Show, SignInButton, UserButton, useSignIn, useUser } from '@clerk/react'

const Navbar = () => {

  const data = useUser();
  console.log(data)

  return (
    <>

      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <LuBriefcaseBusiness />
            Naukar
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Link</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>

            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="btn btn-active btn-neutral">Login</button>
              </SignInButton>
            </Show>

            <Show when="signed-in">
              <UserButton />
            </Show>
          </ul>
        </div>
        <SignInButton/>
      </div>
    </>
  )
}

export default Navbar