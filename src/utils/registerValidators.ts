import { ref } from 'vue'

export const registerUser = ref({
    name: "",
    email: "",
    password: "",
    password2: "",
    role: "",
  });


  var validatePass2 = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请再次输入密码'));
    } else if (value !== registerUser.value.password) {
      callback(new Error('两次输入密码不一致!'));
    } else {
      callback();
    }
  };


export const registerRules = ref({
    name: [
      {message:'username is error...',required: true, trigger: 'blur' },
      {min:2,max:30,message:'长度在2到30个字符',trigger:'blue'}
    ],
    email: [
      { type:'email',message:'email is error...',required: true, trigger: 'blur' }
    ],
    password: [
      { required: true,message:'password could not be empty', trigger: 'blur' },
      {min:6,max:30,message:'password lengths has to be 6 to 30 characters...'}
    ],
    password2: [
      { required: true,message:'password could not be empty', trigger: 'blur' },
      {min:6,max:30,message:'password lengths has to be 6 to 30 characters...'},
      {validator:validatePass2, trigger:'blur'}
    ]
})



