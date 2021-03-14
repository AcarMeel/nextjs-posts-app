import Head from "next/head";
import Bio from "../components/Bio/Bio";
import Post from "../components/Post/Post";
import PostForm from "../components/PostForm/PostForm";
import { useAuth } from "../hooks/useAuth";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const { user, logIn, logOut } = useAuth();
  return (
    <div className={styles.container}>
      <Head>
        <title>My Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!user && (
        <p>
          <button onClick={logIn}>Log in</button>
        </p>
      )}

      {user && (
        <p>
          <button onClick={logOut}>Log out</button>
        </p>
      )}

      <main className={styles.main}>
        <Bio
          headshot="https://pbs.twimg.com/profile_images/1341422618214330371/zfMI_v2S_400x400.jpg"
          name="Acarmeel"
          tagline="Frontend Dev"
          role="Developer @ somewhere"
        />
        <ul className={styles.posts}>
          <li>
            <Post
              content={`Working on Figma recreating a Twitter Clone`}
              date={`12/03/2021`}
            />
          </li>
          <li>
            <Post
              content={`Working on Figma recreating a Twitter Clone`}
              date={`12/03/2021`}
            />
          </li>
          <li>
            <Post
              content={`Working on Figma recreating a Twitter Clone`}
              date={`12/03/2021`}
            />
          </li>
        </ul>
        {user && <PostForm />}
      </main>
    </div>
  );
}
