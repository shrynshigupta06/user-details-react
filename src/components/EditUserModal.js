import { Modal, Form } from 'antd';

import EditUserDetailsForm from './EditUserDetailsForm';
import './EditUserModal.css'


const EditUserModal = (props) => {
  const { userDetails, isModalOpen, setIsModalOpen } = props;
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((resp) => {

      userDetails.name = resp.name;
      userDetails.email = resp.email;
      userDetails.phone = resp.phone;
      userDetails.website = resp.website;
      
      setIsModalOpen(false);
    }).catch((err) => {
      console.error('Validate Failed:', err);
      setIsModalOpen(true);
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <EditUserDetailsForm userDetails={userDetails} form={form} />
      </Modal>
    </>
  );
};

export default EditUserModal;