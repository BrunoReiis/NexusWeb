import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { EyeSlashFilledIcon, EyeFilledIcon } from "@/components/icons";
import React from "react";

export default function login() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center space-y-2">
          <h1 className={title({ color: "fullviolet", size: "sm" })}>
            Faça o Login
          </h1>
          <div className="space-y-2">
          <Input
            isRequired
            type="email"
            label="Email"
            defaultValue=""
            className="max-w-xs"
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-xs"
          />
          <Button className="w-full font-bold bg-purple-600 text-white" color="primary">Login</Button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
