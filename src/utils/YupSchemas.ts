import * as Yup from "yup";

const phoneRegExp =
  /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const CustomerSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Must be a valid email"),
  name: Yup.string().required("Name is required"),
  password: Yup.string().required("Password is required").min(8),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

export { CustomerSchema };
