import React from 'react';
import { Segment, Image, } from 'semantic-ui-react';

function About() {
    return (
        <Segment inverted clearing textAlign="left">
            <div id="aboutMe">
                <h1>About Me</h1>
                <Image src="/images/profile-picture.jpg" size="small" floated="left" />
                <p>Full Stack Developer looking to build a web application that enhances the user experience. Recently graduated from South Methodist University's Full-Stack coding bootcamp, earning a certificate in a 6 month course learning HTML, CSS, Javascript, Node.js, Express, MongoDB, MySQL, React, and other CSS Libraries and Frameworks. Worked in a group of three to tackle a multi-browser chess and chat application, utilizing our knowledge of both Back-End and Front-End development as well as algorithms to bring forth a user-friendly experience. Able to work collaboratively in a team of like-minded individuals to achieve a product that uses technology focused design to enhance or improve the user-friendly experiences.
.
            </p>
            </div>
        </Segment>
    )
}

export default About;