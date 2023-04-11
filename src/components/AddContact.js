import React from 'react';

class AddContact extends React.Component {
    //states
    state = {
        name: "",
        email: ""
    };

    //methods of class inside class context event onSubmit
    add = (event) => {
        event.preventDefault();// to prevent refreshing of page

        if (this.state.name === "" || this.state.email === "") {
            alert("Fields cannot be empty");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState(
            {
                name: "",
                email: ""
            }
        )
        console.log(this.state);
    }
    //  nameSetState =(event)=> {
    //    this.state.name=event.target.value;
    // };
    render() {//render function returns 
        return (
            <div className="ui main">

                <h2> Add Contact</h2>


                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(event) => {
                                this.setState(
                                    {
                                        name: event.target.value
                                    }
                                )
                            }} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(event) => {
                                this.setState(
                                    {
                                        //event.target returns element where the event ocurred
                                        email: event.target.value
                                    }
                                )
                            }}
                        />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>

            </div>
        );
    };
}

export default AddContact;