import React, { FunctionComponent, ReactNode, useState, ReactElement, PropsWithChildren } from "react";
import Container from "../Layout/Container/Container";
import Layout from "../Layout/Layout/Layout";
import LayoutItem from "../Layout/Layout/LayoutItem/LayoutItem";
import {Screen, ScreenProps } from "./Screen/Screen";
import style from "./Screens.module.scss"

interface ScreensProps {
    defaultScreen: string;
    showMenu?: boolean;
    children?: ReactNode;

}

const Screens: FunctionComponent<ScreensProps> = ({defaultScreen, showMenu, children}) => {
    const [targetScreen, setTargetScreen] = useState<string>(defaultScreen)

    function changeScreen(code:string) {
        setTargetScreen(code);
    }

    function renderMenu() {
        if(!showMenu){
            return null;
        }

        return React.Children.map(children, (child:any) => {
            const item = child as ReactElement<PropsWithChildren<ScreenProps>>;
            return(
                    <LayoutItem col={12}>
                        <div 
                            onClick={() => {setTargetScreen(item.props['code'])}} 
                            className={`${style['screens-menu-item']} ${child['props']['code'] === targetScreen ? style['isClicked'] : ''}`}>
                            <i className={child!['props']['icon']}></i><span>{item.props['title']}</span>
                        </div>
                    </LayoutItem>
            )
        })
    }

    function renderTargetScreen(): ReactNode {
        return React.Children.map(children, (child:any) => {
            const item = child as ReactElement<PropsWithChildren<ScreenProps>>;

            if(item!['type'] === Screen){
                if(child['props'].code === targetScreen){
                    return React.cloneElement(item, {changeScreen})
                } 
            }else {
                throw new Error(`The ${item['type']} element not is the correct element, it must be a Screen element.`);
            }
        })
    }

    return(
        <Container breakpoint="sm">
            <Layout verticalAlign="start">
                <LayoutItem col={12} md={2}>
                    <Layout>
                        {renderMenu()}
                    </Layout>
                </LayoutItem>

                <LayoutItem col={12} md={showMenu ? 10 : 12}>
                    {renderTargetScreen()}
                </LayoutItem>
            </Layout>
        </Container>
    )
}

Screens.defaultProps = {
    showMenu:false
}

export default Screens;