import BackgroundImage from './components/BackgroundImage';
import Header from './components/Header'
import Input from './components/Input'
import TasksList from './components/Tasks'
import Filters from './components/Filters/Filters'
import Notif from './components/Notification'
import AppContextProvider from './contexts/AppContext';
import AppWrapper from './components/AppWrapper';
import withState from './utilities/withStateComponent';


function App() {


  return (
    <>
      <AppContextProvider>
        <AppWrapper>
          <BackgroundImage />
          <div className="container">
            <Header />
            <Input />
            <TasksList />
            <Filters />
            <Notif />
          </div>
        </AppWrapper>
      </AppContextProvider>

    </>
  )
}

export default App
