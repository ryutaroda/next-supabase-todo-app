import {Layout} from "../components/layout/Layout";
import Login from "../components/page/Login";
import {supabase} from "@supabase/auth-ui-shared";
import {useState} from "react";


export function LoginPage() {
    return (
        <Layout>
            <Login/>
        </Layout>
    );
}

export default LoginPage;