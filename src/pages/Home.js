import React from "react";
import BorderContainer from "../components/BorderContainer";
import Image from "react-bootstrap/Image";

function Home() {
    return(
        <BorderContainer>
            <Image src="SecondCup.jpg" className="homeImage" thumbnail/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi nullam vehicula ipsum a arcu cursus vitae.
        </BorderContainer>
    )
}

export default Home;