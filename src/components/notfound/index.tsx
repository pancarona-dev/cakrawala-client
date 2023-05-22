import Head from "next/head";
import { SiteConfig } from "@configs/site.config";
import Link from "next/link";
import Image from "next/image";
import styles from "./notfound.module.css";

export const NotFound = () => (
  <>
    <Head>
      <title>{SiteConfig.title}</title>
    </Head>
    <div className={styles.notfoundwrapper} style={{ height: "100vh" }}>
      <Image
        src="/sadnot.png"
        className={styles.notfoundimg}
        alt="seems lost"
        width={100}
        height={100}
      />
      <div className="my-8">
        <h1 className={styles.nextErrorh1}>404</h1>
        <div className={styles.lineWrapper}>
          <h2 className={styles.textMessage}>This page could not be found.</h2>
        </div>
      </div>

      <Link
        className="rounded text-slate-50 p-3 bg-sky-500 hover:bg-sky-200"
        href="/"
      >
        Return Home
      </Link>
    </div>
  </>
);
