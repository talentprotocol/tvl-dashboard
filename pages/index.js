import Head from 'next/head';

const TERMS_HREF = "https://talentprotocol.notion.site/Terms-Conditions-ec060cb6c06e49a98f17d235d0835773";

const PRIVACY_HREF = "https://talentprotocol.notion.site/Privacy-Policy-cc2b297006b54b3db1a008592302ccf5";

const ABOUT = "https://talentprotocol.notion.site/Talent-Protocol-2b10dc798a3941d5814bc10dfd102c25";

const BLOG = "https://blog.talentprotocol.com/";

const BOUNTIES = "https://talentprotocol.notion.site/Bounties-74c27972ac554ce0b9702e8a9131cfa7";

const API = "https://docs.talentprotocol.com/api";

const FAQ = "https://help.talentprotocol.com/";

const TALENT_PROTOCOL_DISCORD = "https://discord.com/invite/talentprotocol";

const TALENT_PROTOCOL_TWITTER = "https://twitter.com/talentprotocol";

const TALENT_PROTOCOL_GITHUB = "https://github.com/talentprotocol";

const TALENT_PROTOCOL_TELEGRAM = "https://t.me/talentprotocol";

export default function Home() {

  return (
    <>
      <Head>
        <title>Talent Protocol Growth</title>
        <meta name="description" content="Talent Protocol Growth Metrics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <iframe className="h-screen w-screen" src="https://lookerstudio.google.com/embed/reporting/b7659ced-0b4c-4633-928e-7b67e95e1a71/page/p_cuhzqo9h7c" allowFullScreen></iframe>
    </>
  )
}
