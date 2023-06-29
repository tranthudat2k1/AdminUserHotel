import React from 'react';
import avatar2 from './avatar2.jpg';

export const usersData = [
  {
    fullName: 'Tran Thu Dat',
    age: 22,
    email: 'thudatdl123@gmail.com',
    phoneNumber: '0941374589',
    avatar: 'avatar.png',
    block: true,
  },
  {
    fullName: 'Bui Ta Tan Ngoc',
    age: 22,
    email: 'pengocxinhgai@gmail.com',
    phoneNumber: '0941332489',
    avatar: 'avatar.png',
    block: true,
  },
  {
    fullName: 'Vo Thi Ngan',
    age: 22,
    email: 'phongtorai9a@gmail.com',
    phoneNumber: '094123589',
    avatar: 'avatar.png',
    block: true,
  },
  {
    fullName: 'Nguyen Son Ba',
    age: 22,
    email: 'son3a@gmail.com',
    phoneNumber: '0123214589',
    avatar: 'avatar.png',
    block: true,
  },
  {
    fullName: 'Pham Hong Nghia',
    age: 22,
    email: 'thudatdl123@gmail.com',
    phoneNumber: '0941374589',
    avatar: 'avatar.png',
    block: true,
  },
  {
    fullName: 'Tran Thu Dat',
    age: 22,
    email: 'thudatdl123@gmail.com',
    phoneNumber: '0941374589',
    avatar: 'avatar.png',
    block: true,
  },
  {
    fullName: 'Bui Ta Tan Ngoc',
    age: 22,
    email: 'pengocxinhgai@gmail.com',
    phoneNumber: '0941332489',
    avatar: 'avatar.png',
    block: true,
  },
  {
    fullName: 'Vo Thi Ngan',
    age: 22,
    email: 'phongtorai9a@gmail.com',
    phoneNumber: '094123589',
    avatar: 'avatar.png',
    block: true,
  },
  {
    fullName: 'Nguyen Son Ba',
    age: 22,
    email: 'son3a@gmail.com',
    phoneNumber: '0123214589',
    avatar: 'avatar.png',
    block: true,
  },
  {
    fullName: 'Pham Hong Nghia',
    age: 22,
    email: 'thudatdl123@gmail.com',
    phoneNumber: '0941374589',
    avatar: 'avatar.png',
    block: true,
  },
  {
    fullName: 'Tran Thu Dat',
    age: 22,
    email: 'thudatdl123@gmail.com',
    phoneNumber: '0941374589',
    avatar: 'avatar.png',
    block: true,
  },
  {
    fullName: 'Bui Ta Tan Ngoc',
    age: 22,
    email: 'pengocxinhgai@gmail.com',
    phoneNumber: '0941332489',
    avatar: 'avatar.png',
    block: true,
  },
  {
    fullName: 'Vo Thi Ngan',
    age: 22,
    email: 'phongtorai9a@gmail.com',
    phoneNumber: '094123589',
    avatar: 'avatar.png',
    block: true,
  },
  {
    fullName: 'Nguyen Son Ba',
    age: 22,
    email: 'son3a@gmail.com',
    phoneNumber: '0123214589',
    avatar: 'avatar.png',
    block: true,
  },
  {
    fullName: 'Pham Hong Nghia',
    age: 22,
    email: 'thudatdl123@gmail.com',
    phoneNumber: '0941374589',
    avatar: 'avatar.png',
    block: true,
  },
  {
    fullName: 'Tran Thu Dat',
    age: 22,
    email: 'thudatdl123@gmail.com',
    phoneNumber: '0941374589',
    avatar: 'avatar.png',
    block: true,
  },
  {
    fullName: 'Bui Ta Tan Ngoc',
    age: 22,
    email: 'pengocxinhgai@gmail.com',
    phoneNumber: '0941332489',
    avatar: 'avatar.png',
    block: true,
  },
  {
    fullName: 'Vo Thi Ngan',
    age: 22,
    email: 'phongtorai9a@gmail.com',
    phoneNumber: '094123589',
    avatar: 'avatar.png',
    block: true,
  },
  {
    fullName: 'Nguyen Son Ba',
    age: 22,
    email: 'son3a@gmail.com',
    phoneNumber: '0123214589',
    avatar: 'avatar.png',
    block: true,
  },
  {
    fullName: 'Pham Hong Nghia',
    age: 22,
    email: 'thudatdl123@gmail.com',
    phoneNumber: '0941374589',
    avatar: 'avatar.png',
    block: true,
  },
];

const userAvatar = (url) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={url}
      alt="user avatar"
    />
  </div>
);

export const userGrid = [
  { type: 'checkbox', width: '50' },
  {
    headerText: 'Avatar',
    width: '100',
    textAlign: 'Center',
    template: userAvatar,
    field: 'avatar',
  },
  {
    headerText: 'First Name',
    width: '150',
    field: 'firstName',
    textAlign: 'Center',
  },
  {
    headerText: 'Last Name',
    width: '150',
    field: 'lastName',
    textAlign: 'Center',
  },
  {
    headerText: 'Age',
    width: '70',
    field: 'age',
    textAlign: 'Center',
  },
  {
    headerText: 'Email',
    width: '150',
    field: 'email',
    textAlign: 'Center',
  },
  {
    headerText: 'Phone Number',
    width: '180',
    field: 'phoneNumber',
    textAlign: 'Center',
  },
  {
    headerText: 'Blocked',
    field: 'isBlock',
    width: '150',
    displayAsCheckBox: true,
    textAlign: 'Center',
    editType: 'booleanedit',
  },
];

