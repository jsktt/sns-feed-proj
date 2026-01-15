import './App.css'
import PostCard from './components/PostCard/PostCard'
import PostForm from './components/PostForm/PostForm'
import Feed from './pages/Feed/Feed'

function App() {

  return (
    <div className='app'>
      <header className='header'>
        <div className='container'>
          <h1 className='logo'>📱 SNS Feed </h1>
        </div>
      </header>

      <main className='main'>
        <Feed />
        <PostForm />


      </main>
    </div>
  )
}

export default App
