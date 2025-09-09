import Link from 'next/link';
import { 
  CheckCircleIcon, 
  LightBulbIcon, 
  ScaleIcon, 
  SparklesIcon, 
  UserGroupIcon, 
  ShieldCheckIcon,
  HomeIcon,
  ChartBarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Former investment banker with a vision to transform the mortgage industry.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Tech leader with 15+ years of experience in fintech and digital transformation.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'David Rodriguez',
    role: 'Head of Lending',
    bio: 'Mortgage industry veteran with a passion for making homeownership accessible.',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    name: 'Priya Patel',
    role: 'Customer Experience',
    bio: 'Dedicated to ensuring every customer has an exceptional homebuying journey.',
    image: 'https://randomuser.me/api/portraits/women/63.jpg',
  },
];

const values = [
  {
    name: 'Customer First',
    description: 'We put our customers at the center of everything we do, always acting in their best interest.',
    icon: UserGroupIcon,
  },
  {
    name: 'Radical Transparency',
    description: 'We believe in being open and honest about our process, pricing, and policies.',
    icon: ScaleIcon,
  },
  {
    name: 'Innovation',
    description: 'We continuously improve our platform to deliver the best mortgage experience.',
    icon: LightBulbIcon,
  },
  {
    name: 'Simplicity',
    description: 'We make the complex simple, so you can focus on what matters most.',
    icon: SparklesIcon,
  },
  {
    name: 'Integrity',
    description: 'We do the right thing, even when no one is watching.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Security',
    description: 'Your data and privacy are protected with bank-level security measures.',
    icon: ShieldCheckIcon,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-700 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-green-700 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">About Better.com</span>
                </h1>
                <p className="mt-3 text-base text-green-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  We're on a mission to make homeownership simpler, faster, and more accessible for everyone.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/start"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/mortgage-calculator"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10"
                    >
                      Calculate Payments
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Happy homeowners"
          />
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              Building a better future for homeownership
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative mb-8 lg:mb-0">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                A New Vision for Mortgages
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Better.com was founded in 2016 with a simple idea: the mortgage process should be better. 
                We started by building a digital mortgage experience that's faster, more transparent, 
                and less expensive than traditional lenders.
              </p>
              <p className="mt-3 text-lg text-gray-500">
                Today, we've helped hundreds of thousands of homeowners finance their homes, saving them 
                time and money with our streamlined online process and competitive rates.
              </p>
              <p className="mt-3 text-lg text-gray-500">
                Our team of experts is dedicated to making homeownership more accessible and affordable 
                for everyone, whether you're buying your first home or refinancing your current mortgage.
              </p>
            </div>

            <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
              <img
                className="relative mx-auto rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Our team working together"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-lg">
                      <value.icon className="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-gray-900">{value.name}</h3>
                    <p className="mt-2 text-base text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Leadership
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              The passionate team driving our mission forward
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((person, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex justify-center">
                      <img
                        className="h-40 w-40 rounded-full ring-4 ring-white"
                        src={person.image}
                        alt={person.name}
                      />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-gray-900 text-center">{person.name}</h3>
                    <p className="text-green-600 text-center">{person.role}</p>
                    <p className="mt-2 text-base text-gray-600 text-center">{person.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-green-200">Get pre-approved in minutes.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/start"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
