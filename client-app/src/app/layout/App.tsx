import React, { useEffect, Fragment, useContext} from 'react';
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import ActivityStore from '../stored/activityStore';
import {observer} from 'mobx-react-lite';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import NavBar from '../../features/Nav/NavBar';
import LoadingComponent from './LoadingComponent';



const App = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadingActivities();   
  },[activityStore]);

  if(activityStore.loadingInitial) return <LoadingComponent content='Loading activities...' />
 
    return (
      <Fragment>
        <NavBar  />
        <Container style={{marginTop:'7em'}}>
          
        <ActivityDashboard />
        </Container>
        

      </Fragment>
    ); 
}

export default observer(App);
