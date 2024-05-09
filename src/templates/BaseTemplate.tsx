import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full px-1 text-gray-700 antialiased dark:bg-gray-800 dark:text-gray-200">
      {/* Header section */}
      <header className="w-full border-b border-gray-300 dark:border-gray-600 dark:bg-gray-900">
        <div className="flex max-w-full items-center justify-between px-6 py-4 dark:bg-gray-900 dark:text-white">
          {/* Logo and application name */}
          <div className="flex items-center">
            {/* <img src="/path/to/logo.png" alt="Logo" className="mr-2 size-8" /> */}
            {/* Temporary disable because of the missing image */}
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {AppConfig.name}
            </h1>
          </div>

          {/* Navigation links */}
          <nav>
            <ul className="flex flex-wrap gap-x-5 text-xl">{props.leftNav}</ul>
          </nav>

          {/* Right side content - e.g., user profile or additional options */}
          <div>
            <ul className="flex flex-wrap gap-x-5 text-xl">{props.rightNav}</ul>
          </div>
        </div>
      </header>

      <main>{props.children}</main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.name}.
        {` ${t('made_with')} `}
        <a
          href="https://creativedesignsguru.com"
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
        >
          CreativeDesignsGuru
        </a>
        .
        {/*
         * PLEASE READ THIS SECTION
         * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
         */}
      </footer>
    </div>
  );
};

export { BaseTemplate };
