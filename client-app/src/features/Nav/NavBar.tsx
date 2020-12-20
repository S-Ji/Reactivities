import { observer } from 'mobx-react-lite';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu, MenuItem } from 'semantic-ui-react'


const NavBar: React.FC = () => {
    return (
        <Menu fixed='top' inverted>
            <Container>
            <MenuItem header as={NavLink} exact to='/' >
                <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                Reactivities
                 </MenuItem>
        <Menu.Item
          name='Avtivities'
          as={NavLink} to='/activities'
        />
        <Menu.Item>
            <Button as={NavLink} to='/createActivity' positive content='Create Activity' />
        </Menu.Item>
            </Container>
        
      </Menu>
    );
};
export default observer(NavBar);
