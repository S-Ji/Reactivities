import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Button, Container, Menu, MenuItem } from 'semantic-ui-react'
import ActivityStore from '../../app/stored/activityStore';

const NavBar: React.FC = () => {
    const activityStore = useContext(ActivityStore);
    return (
        <Menu fixed='top' inverted>
            <Container>
            <MenuItem header>
                <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                Reactivities
                 </MenuItem>
        <Menu.Item
          name='Avtivities'
        />
        <Menu.Item>
            <Button onClick={activityStore.openCreateForm} positive content='Create Activity' />
        </Menu.Item>
            </Container>
        
      </Menu>
    );
};
export default observer(NavBar);
