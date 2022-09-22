import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ethers } from 'ethers';
import { CeloProvider } from '@celo-tools/celo-ethers-wrapper';

import StakingMigrationABI from "./abi/StakingMigration.json";

export default function Home() {
  const [data, setData] = useState({ celo: {}, matic: {}});
  
  useEffect(() => {
    const celoProvider = new CeloProvider("https://forno.celo.org");
    const celoContract = new ethers.Contract(
      "0x5a6eF881E3707AAf7201dDb7c198fc94B4b12636",
      StakingMigrationABI.abi,
      celoProvider
    );

    const maticProvider = new CeloProvider("https://polygon-rpc.com/");
    const maticContract = new ethers.Contract(
      "0xE23104E89fF4c93A677136C4cBdFD2037B35BE67",
      StakingMigrationABI.abi,
      maticProvider
    );

    retrieveSmartContractData(celoContract, "celo");
    retrieveSmartContractData(maticContract, "matic");
  },[]);

  const retrieveSmartContractData = async (contract, chain) => {
    const activeStakes = await contract.activeStakes();
    const stakedTAL = await contract.totalTokensStaked()

    setData((prev) => ({...prev, [chain]: {
      activeStakes: ethers.utils.commify(activeStakes),
      stakedTAL: ethers.utils.commify(ethers.utils.formatUnits(stakedTAL)).split('.')[0]
    }}));
  }

  const tvl = () => {
    if(!data["celo"]["stakedTAL"] || !data["matic"]["stakedTAL"]) {
      return "loading";
    }

    const celoTAL = ethers.utils.parseUnits(data["celo"]["stakedTAL"].replaceAll(',',''), "ether");
    const maticTAL = ethers.utils.parseUnits(data["matic"]["stakedTAL"].replaceAll(',',''), "ether");

    const result = celoTAL.add(maticTAL).div(50);

    return "$" + ethers.utils.commify(ethers.utils.formatUnits(result)).split('.')[0];
  }

  const totalActiveStakes = () => {
    if(!data["celo"]["activeStakes"] || !data["matic"]["activeStakes"]) {
      return "loading";
    }

    const celoActiveStakes = ethers.utils.parseUnits(data["celo"]["activeStakes"].replaceAll(',',''), "ether");
    const maticActiveStakes = ethers.utils.parseUnits(data["matic"]["activeStakes"].replaceAll(',',''), "ether");

    const result = celoActiveStakes.add(maticActiveStakes);

    return ethers.utils.commify(ethers.utils.formatUnits(result)).split('.')[0];
  }

  const menubarItems = [
    {
      label: 'Talent Protocol',
      url: "https://talentprotocol.com/",
      textClassName: "text-primary font-bold"
    }
  ];

  return (
    <>
      <Head>
        <title>Talent Protocol TVL</title>
        <meta name="description" content="Talent Protocol Metrics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-column">
        <div className="flex justify-content-center align-items-center p-2 background-primary border-bottom-1 border-primary -mx-2">
          <ul className="flex" style={{paddingInlineStart: 0}}>
            {menubarItems.map((item) => (
              <li className="mx-3" key={`menuitem-${item.label}`}>
                {item.url && <a href={item.url} className={item.textClassName}>
                  <span className={item.textClassName}>{item.label}</span>
                </a>}
                {!item.url && <span className={item.textClassName}>{item.label}</span>}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid my-4 md:my-8">
          <div className="col-12 md:col-6 md:pl-6 md:pr-3 md:pb-5">
            <div className="background-primary border-primary p-3 md:p-5 border-1 border-50 border-round-3xl">
              <div className="flex justify-content-between">
                <div>
                  <span className="block text-500 font-medium mb-3">Total Value Locked</span>
                  <div className="text-900 font-medium text-xl">{tvl()}</div>
                </div>
                <div className="flex align-items-center justify-content-center" style={{ width: '2.5rem', height: '2.5rem' }}>
                  <Image src="/talent-protocol.svg" alt="Talent Protocol Logo" width={32} height={32} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 md:col-6 md:pr-6 md:pl-3 md:pb-5">
            <div className="background-primary border-primary p-3 md:p-5 border-1 border-50 border-round-3xl">
              <div className="flex justify-content-between">
                <div>
                  <span className="block text-500 font-medium mb-3">Total Active Stakes</span>
                  <div className="text-900 font-medium text-xl">{totalActiveStakes()}</div>
                </div>
                <div className="flex align-items-center justify-content-center" style={{ width: '2.5rem', height: '2.5rem' }}>
                  <Image src="/talent-protocol.svg" alt="Talent Protocol Logo" width={32} height={32} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 md:col-6 md:pl-6 md:pr-3 md:pb-5">
            <div className="background-primary border-primary p-3 md:p-5 border-1 border-50 border-round-3xl">
              <div className="flex justify-content-between">
                <div>
                  <span className="block text-500 font-medium mb-3">Staked TAL (CELO)</span>
                  <div className="text-900 font-medium text-xl">{data["celo"]["stakedTAL"] || "loading"}</div>
                </div>
                <div className="flex align-items-center justify-content-center" style={{ width: '2.5rem', height: '2.5rem' }}>
                  <Image src="/celo.svg" alt="CELO Logo" width={32} height={32} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 md:col-6 md:pr-6 md:pl-3 md:pb-5">
            <div className="background-primary border-primary p-3 md:p-5 border-1 border-50 border-round-3xl">
              <div className="flex justify-content-between">
                <div>
                  <span className="block text-500 font-medium mb-3">Active Stakes (CELO)</span>
                  <div className="text-900 font-medium text-xl">{data["celo"]["activeStakes"]}</div>
                </div>
                <div className="flex align-items-center justify-content-center" style={{ width: '2.5rem', height: '2.5rem' }}>
                  <Image src="/celo.svg" alt="CELO Logo" width={32} height={32} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 md:col-6 md:pl-6 md:pr-3 md:pb-5">
            <div className="background-primary border-primary p-3 md:p-5 border-1 border-50 border-round-3xl">
              <div className="flex justify-content-between">
                <div>
                  <span className="block text-500 font-medium mb-3">Staked TAL (MATIC)</span>
                  <div className="text-900 font-medium text-xl">{data["matic"]["stakedTAL"] || "loading"}</div>
                </div>
                <div className="flex align-items-center justify-content-center" style={{ width: '2.5rem', height: '2.5rem' }}>
                  <Image src="/polygon.svg" alt="Polygon Logo" width={32} height={32} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 md:col-6 md:pr-6 md:pl-3 md:pb-5">
            <div className="background-primary border-primary p-3 md:p-5 border-1 border-50 border-round-3xl">
              <div className="flex justify-content-between">
                <div>
                  <span className="block text-500 font-medium mb-3">Active Stakes (MATIC)</span>
                  <div className="text-900 font-medium text-xl">{data["matic"]["activeStakes"]}</div>
                </div>
                <div className="flex align-items-center justify-content-center" style={{ width: '2.5rem', height: '2.5rem' }}>
                  <Image src="/polygon.svg" alt="Polygon Logo" width={32} height={32} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 flex flex-wrap">
            <div className="col-12 md:col-6 md:pl-6 md:pr-3">
              <p className="text-light">Staked TAL</p>
              <p className="text-sm line-height-3">The amount of TAL being staked in each chain. This corresponds to TAL bought by users and TAL distributed as rewards already.</p>
            </div>
            <div className="col-12 md:col-6 md:pr-6 md:pl-3">
              <p className="text-light">Active Stakes</p>
              <p className="text-sm line-height-3">The amount of Talent/Supporter pairs that exist in each chain. Each pair was created through the purchase of talent tokens.</p>
            </div>
          </div>
        </div>
        <footer className="flex justify-content-between p-2 md:p-6 border-top-1 border-primary -mx-2">
          <div className="flex-column">
            <h2 className="text-light">Talent Protocol</h2>
            <p className="line-height-3">The web3 professional community<br/>for high-potential builders.</p>
          </div>
          <div className="flex-column">
            <h3 className="text-light text-right">Project</h3>
            <ul className='flex-column justify-content-end' style={{paddingInlineStart: 0}}>
              <li className='mt-2 text-right'>
                <a href={"https://talentprotocol.notion.site/Detailed-Token-Economics-916806c9811b4cabb54bba3a0afc3dd4"} className="text-white">
                  <span>Tokenomics</span>
                </a>
              </li>
              <li className='mt-2 text-right'>
                <a href={"https://talentprotocol.notion.site/Talent-Protocol-101-26a6c4b9f8284e5e8f55603a38629e76"} className="text-white">
                  <span>About</span>
                </a>
              </li>
              <li className='mt-2 text-right'>
                <a href={"https://blog.talentprotocol.com/"} className="text-white">
                  <span>Blog</span>
                </a>
              </li>
              <li className='mt-2 text-right'>
                <a href={"https://help.talentprotocol.com/"} className="text-white">
                  <span>FAQ</span>
                </a>
              </li>
            </ul>
          </div>
        </footer>

      </main>
    </>
  )
}
