'use client';

import CheckIcon from '@/assets/check.svg';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

const pricingTiers = [
  {
    title: "Day Pass",
    monthlyPrice: 15,
    buttonText: "Buy Day Pass",
    popular: false,
    inverse: false,
    features: [
      "Access to all exhibits",
      "Interactive touch tanks",
      "Daily feeding sessions",
      "Gift shop discounts",
    ],
  },
  {
    title: "Monthly Pass",
    monthlyPrice: 40,
    buttonText: "Join Monthly",
    popular: true,
    inverse: true,
    features: [
      "Unlimited visits for a month",
      "Access to special events",
      "Exclusive members-only tours",
      "10% off cafe and gift shop",
      "Priority entry during peak hours",
    ],
  },
  {
    title: "Annual Pass",
    monthlyPrice: 100,
    buttonText: "Join Annually",
    popular: false,
    inverse: false,
    features: [
      "Unlimited visits for a year",
      "Free guest passes (4 per year)",
      "Exclusive access to member lounges",
      "Invitations to behind-the-scenes tours",
      "15% off cafe and gift shop",
      "Early access to new exhibits",
      "Free parking",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Memberships</h2>
          <p className="section-description mt-5">
            Explore the wonders of the ocean with our flexible membership options. Choose a plan that fits your visit needs.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({ title, monthlyPrice, buttonText, popular, inverse, features }) => (
              <div
                className={twMerge(
                  'card',
                  inverse === true && 'border-black bg-black text-white'
                )}
                key={title}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      'text-lg font-bold text-black/50',
                      inverse === true && 'text-white/60'
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-bold"
                        animate={{
                          backgroundPositionX: '100%',
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: 'linear',
                          repeatType: 'loop',
                        }}
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                </div>
                <button
                  className={twMerge(
                    'btn btn-primary w-full mt-[30px] transition duration-300 hover:text-white/85',
                    inverse === true && 'bg-white text-black hover:text-black/70'
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li
                      className="text-sm flex items-center gap-4"
                      key={feature}
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
