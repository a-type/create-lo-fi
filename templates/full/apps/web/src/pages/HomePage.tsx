import { Link } from 'react-router-dom';
import { TodoList } from '@/components/todos/TodoList.jsx';

export interface HomePageProps {}

export function HomePage({}: HomePageProps) {
  return (
    <div>
      <h1>Hello lo-fi!</h1>
      <Link to="/join">Login or sign up</Link>
      <Link to="/settings">Settings</Link>
      <TodoList />
    </div>
  );
}

export default HomePage;
