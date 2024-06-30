"use client";
/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import ClerkHeader from "@/app/(dashboard)/header";
import Image from "next/image";

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

// Define the props for the NavbarSample component, including the navigation array
type NavbarSampleProps = {
  navigation: NavigationItem[];
};
export default function NavbarComponent({ navigation }: NavbarSampleProps) {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="h-8 w-auto"
                    src="/calc.jpg"
                    alt="Your Company"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="hidden  sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={clsx(
                        "inline-flex items-center px-1 pt-1 text-sm md:text-md font-medium",
                        item.current ? "text-gray-900" : "text-gray-500",
                        "underline-animation",
                        index >= 5 ? "hidden lg:flex" : ""
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="">
                  <ClerkHeader />
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`block py-2 pl-3 pr-4 text-base font-medium ${
                    item.current
                      ? "border-l-4 border-indigo-500 bg-indigo-50 text-indigo-700"
                      : "border-l-4 border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  }`}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
