import { FC } from "react";

type DefaultLayoutProps = {
    children: React.ReactNode,
    header?: React.ReactNode | (() => React.ReactNode),
    footer?: React.ReactNode | (() => React.ReactNode)
    render?: (props: any) => React.ReactNode
}

export const Default: FC<DefaultLayoutProps> = ({children, header, footer, render}) => {
    return (
        <div id="layout">
        
            <header>
                {typeof header === 'function' ? header() : header}
            </header>

            <main>
                {children ?? render?.({})}
            </main>

            <footer>{ typeof footer === 'function' ? footer() : footer}</footer>
        
        
        </div>
    )
}