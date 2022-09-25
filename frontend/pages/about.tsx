import {NextPage} from "next";
import Head from "next/head";

const About: NextPage = props => {
    return (
        <div>
            <Head>
                <title>About</title>
                <meta name={"keywords"} content={"about page more content"}/>
            </Head>
            <h1>About</h1>
        </div>
    );
};

export default About