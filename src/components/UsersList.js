import { useEffect, useState } from "react";
import { Col, Row } from 'antd';

import UsersCard from "./UserCard";
import LoadingSpinner from "./LoadingSpinner";
import { getUsers } from "../data";


const UsersList = () => {

    const [userList, setUserList] = useState([]);

    // fetch list of users
    useEffect(() => {
        getUsers()
            .then(res => setUserList(res));
    }, []);

    return (
        <Row>
            {userList.length ? 
                userList.map((user, idx) =>
                    <Col xs={24} sm={24} md={8} lg={8} xl={6} key={idx}>
                        <UsersCard index={idx} userData={user} userList={userList} setUserList={setUserList} />
                    </Col>
                )
                :
                <LoadingSpinner />
            }
        </Row>
    )
}

export default UsersList;