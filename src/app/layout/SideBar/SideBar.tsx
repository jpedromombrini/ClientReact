import { useState } from 'react'
import { Icon, Menu, Sidebar } from 'semantic-ui-react'

import './style.css'

export default function SideBar() {
    const [visible, setVisible] = useState(true);   

    return (
        <div>
            <Sidebar
                as={Menu}
                animation='slide along'
                direction='left'
                icon='labeled'
                inverted
                vertical                 
                visible={visible}
                width='thin'>
                <Menu.Item as='a' onClick={() => setVisible(false)}>
                    <Icon name='home' />
                    Home
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='gamepad' />
                    Games
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='camera' />
                    Channels
                </Menu.Item>
            </Sidebar>

        </div>

    )
}
