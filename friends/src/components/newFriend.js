import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";



class NewFriend extends React.Component {
    state = {
        newFriend: {
            name: "",
            age: 0,
            email: "",
        }
    }


    handleChange = e => {
        this.setState({
          newFriend: {
            ...this.state.newFriend,
            [e.target.name]: e.target.value
          }
        });
      };

      submitFunc = (e) => {
          e.preventDefault();
          axiosWithAuth()
            .post("/api/friends", this.state.newFriend)
            .then(res => {
                console.log(res)
                this.props.setFriendsList(res.data);
                // this.setState({
                //     ...this.state,
                //     friendslist: res.data
                // })
            })
            .catch(err => {
                console.log(err);
            });
      };


    render() {
        return (
            <div>
                <h2>You can be friend</h2>
                <form onSubmit={this.submitFunc}>
                    <input
                    name="name"
                    type="text"
                    value={this.state.newFriend.name}
                    onChange={this.handleChange}
                    placeholder="Name"
                    />
                     <input
                    name="age"
                    type="number"
                    value={this.state.newFriend.age}
                    onChange={this.handleChange}
                    placeholder="Age"
                    />
                     <input
                    name="email"
                    type="text"
                    value={this.state.newFriend.email}
                    onChange={this.handleChange}
                    placeholder="Email"
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
        
}

export default NewFriend;