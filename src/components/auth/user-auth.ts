import { authenticateUser } from "@/actions/authenticateUser";
import { emailAndPasswordSchema } from "@/validation/emailAndPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

export const useAuth = ({ isSignUp }: { isSignUp: boolean }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof emailAndPasswordSchema>>({
    resolver: zodResolver(emailAndPasswordSchema),
    mode: "onChange",
  });

  const handleSubmit = async (data: z.infer<typeof emailAndPasswordSchema>) => {
    setIsLoading(true);

    try {
      const response = await authenticateUser({
        email: data.email,
        password: data.password,
        isSignUp: isSignUp,
      });

      if (response.error) {
        toast.error(response.message);
      } else {
        router.push("/ps/feed");
      }
    } catch (error: unknown) {
      console.error(error);
      toast.error("Um erro inesperado ocorreu. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    handleSubmit,
    form,
  };
};
