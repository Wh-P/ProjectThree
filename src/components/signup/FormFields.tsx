const formFields =  [
    {
      name: "Id",
      label: "아이디",
      type: "text",
      placeholder: "아이디를 입력하세요",
    },
    {
      name: "SignUpPassword",
      label: "비밀번호",
      type: "password",
      placeholder: "비밀번호를 입력하세요",
    },
    {
      name: "SignUpPasswordCheck",
      label: "비밀번호 확인",
      type: "password",
      placeholder: "비밀번호를 확인합니다",
    },
    {
      name: "SignUpEmail",
      label: "이메일",
      type: "email",
      placeholder: "이메일을 입력하세요",
    },
    {
      name: "SignUpPhoneNumber",
      label: "핸드폰번호",
      type: "tel",
      placeholder: "핸드폰번호를 입력하세요",
    },
    {
      name: "NickName",
      label: "닉네임",
      type: "text",
      placeholder: "닉네임을 입력하세요",
    },
    {
      name: "SignUpPostCode",
      label: "상세주소",
      type: "text",
      placeholder: "우편번호",
    },
    { name: "SignUpAddress", type: "text", placeholder: "기본주소" },
    { name: "SignUpAddressDetail", type: "text", placeholder: "상세주소" },
  ];

export default formFields;