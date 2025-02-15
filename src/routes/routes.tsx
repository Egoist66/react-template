import { ReactNode } from "react"

type Routes = {
    path: string,
    component: ReactNode,
    exact?: boolean
}

export default  [
    {path: '/', component: <h1>Home</h1>},
    {path: '/about', component: <h1>About</h1>}
]  as Routes[]