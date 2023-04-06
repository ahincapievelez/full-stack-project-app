import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react'
import { userInfo } from './services/userService';

import Login from './pages/users/Login';
import Register from './pages/users/Register';
import Dashboard from './pages/dashboard/Dashboard'
import IndexLead from './pages/leads/IndexLead'
import ShowLead from './pages/leads/ShowLead'
import IndexContact from './pages/contacts/IndexContact'
import ShowContact from './pages/contacts/ShowContact'
import NewContact from './pages/contacts/NewContact'
import EditContact from './pages/contacts/EditContact'
import IndexProject from './pages/projects/IndexProject'
import NewProject from './pages/projects/NewProject'
import ShowProject from './pages/projects/ShowProject'

function App() {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    let token = localStorage.getItem('token')

    if (token) {
      getLoggedInUser()
    } else {
      setIsLoading(false)
    }

    async function getLoggedInUser(){
      const user = await userInfo()
      console.log('LoggedIn User: ' + user.username)
      setUser(user)
      setIsLoading(false)
    }
  }, [])

  let userLoggedIn = user.username
  console.log(userLoggedIn)

  return (
    <div className="App">

      <Routes>
        <Route path="/register" element={<Register setUser={setUser}/>} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        {userLoggedIn ?
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leads" element={<IndexLead />} />
            <Route path="/leads/:id" element={<ShowLead />} />
            <Route path="/contacts" element={<IndexContact />} />
            <Route path="/contacts/:id" element={<ShowContact />} />
            <Route path="/contacts/new" element={<NewContact />} />
            <Route path="/contacts/:id/edit" element={<EditContact />} />
            <Route path="/projects" element={<IndexProject />} />
            <Route path="/projects/c/:cid/new" element={<NewProject />} />
            <Route path="/projects/:id" element={<ShowProject />} />
            {!isLoading && <Route path="*" element={<Navigate to="/dashboard" />} />}
          </>
          :
          <>
            <Route path="/register" element={<Register setUser={setUser}/>} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            {!isLoading && <Route path="*" element={<Navigate to="/login" />} />}
          </>
        }
      </Routes>

    </div>
  
  );
}

export default App;
