import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { LoginSchema } from '../../../schemas/LoginSchema'
import MainLogo from '../MainLogo'
import { NavLink, useNavigate } from 'react-router-dom'
import { login } from '../../../services/Auth.service'
import Toaster from '../../../hooks/Toaster'
import { FcGoogle } from 'react-icons/fc'


const Login = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            console.log(values);
            const {email, password} = values
            const userVal ={
                email,
                password
            }
            login(userVal)
            .then((res)=>{
                if(res){
                    Toaster.success("login succesfull")
                    navigate('/')
                }else{
                    Toaster.error("Please enter valid email or password")
                }
            })
            .catch((err)=>{
                Toaster.error(err.response.data.message)
            })
        }
    })
    const responseGoogle = (response:any) => {
        console.log(response);  
      };

      useEffect(() => {
        responseGoogle
      }, [])
      
    return (
        // <Transition.Root show={open} as={Fragment}>
        //     <Dialog as="div" className="relative z-10" onClose={setOpen}>
        //         <Transition.Child
        //             as={Fragment}
        //             enter="ease-in-out duration-500"
        //             enterFrom="opacity-0"
        //             enterTo="opacity-100"
        //             leave="ease-in-out duration-500"
        //             leaveFrom="opacity-100"
        //             leaveTo="opacity-0"
        //         >
        //             <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        //         </Transition.Child>

        //         <div className="fixed inset-0 overflow-hidden">
        //             <div className="absolute inset-0 overflow-hidden">
        //                 <div className="pointer-events-none fixed inset-y-0 right-0 flex pl-10">
        //                     <Transition.Child
        //                         as={Fragment}
        //                         enter="transform transition ease-in-out duration-500 sm:duration-700"
        //                         enterFrom="translate-x-full"
        //                         enterTo="translate-x-0"
        //                         leave="transform transition ease-in-out duration-500 sm:duration-700"
        //                         leaveFrom="translate-x-0"
        //                         leaveTo="translate-x-full"
        //                     >
        //                         <Dialog.Panel className="pointer-events-auto relative w-screen max-w-lg">
        //                             <Transition.Child
        //                                 as={Fragment}
        //                                 enter="ease-in-out duration-500"
        //                                 enterFrom="opacity-0"
        //                                 enterTo="opacity-100"
        //                                 leave="ease-in-out duration-500"
        //                                 leaveFrom="opacity-100"
        //                                 leaveTo="opacity-0"
        //                             >
        //                                 <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
        //                                     <button
        //                                         type="button"
        //                                         className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
        //                                         onClick={() => setOpen(false)}
        //                                     >
        //                                         <span className="sr-only">Close panel</span>
        //                                         <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        //                                     </button>
        //                                 </div>
        //                             </Transition.Child>
        //                             <div className="flex h-full flex-1 flex-col justify-center w-screen max-w-lg">
        //                                 <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
        //                                     <div className="px-4 py-10 sm:px-6">
        //                                         <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
        //                                             <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
        //                                                 <div><MainLogo /></div>
        //                                                 <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        //                                                     Login to your account
        //                                                 </h2>
        //                                             </div>
        //                                             <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm ">
        //                                                 <form className="space-y-6" action="#" method="POST" onSubmit={formik.handleSubmit}>
        //                                                     <div>
        //                                                         <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        //                                                             Email address
        //                                                         </label>
        //                                                         <div className="mt-2">
        //                                                             <input
        //                                                                 id="email"
        //                                                                 name="email"
        //                                                                 type="email"
        //                                                                 autoComplete="email"
        //                                                                 onChange={formik.handleChange}
        //                                                                 value={formik.values.email}
        //                                                                 className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
        //                                                             />
        //                                                         </div>
        //                                                         {formik.errors.email && formik.touched.email ? <p className="text-red-500">{formik.errors.email}</p> : null}
        //                                                     </div>

        //                                                     <div>
        //                                                         <div className="flex items-center justify-between">
        //                                                             <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
        //                                                                 Password
        //                                                             </label>
        //                                                             <div className="text-sm">
        //                                                                 <NavLink to={'/forgot-password'}>
        //                                                                     <span className='font-semibold text-indigo-600 hover:text-indigo-500'>Forgot password?</span>
        //                                                                 </NavLink>
        //                                                             </div>
        //                                                         </div>
        //                                                         <div className="mt-2">
        //                                                             <input
        //                                                                 id="password"
        //                                                                 name="password"
        //                                                                 type="password"
        //                                                                 autoComplete="current-password"
        //                                                                 onChange={formik.handleChange}
        //                                                                 value={formik.values.password}
        //                                                                 className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
        //                                                             />
        //                                                         </div>
        //                                                         {formik.errors.password && formik.touched.password ? <p className="text-red-500">{formik.errors.password}</p> : null}
        //                                                     </div>

        //                                                     <div>
        //                                                         <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
        //                                                             Login
        //                                                         </button>
        //                                                     </div>
        //                                                 </form>
        //                                                 <p className="mt-9 text-center text-sm text-gray-500">Not a member ?</p>
        //                                                 <NavLink to={'/create'}> <button className="flex w-full justify-center rounded-md bg-gray-200 px-3 py-1.5 my-2.5 text-md font-semibold leading-6 text-gray-600 shadow-sm hover:bg-gray-300 hover:text-gray-800">Create Your Account</button></NavLink>
        //                                             </div>
        //                                         </Dialog.Title>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </Dialog.Panel>
        //                     </Transition.Child>
        //                 </div>
        //             </div>
        //         </div>
        //     </Dialog>
        // </Transition.Root>
        <div className="fixed inset-0 overflow-hidden">
                    <div className="flex absolute inset-0 overflow-hidden bg-gray-300">
                            <div className="hidden sm:flex items-center absolute xl:top-48 xl:left-40 top-48">
                                <img src="/public/icons/Main-logo.svg" alt="mainLogo" className='w-60 h-60' />
                                <div>
                                    <img src="/public/icons/Logo-name.svg" alt="mainLogo" className='w-96 h-96 relative'/>
                                    <h2 className="absolute top-56 right-12 mt-1 text-center text-2xl font-bold tracking-tight text-gray-900 capitalize">
                                        Login to your account➡️
                                    </h2>
                                </div>
                            </div>
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex pl-10">
                            <div className="pointer-events-auto relative w-screen max-w-lg">
                                <div className="flex h-full flex-1 flex-col justify-center w-screen max-w-lg">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-2xl">
                                        <div className="px-4 py-32 sm:px-6">
                                            <div className="text-base font-semibold leading-6 text-gray-900">
                                                <div className="sm:hidden sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
                                                    <div><MainLogo /></div>
                                                    <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 capitalize">
                                                        Login to your account
                                                    </h2>
                                                </div>
                                                <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm ">
                                                    <form className="space-y-6" action="#" method="POST" onSubmit={formik.handleSubmit}>
                                                        <div>
                                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                                Email address
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    id="email"
                                                                    name="email"
                                                                    type="email"
                                                                    autoComplete="email"
                                                                    onChange={formik.handleChange}
                                                                    value={formik.values.email}
                                                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                                                                />
                                                            </div>
                                                            {formik.errors.email && formik.touched.email ? <p className="text-red-500">{formik.errors.email}</p> : null}
                                                        </div>

                                                        <div>
                                                            <div className="flex items-center justify-between">
                                                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Password
                                                                </label>
                                                                <div className="text-sm">
                                                                    <NavLink to={'/forgot-password'}>
                                                                        <span className='font-semibold text-indigo-600 hover:text-indigo-500'>Forgot password?</span>
                                                                    </NavLink>
                                                                </div>
                                                            </div>
                                                            <div className="mt-2">
                                                                <input
                                                                    id="password"
                                                                    name="password"
                                                                    type="password"
                                                                    autoComplete="current-password"
                                                                    onChange={formik.handleChange}
                                                                    value={formik.values.password}
                                                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                                                                />
                                                            </div>
                                                            {formik.errors.password && formik.touched.password ? <p className="text-red-500">{formik.errors.password}</p> : null}
                                                        </div>

                                                        <div>
                                                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                                                                Login
                                                            </button>
                                                        </div>
                                                    </form>
                                                    <div className='mt-16 text-center'>
                                                        <button className="flex w-full justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-600 shadow-sm capitalize hover:bg-gray-300 hover:text-gray-800" >
                                                            <div className="text-2xl mx-2"><FcGoogle/></div>
                                                            Login with google
                                                        </button>
                                                    </div>
                                                    <p className="mt-5 text-center text-sm text-gray-500">Not a member ?</p>
                                                    <NavLink to={'/create'}> <button className="flex w-full justify-center rounded-md bg-gray-200 px-3 py-1.5 my-2.5 text-md font-semibold leading-6 text-gray-600 shadow-sm hover:bg-gray-300 hover:text-gray-800">Create Your Account</button></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Login;