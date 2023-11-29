import "./Wholesale.css"
// import axiosInstance from "../../utilities/axiosInstance";

const Wholesale = () => {

    const handleWholesale = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const phone = e.target.phone.value
        const email = e.target.email.value
        const company = e.target.company.value
        const note = e.target.note.value
        
        const data = {name, phone, email, company, note}


        e.target.reset()

    }
    return (
        <section>
            <div className="wholesale-contact">
                <h1>Buy bulk products </h1>
                <h1><span>at</span> <span className="decorated">WHOLESALE</span> <span>price</span></h1>

                <p>Provide us with product detail and contact info. We will return to you with special price</p>
            </div>

            <div className="contact-div">
                <form onSubmit={handleWholesale} id="wholeSale-form">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name" required />

                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="text" placeholder="Your Phone number" required />

                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="Your email" required />

                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" type="text" placeholder="Your Company name" required />

                    <label htmlFor="note">Notes</label>
                    <textarea id="note" name="note" type="text" placeholder="Tell us about your order" required />

                    <button type="submit">submit</button>
                </form>
            </div>
        </section>
    );
};

export default Wholesale;