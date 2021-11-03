import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/home';

const Routes = () => {
    return(

        <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/login" component={Login} /> */}
        </Switch>

    )
}

export default Routes;