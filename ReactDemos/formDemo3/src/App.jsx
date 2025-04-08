import {useForm} from "react-hook-form";
import  {object, string, number} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const App = () => {
    const initialState = {
        fname: "",
        age: 0
    }

    const userSchema = object(
        {
            fname: string()
                        .required("Please enter first name.")
                        .max(3, "Must be less than 3 characters!"),
            age: number()
                    .min(21, "You are not old enough!!!!").
                    max(99, "You are too old!!")
        }
    )

    const {
        register,
        setValue,
        handleSubmit,
        reset,
        formState: {errors}
    }
        = useForm({resolver: yupResolver(userSchema)})

    const onSubmit =(data) =>{
        console.log(data)
        reset()
    }

    function handleChange(event) {
        setValue(event.target.name, event.target.value)

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <label>First Name:
                <input
                    type="text"
                    {...register("fname")}
                    onChange={handleChange}/>
            </label>
            {errors.fname && <span>{errors.fname.message}</span>}
            <br/>
            <label>Age:
                <input
                    type="number"
                    {...register("age")}
                    min={21}
                    onChange={handleChange}/>
            </label>
            {errors.age && <span>{errors.age.message}</span>}
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default App;