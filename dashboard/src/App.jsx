import ListComponent from "./components/ListComponent"
import TransactionList from "./components/TransactionList"
import VideoManagement from "./components/VideoManagement"
import TopReceiversList from "./components/TopReceiversList"
import SideBar from "./components/SideBar"
import {Routes , Route} from 'react-router-dom'


function App() {

  return (
    <main className="w-full flex h-screen bg-bgColor">
      <SideBar/>
      <Routes>
      <Route path="/" element={<ListComponent />} />
      <Route path="/translist" element={<TransactionList />} />
      <Route path="/TopReceiversList" element={<TopReceiversList />} />
      <Route path="/VideoManagement" element={<VideoManagement />} />
      </Routes>
    </main>
  )
}

export default App
