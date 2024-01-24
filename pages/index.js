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
        <footer className="flex justify-content-between p-2 md:p-6 md:-mx-2 mx-1">
          <div className="flex-column">
            <h2 className="text-light">Talent Protocol</h2>
            <p className="line-height-3">Where builders commit to goals,<br/>share their progress and find the<br/>support they need to succeed.</p>
          </div>
          <div className="flex">
            <div className="flex-column mr-6">
              <h3 className="text-light text-right">Project</h3>
              <ul className='flex-column justify-content-end' style={{paddingInlineStart: 0}}>
                <li className='mt-2 text-right'>
                  <a target="_blank" rel="noreferrer" href={ABOUT} className="text-white">
                    <span>About</span>
                  </a>
                </li>
                <li className='mt-2 text-right'>
                  <a target="_blank" rel="noreferrer" href={BLOG} className="text-white">
                    <span>Blog</span>
                  </a>
                </li>
                <li className='mt-2 text-right'>
                  <a target="_blank" rel="noreferrer" href={BOUNTIES} className="text-white">
                    <span>Bounties</span>
                  </a>
                </li>
                <li className='mt-2 text-right'>
                  <a target="_blank" rel="noreferrer" href={API} className="text-white">
                    <span>API</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-column mr-6">
              <h3 className="text-light text-right">Help</h3>
              <ul className='flex-column justify-content-end' style={{paddingInlineStart: 0}}>
                <li className='mt-2 text-right'>
                  <a target="_blank" rel="noreferrer" href={FAQ} className="text-white">
                    <span>FAQ</span>
                  </a>
                </li>
                <li className='mt-2 text-right'>
                  <a target="_blank" rel="noreferrer" href={TERMS_HREF} className="text-white">
                    <span>Terms of Service</span>
                  </a>
                </li>
                <li className='mt-2 text-right'>
                  <a target="_blank" rel="noreferrer" href={PRIVACY_HREF} className="text-white">
                    <span>Privacy Policy</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-column">
              <h3 className="text-light text-right">Socials</h3>
              <ul className='flex-column justify-content-end' style={{paddingInlineStart: 0}}>
                <li className='mt-2 text-right'>
                  <a target="_blank" rel="noreferrer" href={TALENT_PROTOCOL_TWITTER} className="text-white">
                    <span>Twitter</span>
                  </a>
                </li>
                <li className='mt-2 text-right'>
                  <a target="_blank" rel="noreferrer" href={TALENT_PROTOCOL_DISCORD} className="text-white">
                    <span>Discord</span>
                  </a>
                </li>
                <li className='mt-2 text-right'>
                  <a target="_blank" rel="noreferrer" href={TALENT_PROTOCOL_GITHUB} className="text-white">
                    <span>Github</span>
                  </a>
                </li>
                <li className='mt-2 text-right'>
                  <a target="_blank" rel="noreferrer" href={TALENT_PROTOCOL_TELEGRAM} className="text-white">
                    <span>Telegram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
    </>
  )
}
