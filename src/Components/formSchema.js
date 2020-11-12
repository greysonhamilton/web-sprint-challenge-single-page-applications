import * as yup from 'yup';

const formSchema = yup.object().shape ({

    name: yup
            .string()
            .min(2, "Your name must be at least 2 characters long.")
            .required("Your name is required."),

})

export default formSchema