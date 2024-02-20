import PropTypes from "prop-types";

const WeatherDisplay = ({ data }) => {
    return (
        <div>
            {data.map((cityData, index) => (
                <div
                    key={index}
                    className="max-w-md p-8 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100 mb-8"
                >
                    <div className="flex justify-between space-x-8 text-blue-500">
                        <div className="flex flex-col items-center">
                            <img
                                src={`http://${cityData.current.condition.icon}`}
                                alt="loading"
                            />
                            <h1 className="text-xl font-semibold">
                                {cityData.location.name}, {cityData.location.country}
                            </h1>
                        </div>
                        <span className="font-bold text-8xl">
                            {cityData.current.temp_c}°c
                        </span>
                    </div>
                    <div className="flex justify-between mt-8 space-x-4 dark:text-gray-400 text-white">
                        <div className="flex flex-col items-center space-y-1">
                            <span className="uppercase">Wind</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 fill-current"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <span>{cityData.forecast.forecastday[0].day.maxwind_kph} kmh</span>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                            <span className="uppercase">Sunrise</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 fill-current"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                {" "}<path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"></path>
                            </svg>
                            <span>
                                {cityData.forecast.forecastday[0].astro.sunrise.replace(
                                    "AM" || "PM",
                                    ""
                                )}
                            </span>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                            <span className="uppercase">SunSet</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 fill-current"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                {" "}
                                <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />{" "}
                            </svg>
                            <span>
                                {cityData.forecast.forecastday[0].astro.sunset.replace(
                                    "PM" || "AM",
                                    ""
                                )}
                            </span>
                        </div>
                        <div className="flex flex-col items-center space-y-1">
                            <span className="uppercase">Max Temp</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 fill-current"
                                fill="currentColor"
                                viewBox="0 0 576 512"
                            >
                                <path d="M128 112c0-26.5 21.5-48 48-48s48 21.5 48 48V276.5c0 17.3 7.1 31.9 15.3 42.5C249.8 332.6 256 349.5 256 368c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9c8.2-10.6 15.3-25.2 15.3-42.5V112zM176 0C114.1 0 64 50.1 64 112V276.4c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C43.2 304.2 32 334.8 32 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6V112C288 50.1 237.9 0 176 0zm0 416c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V112c0-8.8-7.2-16-16-16s-16 7.2-16 16V322.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48zM480 160h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V160z"></path>
                            </svg>
                            <span>{cityData.forecast.forecastday[0].day.maxtemp_c}°c</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

WeatherDisplay.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        current: PropTypes.shape({
            condition: PropTypes.shape({
                icon: PropTypes.string.isRequired
            }).isRequired,
            temp_c: PropTypes.number.isRequired
        }).isRequired,
        location: PropTypes.shape({
            name: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired
        }).isRequired,
        forecast: PropTypes.shape({
            forecastday: PropTypes.arrayOf(PropTypes.shape({
                day: PropTypes.shape({
                    maxwind_kph: PropTypes.number.isRequired,
                    maxtemp_c: PropTypes.number.isRequired
                }).isRequired,
                astro: PropTypes.shape({
                    sunrise: PropTypes.string.isRequired,
                    sunset: PropTypes.string.isRequired
                }).isRequired
            })).isRequired
        }).isRequired
    })).isRequired
};

export default WeatherDisplay;
