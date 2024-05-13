export function Footer() {
  return (
    <footer className='bg-white dark:bg-slate-900 border-t border-white/40'>
      <div className='mx-auto w-full'>
        <div className='grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4'>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
              Company
            </h2>
            <ul className='text-gray-500 dark:text-gray-400 font-medium'>
              <li className='mb-4'>
                <a href='#' className=' hover:underline'>
                  Sobre
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Careers
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Brand Center
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
              Help center
            </h2>
            <ul className='text-gray-500 dark:text-gray-400 font-medium'>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Discord Server
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Twitter
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Facebook
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
              Legal
            </h2>
            <ul className='text-gray-500 dark:text-gray-400 font-medium'>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Política de Privacidade
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Licença
                </a>
              </li>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Termos &amp; Condições
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='px-4 py-6 bg-gray-100 dark:bg-gray-950 md:flex md:items-center md:justify-between'>
          <span className='text-sm text-gray-500 dark:text-ouro sm:text-center'>
            © 2023{" "}
            <a
              className='hover:text-gray-900'
              href='https://belasantacatarina/'
            >
              Bela Santa Catarina™
            </a>
            . Todos os Direitos Reservados.
          </span>
          <div className='flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse'></div>
        </div>
      </div>
    </footer>
  );
}
