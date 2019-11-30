import React from "react";
import { Segment, Button } from "semantic-ui-react";

function Footer() {
    return (
        <Segment inverted>
                <Button as ='a' circular color='google plus' icon="mail" href="mailto:fred.h.nguyen@gmail.com"></Button>
                <Button as ='a' circular color='linkedin' icon='linkedin' href="https://www.linkedin.com/in/fred-nguyen-811218122/" target='_blank'></Button>
                <Button as ='a' circular color='github' icon='github' href="https://github.com/fred-h-nguyen" target="_blank"></Button>
                <Button as ='a' circular color='green' icon= 'phone' href="tel:469-733-4488"></Button>
        </Segment>
    )
}
export default Footer;