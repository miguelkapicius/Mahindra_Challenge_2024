import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useState, useEffect } from "react";

export function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('/data.json')
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
    if (!data) {
      return <div>Loading...</div>;
    }
    return (
        <div className="lg:flex lg:max-w-7xl lg:mx-auto min-h-screen lg:py-6 ">
            <Navbar />
            <main className="mb-16 lg:mb-0  flex-1">
                <Outlet context={data} />
            </main>
        </div>
    );
}
