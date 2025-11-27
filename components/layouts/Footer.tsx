import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className='min-h-[250px] mb-24 md:mb-0 w-full text-[#CACACA] bg-[#1a1a1a]'>
      {/* Top Green Bar */}
      <div className='bg-[#34967c] w-full h-[20px]'></div>

      {/* Main Content */}
      <div className='md:w-[80%] lg:w-[95%] flex flex-col lg:flex-row justify-between pt-8 pb-10 mx-auto gap-10'>
        {/* Logo + Description */}
        <div className='flex flex-col w-[95%] md:w-[75%] mx-auto md:mx-0 gap-6'>
          <div className='flex-shrink-0'>
            <Image
              src='/icons/Vector-2.png'
              alt='Alx-logo'
              width={58.73}
              height={30.6}
            />
          </div>
          <p className='text-xs leading-relaxed'>
            ALX is a platform where travelers can discover and book unique,
            comfortable, and affordable lodging options worldwide. From cozy
            city apartments and tranquil countryside retreats to exotic
            beachside villas, ALX connects you with the perfect place to stay
            for any trip.
          </p>
        </div>

        {/* Links */}
        <div className='grid grid-cols-2 sm:flex sm:flex-row gap-10 w-[85%] md:w-[90%] mx-auto md:mx-0 justify-around md:justify-between text-center'>
          <div className='flex flex-col items-start gap-4'>
            <h6 className='text-lg font-semibold'>Explore</h6>
            <div className='flex flex-col items-start gap-2 text-xs'>
              <p>Apartments in Dubai</p>
              <p>Hotels in New York</p>
              <p>Villa in Spain</p>
              <p>Mansion in Indonesia</p>
            </div>
          </div>

          <div className='flex flex-col items-start gap-4'>
            <h6 className='text-lg font-semibold'>Company</h6>
            <div className='flex flex-col items-start gap-2 text-xs'>
              <p>About us</p>
              <p>Blog</p>
              <p>Career</p>
              <p>Customers</p>
              <p>Brand</p>
            </div>
          </div>

          <div className='flex flex-col items-start gap-4'>
            <h6 className='text-lg  font-semibold'>Help</h6>
            <div className='flex flex-col items-start gap-2 text-xs'>
              <p>Support</p>
              <p>Cancel booking</p>
              <p>Refunds Process</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex flex-col md:flex-row justify-between items-center text-center md:text-left w-[95%] mx-auto border-t border-[#444] py-5 gap-8 md:gap-4 text-xs'>
        <p className='leading-relaxed max-w-xs md:max-w-full text-center md:text-left'>
          Some hotels require you to cancel more than 24 hours before check-in.
          Details{' '}
          <Link href='#' className='text-green-600 underline'>
            here
          </Link>
        </p>
        <div className='flex flex-wrap justify-center lg:justify-end gap-6'>
          <p>Terms of Service</p>
          <p>Policy service</p>
          <p>Cookies Policy</p>
          <p>Partners</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
