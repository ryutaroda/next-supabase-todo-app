import Link from "next/link";
import {supabase} from "../../utils/supabase";
import {useState} from "react";

export const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidError, setIsValidError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: any) => {
        console.log(1)
        e.preventDefault();
        console.log(2)
        try {
            if (password.length < 8) {
                setIsValidError(true);
                return setErrorMessage('パスワードは8文字以上で入力してください');
            }
            const {data, error} = await supabase.auth.signUp({
                email: email,
                password: password,
            })
            if (error) {
                setIsValidError(true);
                return setErrorMessage(error.message);
            }
            setIsValidError(false);
            setErrorMessage('');
            alert('新規登録しました');
        } catch (error) {
            setIsValidError(true);
            return setErrorMessage('エラーが発生しました');
        }
    }

    return (
        <section className="">
            <div
                className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 sm:max-w-md">
                {isValidError ?
                    <div className="alert alert-error shadow-lg my-5">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6"
                                 fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span>{errorMessage}</span>
                        </div>
                    </div>
                    : <div className="alert alert-error shadow-lg my-5 opacity-0">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6"
                                 fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span>{errorMessage}</span>
                        </div>
                    </div>
                }
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    email</label>
                                <input type="email" name="email" id="email"
                                       value={email} onChange={e => setEmail(e.target.value)}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="name@company.com" required/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••"
                                       value={password} onChange={e => setPassword(e.target.value)}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required/>
                            </div>
                            {/*<div className="flex items-center justify-between">*/}
                            {/*    <div className="flex items-start">*/}
                            {/*        <div className="flex items-center h-5">*/}
                            {/*            <input id="remember" aria-describedby="remember" type="checkbox"*/}
                            {/*                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"*/}
                            {/*                   required=""/>*/}
                            {/*        </div>*/}
                            {/*        <div className="ml-3 text-sm">*/}
                            {/*            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember*/}
                            {/*                me</label>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <a href="#"*/}
                            {/*       className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot*/}
                            {/*        password?</a>*/}
                            {/*</div>*/}
                            {/*<button type="submit"*/}
                            {/*        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign*/}
                            {/*    in*/}
                            {/*</button>*/}
                            <button className="btn w-full" type="submit">Sign up</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?
                                <Link href="/login" legacyBehavior>
                                    <a className="ml-1 font-medium text-primary-600 hover:underline dark:text-primary-500">Sign
                                        in</a>
                                </Link>

                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;