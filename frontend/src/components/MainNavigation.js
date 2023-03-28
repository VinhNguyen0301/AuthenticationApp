import { NavLink, Form, useRouteLoaderData } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { Button } from "@mui/material";

function MainNavigation() {
  const token = useRouteLoaderData("root");

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Movie
            </NavLink>
          </li>
          {!token && (
            <li>
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Authentication
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="/logout" method="post">
                <button
                  style={{
                    padding: "0",
                    border: "none",
                    background: "none",
                    color: "var(--color-primary-400)",
                  }}
                >
                  LogOut
                </button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
