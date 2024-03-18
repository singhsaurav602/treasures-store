import logo from "./logo.svg";
import "./categories.styles.scss";
import CategoryItem from "./components/category-item/CategoryItem";
import { Categories } from "./components/utils/directory/Categories";

function App() {
  return (
    <div className="categories-container">
      {Categories.map(({ id, title, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
}

export default App;
