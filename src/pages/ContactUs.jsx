import React from 'react'

function ContactUs() {
    return (
        <>
            <h1>ContactUs</h1>
            <p>
                If you have any questions or need further information, please don't hesitate to contact us.
                <br />
                You can reach us by submitting a ticket here:
            </p>
            <form action="POST" method="post">
                <label htmlFor="name">Name:</label>
                <input type="text" />
                <label htmlFor="email">Email</label>
                <input type="email" name="mail" id="contact-mail" />
            </form>
        </>

    )
}

export default ContactUs