//App.js
import CreatePost from './component/CreatePost';
import PostList from './component/PostList';
import './App.css';

function App() {

  return (
    <div className="App">
      <CreatePost/>
      <PostList/>
    </div>
  );
}

export default App;