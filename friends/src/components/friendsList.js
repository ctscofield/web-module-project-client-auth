import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import NewFriend from "./newFriend";


class FriendsList extends React.Component {
    state = {
        friendsList: [],
    };

    setFriendsList = (inList) => {
        this.setState({
            friendsList: inList
        });
    }

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        axiosWithAuth()
            .get("/api/friends")
            .then(res => {
                this.setState({
                    friendsList: res.data
                });
            })
    };

    render() {
        return(
            <div>
                <h2>All of my FRIENDS</h2>
                <NewFriend setFriendsList={this.setFriendsList} friendsList={this.state.friendsList}/>
                {this.state.friendsList.map((friend) => (
                <div>
                    <div>
                        <p>{friend.name}</p>
                    </div>
                    <div>
                        <p>{friend.age}</p>
                    </div>
                    <div>
                        <p>{friend.email}</p>
                    </div>
                </div>
                ))}
            </div>
        )
    }
}

export default FriendsList;