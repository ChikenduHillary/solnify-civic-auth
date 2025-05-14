import connect from "@/public/images/connect.svg";
import create from "@/public/images/create.svg";
import earn from "@/public/images/earn.svg";
import Image from "next/image";

interface Step {
  icon: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: connect,
    title: "Setup Your Wallet",
    description:
      "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
  },
  {
    icon: create,
    title: "Create Collection",
    description:
      "Upload your work and setup your collection. Add a description, social links and floor price.",
  },
  {
    icon: earn,
    title: "Start Earning",
    description:
      "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-4 md:px-[50px] py-8 md:py-20 bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-400">Find Out How To Get Started</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-backgroundSecondary rounded-2xl p-5 text-center flex flex-col items-center"
          >
            <div className="relative mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
                {/* Decorative elements */}
                <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl" />
                <Image
                  src={step.icon}
                  width={100}
                  height={100}
                  alt={step.title}
                />
              </div>
              {/* Decorative dots and shapes */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full opacity-50" />
              <div className="absolute bottom-0 -left-2 w-2 h-2 bg-white rounded-full opacity-30" />
              <div className="absolute top-1/2 -right-3 w-1.5 h-1.5 bg-white rounded-full opacity-40" />
            </div>

            <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-400 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
