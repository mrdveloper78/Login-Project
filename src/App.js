import './App.css';
import SignUp from './Components/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return(
    <div className='flex items-center justify-center'>
    <SignUp/>
    <ToastContainer/>
    </div>
  )
}

export default App;