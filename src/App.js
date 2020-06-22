import React from "react";
import { css } from "@emotion/core";

function App() {
  return (
    <>
      <nav
        className="container-fluid py-3 position-fixed"
        css={css`
          background-color: whitesmoke;
          border-bottom: 1px solid rgba(106, 9, 125, 0.2);
        `}
      >
        <div className="container p-0">
          <div className="d-flex align-items-center justify-content-between">
            <div
              className="d-flex flex-fill d-sm-none position-relative"
              css={css`
                border: 1px solid var(--second-color);
                border-radius: 50px;
                transition: 0.8s all;
              `}
            >
              <div
                className="m-0 pl-2 py-2 pr-1 d-flex justify-content-center align-items-center"
                css={css`
                  color: var(--second-color);
                  font-size: 20px;
                `}
              >
                <ion-icon name="search-outline"></ion-icon>
              </div>
              <input
                type="text"
                className="w-100 mr-3"
                placeholder="Search image"
                css={css`
                  border: none;
                  border-radius: 0 50px 50px 0;
                  outline: none;
                  background-color: transparent;
                `}
              />
              <ul
                className="list-group position-absolute w-100 d-none"
                css={css`
                  top: 36px;
                  box-shadow: 0px 0.5px 3px 0px var(--first-color);
                `}
              >
                <li
                  className="list-group-item py-2 px-3"
                  css={css`
                    border-color: var(--second-color);
                  `}
                >
                  Cras justo odio
                </li>
                <li
                  className="list-group-item py-2 px-3"
                  css={css`
                    border-color: var(--second-color);
                  `}
                >
                  Dapibus ac facilisis in
                </li>
                <li
                  className="list-group-item py-2 px-3"
                  css={css`
                    border-color: var(--second-color);
                  `}
                >
                  Morbi leo risus
                </li>
                <li
                  className="list-group-item py-2 px-3"
                  css={css`
                    border-color: var(--second-color);
                  `}
                >
                  Porta ac consectetur ac
                </li>
                <li
                  className="list-group-item py-2 px-3"
                  css={css`
                    border-color: var(--second-color);
                  `}
                >
                  Vestibulum at eros
                </li>
              </ul>
            </div>

            <a href="/" className="mx-4">
              <h3
                className="m-0"
                css={css`
                  color: var(--second-color);
                `}
              >
                Vernal
              </h3>
            </a>

            {/* Mobile phones */}
            <a
              href="#"
              className="py-2 px-4 d-block d-block d-sm-none"
              // className="py-2 px-4 d-none"
              css={css`
                border: 1px solid var(--second-color);
                border-radius: 50px;
                color: white;
                background-color: var(--second-color);

                &:hover {
                  background-color: white;
                }
              `}
            >
              Login
            </a>
            <div className="d-none">
              {/* <div className="d-block d-sm-none"> */}
              <input
                type="checkbox"
                className="d-none"
                id="toggle-hamburger"
                css={css`
                  &:checked ~ .hamburger {
                    // transform: rotate(360deg);
                    background: transparent;
                  }

                  &:checked ~ .hamburger::before {
                    transform: rotate(45deg);
                  }

                  &:checked ~ .hamburger::after {
                    transform: rotate(-45deg);
                  }
                `}
              />
              <label
                htmlFor="toggle-hamburger"
                className="mt-3 hamburger"
                css={css`
                  width: 30px;
                  height: 4px;
                  background: var(--second-color);
                  border-radius: 5px;
                  transition: all .2s ease-in-out;
                  position: relative;

                  &::before,
                  &::after {
                    content: '';
                    position: absolute;
                    width: 30px;
                    height 4px;
                    background: var(--second-color);
                    border-radius: 5px;
                    transition: all .2s ease-in-out;
                  }

                  &::before {
                    transform: translateY(-9px);
                  }

                  &::after {
                    transform: translateY(9px);
                  }
              `}
              ></label>
            </div>

            {/* Desktop to tablet */}
            <div className="flex-fill mx-2 mx-lg-4 px-0 px-lg-2 d-none d-sm-flex justify-content-center">
              <div className="w-75">
                <div className="row position-relative">
                  <div className="col px-0">
                    <input
                      type="text"
                      className="w-100 py-2 pl-4"
                      placeholder="Search image"
                      css={css`
                        border-radius: 50px 0 0 50px;
                        border: 1px solid var(--second-color);
                        border-right: none;
                        outline: none;
                        background-color: transparent;
                      `}
                    />
                  </div>
                  <div className="px-0 d-flex justify-content-center align-items-center">
                    <span
                      className="h-100 d-flex align-items-center pr-3"
                      css={css`
                        border-radius: 0 50px 50px 0;
                        border: 1px solid var(--second-color);
                        border-left: none;
                        color: var(--second-color);
                        font-size: 18px;

                        &:hover {
                          color: var(--second-color);
                        }
                      `}
                    >
                      <ion-icon name="search-outline"></ion-icon>
                    </span>
                  </div>
                  <ul
                    className="list-group position-absolute w-100 d-none"
                    css={css`
                      top: 38px;
                      box-shadow: 0px 0.5px 3px 0px var(--first-color);
                    `}
                  >
                    <li
                      className="list-group-item py-2 px-3"
                      css={css`
                        border-color: var(--second-color);
                      `}
                    >
                      Cras justo odio
                    </li>
                    <li
                      className="list-group-item py-2 px-3"
                      css={css`
                        border-color: var(--second-color);
                      `}
                    >
                      Dapibus ac facilisis in
                    </li>
                    <li
                      className="list-group-item py-2 px-3"
                      css={css`
                        border-color: var(--second-color);
                      `}
                    >
                      Morbi leo risus
                    </li>
                    <li
                      className="list-group-item py-2 px-3"
                      css={css`
                        border-color: var(--second-color);
                      `}
                    >
                      Porta ac consectetur ac
                    </li>
                    <li
                      className="list-group-item py-2 px-3"
                      css={css`
                        border-color: var(--second-color);
                      `}
                    >
                      Vestibulum at eros
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-none d-sm-inline-flex">
              {/* <a
                href="#"
                className="mr-2 py-2 px-3"
                css={css`
                  color: var(--second-color);
                  border-radius: 2px;
                  // visibility: hidden;
                  transition: 0.2s all;

                  &:hover {
                    background-color: var(--third-color);
                    color: white;
                  }
                `}
              >
                + New Post
              </a> */}
              <a
                href="#"
                className="ml-2 py-2 px-4"
                css={css`
                  border: 1px solid var(--second-color);
                  border-radius: 50px;
                  color: white;
                  background-color: var(--second-color);

                  &:hover {
                    background-color: transparent;
                    color: var(--second-color);
                  }
                `}
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga cumque
          culpa inventore voluptate laboriosam, quasi qui, animi sed ducimus
          deserunt eligendi non. Consequatur sed quia sunt, tenetur corrupti
          cumque! Officia!
        </p>
      </div>
    </>
  );
}

export default App;
