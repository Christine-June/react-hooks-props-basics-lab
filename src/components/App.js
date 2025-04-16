import React from "react";
import Home from "./Home";
import About from "./About";

function App() {
    const user = {
        name: "John Doe",
        city: "New York",
        color: "blue",
        bio: "Just a developer who loves React!",
        links: {
            github: "https://github.com/johndoe",
            linkedin: "https://linkedin.com/in/johndoe"
        }
    };

    return (
        <div>
            <Home name={user.name} city={user.city} color={user.color} />
            <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
        </div>
    );
}

export default App;