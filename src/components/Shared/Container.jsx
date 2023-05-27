

const Container = ({ children }) => {
    return (
        <div className="max-w-[2520] mx-auto xl:px-20 lg:px-16 md:px-10 sm:px-2 px-4">
            {children}
        </div>
    );
};

export default Container;