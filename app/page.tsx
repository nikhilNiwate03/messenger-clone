import { SiMessenger } from "react-icons/si";
import AuthForm from "./components/AuthForm/AuthForm";

// email: nik1@gmail.com & nik2@gmail.com
// password: 12345

export default function Home() {
  return (
    <div className="flex min-h-[100vh] flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div>
          <SiMessenger size={48} className="mx-auto w-auto " color="#368ddf" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign In to your account
          </h2>
        </div>
      </div>
      <AuthForm />
    </div>
  );
}
