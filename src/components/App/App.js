import { hot } from 'react-hot-loader/root'
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loading from 'components/Loading/Loading'
import HomePage from 'pages/HomePage/HomePage'
const SettingsPage = React.lazy(() => import('pages/SettingsPage/SettingsPage'))
import './App.scss'

const App = () => (
    <>
        <div className="App">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/settings" render={() => {
                        return <Suspense fallback={<Loading />}>
                           <SettingsPage /> 
                        </Suspense>
                }} />
            </Switch>
        </div>
    </>
)

export default hot(App)
