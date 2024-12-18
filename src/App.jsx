import './App.css'
import Sidebar from './comoonents/SideBar'
import { Box, CssBaseline } from '@mui/material'
import Header from './comoonents/Header'
import Dashboard from './comoonents/Dashboard'

function App() {

  return (
    <Box sx={{ display: 'flex', backgroundColor: 'black' }}>
      {/* <CssBaseline /> */}
      <Header />
      <Sidebar />
      <Dashboard/>
    </Box>
  )
}

export default App
