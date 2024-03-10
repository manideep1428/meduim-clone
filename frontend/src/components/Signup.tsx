import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Label from "./Labels";

interface Data {
  email: string;
  password: string;
  username: string;
}

const Signup = () => {
  const [formData, setFormData] = useState<Data>({
    email: "",
    password: "",
    username: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof Data
  ) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleSignup = () => {
    console.log("Signup data:", formData);
  };

  return (
    <div className="w-full py-12 space-y-4 md:space-y-6">
      <div className="mx-auto max-w-3xl space-y-2 px-4">
        <h1 className="text-4xl font-bold">Create an account</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Already have an account?
          <a className="underline" href="/signin">
            Sign in
          </a>
        </p>
      </div>
      <div className="mx-auto max-w-sm space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            placeholder="Manideep"
            value={formData.username}
            onChange={(e) => handleInputChange(e, "username")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            className="text-white"
            id="email"
            placeholder="m@example.com"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
        </div>
        <Button onClick={handleSignup} className="w-full">
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Signup;
