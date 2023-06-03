import { useState } from 'react';
import { EditOutlined, HeartFilled, HeartOutlined, DeleteFilled, MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;

import EditUserModal from './EditUserModal';
import './UserCard.css';


const UsersCard = (props) => {

    const { userData, setUserList, userList } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const wishlistUser = (userId) => {
        let allUsers = [...userList];
        for(let user of allUsers) {
            if((user.id === userId)) {
                user['isWishlisted'] = !user['isWishlisted'];
            }
        }
        setUserList(allUsers);
    }

    const removeUser = (userId) => {
        let allUsers = [...userList];
        allUsers = allUsers.filter(user => user.id !== userId);
        setUserList(allUsers);
    }

    return (
        <>
            <Card
                style={{ width: 300, }}
                className='user-card'
                cover={
                    <img
                        alt="example"
                        src={`https://avatars.dicebear.com/v2/avataaars/${userData.username}.svg?options[mood][]=happy`}
                    />
                }
                actions={[
                    <span className='wishlist-action' onClick={() => wishlistUser(userData.id)}>{userData.isWishlisted ? <HeartFilled key="heart" /> : <HeartOutlined key="heart"/>}</span>,
                    <EditOutlined key="edit" onClick={showModal}/>,
                    <DeleteFilled key="delete" onClick={() => removeUser(userData.id)}/>
                ]}
            >
                <Meta
                    title={<span className='user-name'>{userData.name}</span>}
                />
                <Meta
                    avatar={<MailOutlined className='card-icons'/>}
                    description={userData.email}
                />
                <Meta
                    avatar={<PhoneOutlined className='card-icons'/>}
                    description={userData.phone}
                />
                <Meta
                    avatar={<GlobalOutlined className='card-icons'/>}
                    description={"http://" + userData.website}
                />
            </Card>

            {isModalOpen &&
                <EditUserModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} userDetails={userData} setUserList={setUserList} userList={userList} />
            }
        </>
    )
};

export default UsersCard;