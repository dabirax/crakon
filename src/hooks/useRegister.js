import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api";

const registerCustomer = async (data) => {
  const response = await api.post("/api/auth/register", {
    username: data.fullName,
    email: data.email,
    password: data.password,
    role: "customer",
  });
  return response.data;
};

export const useRegisterCustomer = () =>
  useMutation({
    mutationFn: registerCustomer,
  });
