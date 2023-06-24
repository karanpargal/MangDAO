import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { PhoneIcon, StarIcon } from "@heroicons/react/outline";
import Earth from "../Assests/Earth.jpg";
import Karan from "../Assests/Karan.jpeg";
import { useAccount } from "@particle-network/connect-react-ui";
import axios from "axios";

const Landing = () => {
  const account = useAccount();
  const navigate = useNavigate();
  async function handleConnect() {
    const { data } = await axios.post("http://localhost:8000/createUser", {
      publicKey: account,
    });
    console.log(data);
  }

  useEffect(() => {
    if (account) {
      handleConnect();
    }
  }, [account]);

  return (
    <div>
      <Navbar />
      <div>
        <div className="flex bg-violet-100 w-full h-[660px] text-black text-left p-4 ">
          <div className="grid md:grid-cols-2 max-w-[1240px]   ">
            <div className="flex flex-col justify-center md:items-start w-full px-2 pl-20 py-8 ">
              <h1 className="py-3 text-3xl md:text-7xl font-bold">
                GateBounty
              </h1>
              <p className="text-2xl mt-6">
                Empowering Collaboration through Token-Gated DAO Opportunities
              </p>
              {account ? (
                <button
                  onClick={() => navigate("/dashboard")}
                  className="bg-violet-700 text-white px-8 py-3 rounded-full mt-8"
                >
                  Dashboard
                </button>
              ) : (
                <button className="bg-violet-700 text-white px-8 py-3 rounded-full mt-8">
                  Connect Wallet from Navbar
                </button>
              )}
            </div>
            <div>
              <img className="" alt="IMAGE"></img>
            </div>
          </div>
        </div>

        <div className="bg-violet-100 text-justify">
          <h1 className="text-5xl font-bold text-left pl-8 pt-12">Features</h1>

          <div className="w-full"></div>
          <div className=" grid grid-cols-3 lg:grid-cols-3  gap-x-8 px-4   sm:pt-20 text px-10">
            <div className="p-8 bg-white rounded-xl shadow-2xl border-2 border-violet-700 hover:scale-1.5">
              <StarIcon className="w-16 p-4 bg-violet-700 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Particle Auth</h3>
              <p className="text-gray-600 text-xl">
                Our platform leverages a cutting-edge Particle Network
                Authentication System, providing a seamless and secure
                onboarding process. Users can easily authenticate their
                identities and gain access to the token-gated DAO bounty
                platform, streamlining the onboarding experience and ensuring
                authenticity.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-2xl border-2 border-violet-700">
              <StarIcon className="w-16 p-4 bg-violet-700 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">
                Polybase NFT Token Gating
              </h3>
              <p className="text-gray-600 text-xl">
                The platform offers a robust bounty system powered by token
                gating. Users holding specific tokens gain exclusive access to
                participate in DAO bounties, where they can contribute their
                skills, complete tasks, and earn rewards. This feature
                incentivizes token holders to actively engage in the DAO
                ecosystem and contribute to its growth.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-2xl border-2 border-violet-700 ">
              <StarIcon className="w-16 p-4 bg-violet-700 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">
                Trustworthy Submission Verification
              </h3>
              <p className="text-gray-600 text-xl">
                To ensure the quality and trustworthiness of submissions within
                the DAO bounty platform, we implement a robust verification
                system. Submissions undergo a thorough evaluation process, which
                may include peer reviews, expert assessments, or consensus-based
                validation. By prioritizing reliable and high-quality
                submissions, the platform encourages loyal contributors and
                cultivates an environment of trust and integrity within the DAO
                ecosystem. This feature promotes the reputation of the platform
                and enhances the overall credibility of the DAO's outcomes and
                deliverables.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-violet-100">
          <h1 className="text-5xl font-bold text-left pl-8 pt-12">
            Future Plans
          </h1>

          <div className="w-full"></div>
          <div className=" grid grid-cols-3 lg:grid-cols-3  gap-x-8 px-4   sm:pt-20 text px-10">
            <div className="p-8 bg-white rounded-xl shadow-2xl border-2 border-violet-700 hover:scale-1.5">
              <StarIcon className="w-16 p-4 bg-violet-700 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Reputation System</h3>
              <p className="text-gray-600 text-xl">
                The platform incorporates a reputation system that rewards users
                based on their contributions and performance within the DAO
                bounty ecosystem. By tracking and evaluating user activity, the
                reputation system promotes trust, identifies top performers, and
                encourages ongoing engagement. Users with higher reputation
                scores can unlock additional benefits and opportunities within
                the platform.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-2xl border-2 border-violet-700">
              <StarIcon className="w-16 p-4 bg-violet-700 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">
                Smart Contract Automation
              </h3>
              <p className="text-gray-600 text-xl">
                Leveraging the power of smart contracts, the platform automates
                various aspects of the bounty lifecycle, including task
                verification, reward distribution, and dispute resolution. Smart
                contracts ensure transparency, immutability, and efficiency in
                executing bounty-related processes, reducing the need for manual
                intervention and streamlining operations.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-2xl border-2 border-violet-700 ">
              <StarIcon className="w-16 p-4 bg-violet-700 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">
                Collaborative Project Management
              </h3>
              <p className="text-gray-600 text-xl">
                To ensure the quality and trustworthiness of submissions within
                the DAO bounty platform, we implement a robust verification
                system. Submissions undergo a thorough evaluation process, which
                may include peer reviews, expert assessments, or consensus-based
                validation. By prioritizing reliable and high-quality
                submissions, the platform encourages loyal contributors and
                cultivates an environment of trust and integrity within the DAO
                ecosystem. This feature promotes the reputation of the platform
                and enhances the overall credibility of the DAO's outcomes and
                deliverables.
              </p>
            </div>
          </div>
        </div>
        <section class="bg-violet-100 text-black">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
                Our Team
              </h2>
            </div>
            <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
              <div class="items-center bg-gray-50 rounded-lg shadow sm:flex">
                <a href="#">
                  <img
                    class="w-60 rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={Karan}
                    alt="Bonnie Avatar"
                  />
                </a>
                <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900">
                    <a href="#">Karan Pargal</a>
                  </h3>
                  <span class="text-gray-500 ">Full Stack Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 ">
                    Talent wins games, but teamwork wins championships.
                  </p>
                </div>
              </div>
              <div class="items-center bg-gray-50 rounded-lg shadow sm:flex ">
                <a href="#">
                  <img
                    class="w-60 rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={Karan}
                    alt="Jese Avatar"
                  />
                </a>
                <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 ">
                    <a href="#">Yashaswini Singh Shaktawat</a>
                  </h3>
                  <span class="text-gray-500 ">Frontend Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 ">
                    Alone we can do so little; together we can do so much.
                  </p>
                </div>
              </div>
              <div class="items-center bg-gray-50 rounded-lg shadow sm:flex ">
                <a href="#">
                  <img
                    class="w-60 rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={Karan}
                    alt="Michael Avatar"
                  />
                </a>
                <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 ">
                    <a href="#">Mehul Dadlani</a>
                  </h3>
                  <span class="text-gray-500 ">App Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 ">
                    Individually, we are one drop. Together, we are an ocean
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
