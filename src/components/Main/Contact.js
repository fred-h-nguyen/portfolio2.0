import React from 'react';

function Contact() {
    return (
        <div id="contact">
            <form>
                <div id="nameInput">
                    <label for="name">Name</label>
                    <br />
                    <input type="text" id="name" name="name" placeholder="Name Here"></input>
                </div>
                <div id="emailInput">
                    <label for="email">Email</label>
                    <br />
                    <input type="email" id="email" name="email" placeholder="example@gmail.com"></input>
                </div>
                <div id="messageinput">
                    <label for="message">Message</label>
                    <br />
                    <textarea type="text" id="message" name="message"></textarea>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact;