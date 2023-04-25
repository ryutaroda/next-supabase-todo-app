import Head from 'next/head'
import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from '../styles/Home.module.css'
import TodoApp from '../components/TodoApp';
import Login from "../components/page/Login";
import {Layout} from "../components/layout/Layout";
import {Signup} from "../components/page/Signup";

const inter = Inter({subsets: ['latin']})

export default function SignupPage() {
    return (
        <Layout>
            <Signup />
        </Layout>
    );
}
