import Container from "../Shared/Container";
import CategoryBox from "./CategoryBox/CategoryBox";
import { categories } from "./categoriesData";

const Categories = () => {
    return (
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {
                    categories.map((item, index) => (
                    <CategoryBox
                    key={index}
                    label={item.label}
                    icon={item.icon}
                    />))
                }
            </div>
        </Container>
    );
};

export default Categories;