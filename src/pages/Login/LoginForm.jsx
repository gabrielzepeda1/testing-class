import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "./schemas/login-form-schema";
import { Box, Typography } from "@mui/material";
import { FormProvider } from "react-hook-form/dist";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    defaultValues: { username: "", password: "" },
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema),
  });

  const userNameWatch = watch("username");
  const passwordWatch = watch("password");

  const onSubmit = async (data) => {};

  return (
    <>
      {userNameWatch}
      {passwordWatch}
      <FormProvider {... {register, errors }}>
        <form onSubmit={handleSubmit()}>
          <input type="text"></input>
          <input type="text"></input>
          <button></button>
        </form>
      </FormProvider>
      <Box color="grey.600" mt="10px">
        {isDirty && isValid && (
          <>
            <Typography>Username: {userNameWatch}</Typography>
            <Typography>Username: {passwordWatch}</Typography>
          </>
        )}
      </Box>
    </>
  );
};

export default LoginForm;
