import PropTypes from "prop-types";
import { useState } from "react";

const Form = ({ onSubmit }) => {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(city);
        setCity("");
    };

    return (
        <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
            <form onSubmit={handleSubmit}>
                <div className="md:flex">
                    <div className="w-full p-3">
                        <div className="relative">
                            <i className="absolute fa fa-search text-black top-5 left-4"></i>
                            <input
                                type="text"
                                className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                                placeholder="Enter The City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Form;
