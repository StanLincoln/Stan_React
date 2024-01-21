
import './App.css';
import { AboutMe } from './components/AboutMe/AboutMe';
import ChangeColor from './components/ChangeColor/ChangeColor';
import Post, { Post2 } from './components/Post/Post';
import PostList from './components/PostList/PostList';
import Quiz from './components/Quiz/Quiz';
import Quotes from './components/Quotes/Quotes';
import Todo from './components/Todo/Todo';
import TodoList from './components/TodoList/TodoList';

export const App = () => {
  const firstPost = {
    title: 'First Post',
    description: 'lorem lorem',
    marked: true,
  }

  const task = {
    taskTitle: 'Task Title',
    taskDescription: 'Task Description',
    doneFlg: true,
  }

  return (
    <>
      {/* <div className="App">Hello world!</div>
      <h1>My name is Stan</h1>
     <AboutMe />
     <Post title={firstPost.title} description={firstPost.description} marked={firstPost.marked} />
     <Post {...firstPost} />
     <Post title='Second Post' description='Description' />
     <Post title='Third Post' description='I am here' />
     <Post2 age={4} />
     <Todo {...task}/> */}
{/* 
     <PostList />
     <TodoList />

     <ChangeColor /> */}

     {/* <Quotes /> */}
     <Quiz />
    </>
  )
}



