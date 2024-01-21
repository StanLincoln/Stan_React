import Post from '../Post/Post';
import { posts } from '../../utils/posts';
import { useState } from 'react';
    
function PostList() {
    // postList - обратиться к элементу массива по индексу
  // postList[0] - одна цитата
  // сделать рандомный Math.random() - вынести в отдельную функцию
  // Создаем отдельное состояние для одной цитаты (одного объекта)
  // при нажатии на кнопку ] onClick -> setSingleQuote()
    const [postList, setPostList] = useState(posts)
    return ( 
    <div>
        {posts.map(post => 
        <Post key={post.id} {...post}/>)}
    </div> 
    );
}

export default PostList;
