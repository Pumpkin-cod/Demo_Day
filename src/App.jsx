
import { Route, Routes } from 'react-router-dom'
import EditPost from './users/EditPost'
import AddPost from './users/AddPost'
import PostLists from './users/PostLists'


const App = () => {
  return (
    <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
    <Routes>
        <Route path='/' element={<PostLists />}/>
        <Route path='/add-post' element={<AddPost />} />
        <Route path='/edit-post/:id' element={<EditPost />} />
    </Routes>
     
    </div>
  )
}

export default App
