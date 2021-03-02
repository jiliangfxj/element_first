import { ref } from 'vue'

export const loginUser = ref({
    email: '',
    password: ''
})

// 校验规则
export   const rules =  ref({
          email: [
            { type:'email',message:'email is error...',required: true, trigger: 'blur' }
          ],
          password: [
            { required: true,message:'password could not be empty', trigger: 'blur' },
            {min:6,max:30,message:'password lengths has to be 6 to 30 characters...'}
          ]
})