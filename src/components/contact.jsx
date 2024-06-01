/* comp229-s24-401-portfolio Amy von Deschwanden 301119901 2024-06-01*/
export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Perform any necessary actions (e.g., send form data to server)

        // Redirect to the home page
        window.location.href = '/'; // Redirect to the home page
    };
    return (
        <>
            <div className="contact-css">
                <h2>Let's Connect</h2>
                <a href="mailto:amy_vond@yahoo.ca">amy_vond@yahoo.ca</a><br/>
                <a href="https://www.linkedin.com/in/amyvond/" target="_blank">Linkedin</a><br/>
                <a href="https://github.com/av68410" target="_blank">GitHub</a><br/><br/>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>Name: </label>
                    <input type ="text" id="name" name="name"  /><br/>
                    <label>Phone: </label>
                    <input type ="tel" id="phone" name="phone"  /><br/>                    
                    <label>Email: </label>
                    <input type ="email" id="email" name="email"  /><br/>
                    <label>Message: </label>
                    <input type="text" id="message" name="message" /><br/>
                    <input type="submit" onSubmit="/"></input>                         
                </form>                
            </div>            
        </>
    )
}