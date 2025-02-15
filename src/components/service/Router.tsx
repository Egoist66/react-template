import { FC } from "react";

import routes from "../../routes/routes";
import { Route, Routes } from "react-router";

export const Router: FC = () => {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route index={route.path === '/' ? true : false} key={index} path={route.path} element={route.component} />
            ))}
        </Routes>
    )
}