import { Form, Input } from 'antd';


const EditUserDetailsForm = (props) => {

    const { userDetails, form } = props;

    const validateMessages = {
        required: 'This field is required',
        types: {
            email: 'Invalid email'
        }
    }

    return (
        <Form
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={userDetails}
            autoComplete="off"
            validateMessages={validateMessages}
        >
            <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Website" name="website" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

        </Form>
    )
};
export default EditUserDetailsForm;