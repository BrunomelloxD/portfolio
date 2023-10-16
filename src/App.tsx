import Routes from './routes'

import { GitHubUserDataProvider } from './providers/GitHubUserData'

const App = () => {
    return (
        <GitHubUserDataProvider>
            <Routes />
        </GitHubUserDataProvider>
    )
}

export default App
