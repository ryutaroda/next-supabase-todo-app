import {Layout} from "../components/layout/Layout";
import {supabase} from "../utils/supabase";
import {useEffect} from "react";

export default function Home() {
    const fetchUserData = async () => {
        const { data: { user } } = await supabase.auth.getUser()
        console.log(user)
    }

    // useEffect(() => {
    //     fetchUserData();
    // }, []);

    return (
        <Layout>
            <section className='flex justify-center items-center h-screen'>
                HOME
            </section>
        </Layout>
    )
}
