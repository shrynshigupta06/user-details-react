import { useEffect, useState } from "react";

import UsersCard from "./UserCard";
import LoadingSpinner from "./LoadingSpinner";
import { getUsers } from "../data";
import './UsersList.css';


const UsersList = () => {

    const [userList, setUserList] = useState([]);

    // fetch list of users
    useEffect(() => {
        getUsers()
            .then(res => setUserList(res));
    }, []);

    return (
        <div className="user-card-list">
            {userList.length ?
                userList.map((user, idx) => <UsersCard key={idx} index={idx} userData={user} userList={userList} setUserList={setUserList}/>)
                :
                <LoadingSpinner />
            }
        </div>
    )
}

export default UsersList;