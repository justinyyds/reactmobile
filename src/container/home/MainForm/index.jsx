import React, { useState } from 'react'
import {
    Form, Input, Button, Picker, Space, DatePicker
} from 'antd-mobile-v5'
import dayjs from 'dayjs'
import { AddCircleOutline, MinusCircleOutline, CloseCircleFill } from 'antd-mobile-icons'
import './index.css'

const basicColumnsWeek = [
    [
        { label: '周一', value: 'Mon' },
        { label: '周二', value: 'Tues' },
        { label: '周三', value: 'Wed' },
        { label: '周四', value: 'Thur' },
        { label: '周五', value: 'Fri' },
    ],
    [
        { label: '上午', value: 'am' },
        { label: '下午', value: 'pm' },
    ],
]
const basicColumnsF = [
    [
        { label: '周一', value: 'Mon' },
        { label: '周二', value: 'Tues' },
        { label: '周三', value: 'Wed' },
        { label: '周四', value: 'Thur' },
        { label: '周五', value: 'Fri' },
    ],
    [
        { label: '上午', value: 'am' },
        { label: '下午', value: 'pm' },
    ],
]
const basicColumnsC = [
    [
        { label: '周一', value: 'Mon' },
        { label: '周二', value: 'Tues' },
        { label: '周三', value: 'Wed' },
        { label: '周四', value: 'Thur' },
        { label: '周五', value: 'Fri' },
    ],
    [
        { label: '上午', value: 'am' },
        { label: '下午', value: 'pm' },
    ],
]
const basicColumnsQ = [
    [
        { label: '周一', value: 'Mon' },
        { label: '周二', value: 'Tues' },
        { label: '周三', value: 'Wed' },
        { label: '周四', value: 'Thur' },
        { label: '周五', value: 'Fri' },
    ],
    [
        { label: '上午', value: 'am' },
        { label: '下午', value: 'pm' },
    ],
]
const MainForm = () => {
    const [form] = Form.useForm()
    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState()
    const [pickerVisible, setPickerVisible] = useState(false)
    const onFinish = () => {
        const values = form.getFieldValue()
        console.log(values)
    }
    console.log(dayjs);

    return (
        <Form
            form={form}
            onFinish={onFinish}
            initialValues={{
                ziben: 1,
                contacts: [{}],
                contacts1: [{}],
                Fname: value
            }}
            footer={
                <Button block type='submit' color='primary' size='large'>
                    提交
                </Button>
            }
            mode='card'
        >
            {/* <Form.Item name={'name'} label='客户名称'>
                <Input placeholder='请输入客户名称' />
            </Form.Item> */}
            <Form.Item name={'name'} label='企业名称' >
                <Form.Array
                    name='contacts'
                    onAdd={operation => operation.add(/* { name: '张三' } */)}
                    renderAdd={() => (
                        <span>
                            <AddCircleOutline /> 添加企业名称
                        </span>
                    )}
                    renderHeader={({ index }, { remove }) => (
                        <>
                            <MinusCircleOutline className='leftIcon' onClick={() => remove(index)} color='var(--adm-color-danger)' style={{ float: 'left' }} />

                        </>
                    )}
                >
                    {fields =>
                        fields.map(({ index }) => (
                            <>
                                <Form.Item
                                    layout='horizontal'
                                    name={[index, 'name']}
                                    rules={[{ required: true, message: '姓名不能为空' }]}
                                    style={{ paddingLeft: '10px' }}
                                >
                                    <Input placeholder='请输入姓名' />

                                </Form.Item>
                            </>
                        ))
                    }
                </Form.Array>
            </Form.Item>
            <Form.Item
                name='ziben'
                layout='horizontal'
                label='注册资本'
                extra={
                    <div >
                        万元
                    </div>
                }
            >
                <Input placeholder='请填写' clearable />
            </Form.Item>
            <Form.Item name={'name'} label='股东' >
                <Form.Array
                    name='contacts1'
                    onAdd={operation => operation.add(/* { name: '张三' } */)}
                    renderAdd={() => (
                        <span>
                            <AddCircleOutline /> 新增一名股东
                        </span>
                    )}
                    renderHeader={({ index }, { remove }) => (
                        <>
                            <MinusCircleOutline className='leftIcon' onClick={() => remove(index)} color='var(--adm-color-danger)' style={{ float: 'left' }} />

                        </>
                    )}
                >
                    {fields =>
                        fields.map(({ index }) => (
                            <>
                                <Form.Item
                                    layout='horizontal'
                                    name={[index, 'name']}
                                    rules={[{ required: true, message: '姓名不能为空' }]}
                                    style={{ paddingLeft: '10px' }}
                                >
                                    <Input placeholder='请输入姓名' />

                                </Form.Item>
                            </>
                        ))
                    }
                </Form.Array>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, curValues) =>
                    prevValues.birthday !== curValues.birthday
                }
            >
                {({ getFieldValue, setFieldsValue }) => (
                    <Form.Item
                        layout='horizontal'
                        name='birthday'
                        label='时间选择器'
                        trigger='onConfirm'
                        // arrow={
                        //     getFieldValue('birthday') ? (
                        //         <CloseCircleFill
                        //             style={{
                        //                 color: 'var(--adm-color-light)',
                        //                 fontSize: 14,
                        //             }}
                        //             onClick={e => {
                        //                 e.stopPropagation()
                        //                 setFieldsValue({ birthday: null })
                        //             }}
                        //         />
                        //     ) : (
                        //         true
                        //     )
                        // }
                        onClick={() => {
                            setPickerVisible(true)
                        }}
                    >
                        <DatePicker
                            visible={pickerVisible}
                            onClose={() => {
                                setPickerVisible(false)
                            }}
                        >
                            {value =>
                                value ? basicColumnsF : '请选择日期'
                            }
                        </DatePicker>
                    </Form.Item>
                )}
            </Form.Item>
            <Form.Item
                layout='horizontal'
                name='Fname'
                label='法人选择器'
                trigger='onConfirm'
                // rules={[{ required: true }]}
                onClick={() => {
                    setVisible(true)
                }}
            >
                <Picker
                    visible={visible}
                    columns={basicColumnsF}
                    value={value}
                    onClose={() => {
                        setVisible(false)
                    }}
                   
                >
                    {(value)=>{
                        console.log(value);
                        return (
                            value[0]?.label
                        )
                    }

                    }
                </Picker>
            </Form.Item>
        </Form>
    )
}

export default MainForm